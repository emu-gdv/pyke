const express = require("express");
const Mailgun = require("mailgun-js");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

const mg = new Mailgun(process.env.MAILGUN_API_KEY);

// Parse form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => res.render("index"));

app.post("/contact-us", (req, res, next) => {
  const servername = "";
  const options = {};

  mg.sendText(
    // From
    "info@sgwdev.org",
    // To
    req.body.email,
    // Subject
    "Test Email",
    // Body
    "Mailgun on App Engine with Node.js",
    servername,
    options,
    err => {
      if (err) {
        next(err);
        return;
      }
      // Render the index route on success
      res.render("index", {
        sent: true
      });
    }
  );
});
