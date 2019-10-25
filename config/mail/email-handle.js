const mailgun = require("mailgun-js");
const DOMAIN = 'dev.sgwdev.org';
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Parse form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


const mg = mailgun({apiKey: process.env.MAILGUN_API_KEY, domain: DOMAIN});

app.get('/config/mail/email-handle.js', (req, res, next) => {
  const servername = '';
  const options = {};

  mg.sendText(
    // From
    process.env.MAILGUN_FROM_EMAIL,
    // To
    req.body.email,
    // Subject
    'Contact Form Submission',
    // Body
    'Testing Mailgun',
    servername,
    options,
    err => {
      if (err) {
        next(err);
        return;
      }
      // Render the index route on success
      res.render('/thank-you', {
        sent: true
      });
    }
  );
});