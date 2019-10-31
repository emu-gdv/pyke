require("dotenv").config();
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;
const app = express();
const history = require("connect-history-api-fallback");
const Q = require("q");
const request = require("request");
const mailgun = require("mailgun.js");
const mailgunKey = (process.env.MAILGUN_API_KEY);
const mg = mailgun.client({ username: "api", key: mailgunKey });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(history());
app.use(express.static(path.join(__dirname, "dist")));

// verify from https://goo.gl/8a6Hgm
function verifyHumanity(req) {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  const d = Q.defer();
  const recaptchaResponse = req.body.gRecaptchaResponse;
  console.log(recaptchaResponse);
  request.post("https://www.google.com/recaptcha/api/siteverify", {
    form: {
      secret: secretKey,
      response: recaptchaResponse,
      remoteip: req.connection.remoteAddress
    }
  }, (err, httpResponse, body) => {
    if (err) {
      d.reject(new Error(err));
    } else {
      const r = JSON.parse(body);
      if (r.success) {
        d.resolve(r.success);
      } else {
        console.log("verification error response: ", r);
        d.reject(new Error());
      }
    }
  });
  return d.promise;
}

app.post("/api/contact-form", function(req, res) {
  verifyHumanity(req)
    .then(() => {
      const userReq = req.body;
      mg.messages.create(process.env.MAILGUN_DOMAIN, {
        from: userReq.from,
        to: ["mwilkes@emich.edu, sgw_dev@emich.edu"],
        subject: "dev.sgwdev.org form submission TODO Change",
        text: "SGW Dev Contact Form Submission",
        html: `
            <h1>                  Contact Form Submission</h1>
            <p><b>From: </b>      ${userReq.name}</p>
            <p><b>Email: </b>     ${userReq.email}</p>
            <p><b>Message: </b>   ${userReq.message}</p>`
      })
        .then(res.send({ status: "OK" }))
        .then(msg => console.log(msg)) // logs response data
        .catch(err => console.log(err)); // logs any error
    })
    .catch(() => {
      // failure
      res.status(400);
      res.send({
        error: "Please verify that you're a human"
      });
    });
});

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(port, () => console.log("Express App Listening on " + port.toString()));
