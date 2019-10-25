const express = require("express");
const Mailgun = require("mailgun-js");
const nodemailer = require("nodemailer");
const nodemailerTransport = require("nodemailer-mailgun-transport");

const auth = {
  auth: {
    api_key: process.env.MAILGUN_API_KEY,
    domain: "dev.sgwdev.org"
  }
};

const nodemailerMailgun = nodemailer.createTransport(nodemailerTransport(auth));
const app = express();
app.post("/config/mail/email-handle", (req, res) => {
  nodemailerMailgun.sendMail({
    from: req.body.email,
    to: "mwilkes@emich.edu",
    subject: req.body.subject, html: `<p>$ {req.body.message }</p>`,
    text: "Mailgun rocks, pow pow!"
  }, function(err, info) {
    if (err) {
      console.log("Error: " + err);
    } else {
      console.log("Response: " + info);
    }
  });
});