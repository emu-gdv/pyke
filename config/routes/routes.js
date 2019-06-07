const express = require("express");
const path = require("path");
const app = express();

const User = require("/config/models/user");
const mongoose = require("mongoose");
const passport = require("passport");
/*
Routes
 */

// Register User
app.post('/register', function(req, res){
  const password = req.body.password;
  const password2 = req.body.password2;

  if (password == password2){
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      username: req.body.username,
      password: req.body.password
    });

    User.createUser(newUser, function(err, user){
      if(err) throw err;
      res.send(user).end()
    });
  } else{
    res.status(500).send("{errors: \"Passwords don't match\"}").end()
  }
});

// Login Route
app.post("/login",
  passport.authenticate("local", { failureRedirect: "/login" }),
  function(req, res) {
    res.redirect("/dashboard/");
  });

// Google Login
app.get("/auth/google",
  passport.authenticate("google"));

// Promise Callback
app.get("/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function(req, res) {
    res.redirect("/dashboard");
  });

// Profile
app.get("/profile",
  require("connect-ensure-login").ensureLoggedIn(),
  function(req, res) {
    res.render("profile", { user: req.user });
  });

// Endpoint to get current user
app.get('/user', function(req, res){
  res.send(req.user);
})

// Log Out
app.get("/logout", function(req, res) {
  req.logout();
  res.redirect("/");
});

// All Routes start with Index
app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});