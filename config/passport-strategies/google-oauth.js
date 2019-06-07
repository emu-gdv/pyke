const passport = require("passport");
const mongoose = require("mongoose");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const User = require("../models/user");

// Use the GoogleStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback with a user object.
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env["OAUTH_ID"],
      clientSecret: process.env["OAUTH_SECRET"],
      callbackURL: "/auth/google/callback"
    },
    function(accessToken, refreshToken, profile, done) {
      User.findOne({ "google.id": profile.id }, function(err, user) {
        if (err) return done(err);
        if (user) return done(null, user);
        else {
          // if there is no user found with that google id, create them
          const newUser = new User();

          // set all of the google information in our user model
          newUser.google.id = profile.id;
          newUser.google.token = accessToken;
          newUser.google.name = profile.displayName;
          if (typeof profile.emails != "undefined" && profile.emails.length > 0)
            newUser.google.email = profile.emails[0].value;

          // save our user to the database
          newUser.save(function(err) {
            if (err) throw err;
            return done(null, newUser);
          });
        }
      });
    }
  )
);