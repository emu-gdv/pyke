const API_KEY = 'YOUR_API_KEY';
const DOMAIN = 'YOUR_DOMAIN_NAME';
const mailgun = require('mailgun-js')({apiKey: process.env.MAILGUN_API_KEY, domain: process.env.MAILGUN_DOMAIN});

const data = {
  from: 'Excited User <me@samples.mailgun.org>',
  to: 'foo@example.com, bar@example.com',
  subject: 'Hello',
  text: 'Testing some Mailgun awesomeness!'
};

mailgun.messages().send(data, (error, body) => {
  console.log(body);
});