require("dotenv").config();

const express = require("express");
const path = require("path");

const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const LocalStrategy = require("passport-local").Strategy;

const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "dist")));

app.use(passport.initialize());
app.use(passport.session());
/*
Passport JS Section
 */

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
      User.findOrCreate({ googleId: profile.id }, function(err, user) {
        return done(err, user);
      });
    }
  )
);

// GET /auth/google
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  The first step in Google authentication will involve
//   redirecting the user to google.com.  After authorization, Google
//   will redirect the user back to this application at /auth/google/callback
app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["https://www.googleapis.com/auth/plus.login"]
  })
);

// GET /auth/google/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function(req, res) {
    res.redirect("/");
  }
);

passport.use(
  new LocalStrategy(function(username, password, done) {
    User.findorCreate({ username: username }, function(err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false);
      }
      if (!user.verifyPassword(password)) {
        return done(null, false);
      }
      return done(null, user);
    });
  })
);

passport.serializeUser(function(user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
  User.findOne({ username: username }, function(err, user) {
    if (err) {
      return cb(err);
    }
    cb(null, user);
  });
});

/*
Routes
 */

app.post("/login",
  passport.authenticate("local", { failureRedirect: "/login" }),
  function(req, res) {
    res.redirect("/");
  });

app.get("/auth/google",
  passport.authenticate("google"));

app.get("/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function(req, res) {
    res.redirect("/");
  });

app.get("/profile",
  require("connect-ensure-login").ensureLoggedIn(),
  function(req, res) {
    res.render("profile", { user: req.user });
  });

app.get("/logout", function(req, res) {
  req.logout();
  res.redirect("/");
});

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(port);
