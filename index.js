const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

const port = 8000;

const expressLayouts = require("express-ejs-layouts");

//MongoDB
const db = require("./config/mongoose");

//used for session cookie
const session = require("express-session");
const passport = require("passport");
const passportLocal = require("./config/passport-local-strategy");

app.use(express.urlencoded());

app.use(cookieParser());

app.use(express.static("./assets"));

app.use(expressLayouts);
//extract styles and scripts from sub pages into the layout
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

//setup the view engine
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(
  session({
    // TODO change the secret before deployement in production  mode
    name: "codeial",
    secret: "blahsomething",
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 100,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

//use express router
app.use("/", require("./routes"));

app.listen(port, function (err) {
  if (err) {
    console.log("Error", err);
  }
  console.log(`The server is running on port: ${port}`);
});
