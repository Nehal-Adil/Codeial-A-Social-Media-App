const User = require("../models/user");

module.exports.profile = function (req, res) {
  return res.render("user_profile", {
    title: "User Profile",
  });
};

//Render the Sign Up page
module.exports.signUp = function (req, res) {
  if (req.isAuthenticated()) {
    return res.redirect("/users/profile");
  }
  return res.render("user_sign_up", {
    title: "Codeial | Sign Up",
  });
};

//Render the Sign In page
module.exports.signIn = function (req, res) {
  //if the user is already signed in, than user should not be able to see the sign in page
  if (req.isAuthenticated()) {
    return res.redirect("/users/profile");
  }
  return res.render("user_sign_in", {
    title: "Codeial | Sign In",
  });
};

//get the Sign up data
module.exports.create = function (req, res) {
  if (req.body.password != req.body.confirm_password) {
    return res.redirect("back");
  }

  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        User.create(req.body);
        console.log("...", req.body);
        return res.redirect("/users/sign-in");
      } else {
        console.log("User already there");
        return res.redirect("back");
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

//Sign In & create a session for the User
module.exports.createSession = function (req, res) {
  return res.redirect("/");
};
