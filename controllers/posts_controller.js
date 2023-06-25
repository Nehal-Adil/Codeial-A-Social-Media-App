const Post = require("../models/post");

module.exports.create = function (req, res) {
  Post.create({
    content: req.body.content,
    user: req.user._id,
  })
    .then((user) => {
      console.log(req.body.content);
      return res.redirect("back");
    })
    .catch((err) => {
      console.log("Error in creating a post");
    });
};
