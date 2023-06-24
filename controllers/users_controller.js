module.exports.profile = function (req, res) {
  return res.render("user_profile", {
    title: "User Profile",
  });
};

//Render the Sign Up page
module.exports.signUp = function (req, res) {
  return res.render("user_sign_up", {
    title: "Codeial | Sign Up",
  });
};

//Render the Sign In page
module.exports.signIn = function (req, res) {
  return res.render("user_sign_in", {
    title: "Codeial | Sign In",
  });
};

//get the Sign up data
module.exports.create = function (req, res) {
  // TODO later
};

//Sign In & create a session for the User
module.exports.createSession = function (req, res) {
  // TODO later
};
