require("dotenv").config();
// require("./config/passport-strategies/local");
// require("./config/passport-strategies/google-oauth");
// require("./config/passport-strategies/github-oauth");
// require("./config/routes/routes");
// require("./config/models/user");
const express = require("express");
const path = require("path");
// const bodyParser = require("body-parser");
// const cookieParser = require("cookie-parser");
// const session = require("express-session");
const port = process.env.PORT || 3000;
const app = express();
const history = require("connect-history-api-fallback");

const Q = require("q");
const request = require("request");
const mailgun = require("mailgun.js");

const mailgunKey = (process.env.MAILGUN_API_KEY);

const mg = mailgun.client({ username: "api", key: mailgunKey });

app.use(history());
app.use(express.static(path.join(__dirname, "dist")));

// verify from https://goo.gl/8a6Hgm
function verifyHumanity(req) {
  const secretKey = process.env.CAPTCHA_SECRET_KEY;
  const d = Q.defer();
  const recaptchaResponse = req.body.gRecaptchaResponse;
  request.post("https://www.google.com/recaptcha/api/siteverify", {
    form: {
      secret: secretKey,
      response: recaptchaResponse
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

app.post("/contact-us", function(req, res) {
  verifyHumanity(req)
    .then(() => {
      const userReq = req.body;
      mg.messages.create(process.env.MAILGUN_DOMAIN, {
        from: userReq.from,
        to: ["mwilkes@emich.edu"],
        subject: "Contact Form Submission",
        text: "Testing some Mailgun awesomness!",
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
