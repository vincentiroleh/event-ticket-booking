"use strict";

// Import modules
const express = require("express");
const path = require("path");

// Instantiating express
const app = express();

// App settings
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// App middleware
app.use(express.static("public"));

// App routes
app.get("/", (req, res) => {
  res.render("index");
});

// Handel unmatched route
app.use((req, res, next) => {
  res.status(404).json({
    error: {
      name: "Error",
      status: 404,
      message: "Invalid Request",
      statusCode: 404,
      redirect: "http://localhost:8080/",
    },
  });
  next();
});

// App Server
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});
