const express = require("express");
const cors = require("cors");

const app = express();

app.use(
  express.json({
    limit: "16kb",
  })
);

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(
  express.urlencoded({
    limit: "16kb",
    extended: true,
  })
);
app.use(express.static("public"));

//Routes
const postsRoute = require("./routes/Posts.js");
const commentRoute = require("./routes/Comments.js");

app.use("/posts", postsRoute);
app.use("/comments", commentRoute);
module.exports = app;
