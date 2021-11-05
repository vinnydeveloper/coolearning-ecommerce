const express = require("express");
const routes = require("./routes");
const logger = require("morgan");
const path = require("path");
const session = require("express-session");
const methodOverride = require("method-override");

var app = express();
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(
  session({
    secret: "fake-instagram2021",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(methodOverride("_method"));

app.use((req, res, next) => {
  res.locals.query = req.query;
  next();
});

app.use("/", routes);

app.listen(4000, () => console.log(`🚀 Server run on port 4000`));
