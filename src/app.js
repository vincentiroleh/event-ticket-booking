// Import modules
const express = require("express");
const path = require("path");

// Instantiating express
const app = express();

// Setup EJS engine and make public directory accessible
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static("public"));

// Serve our ejs file on the / endpoint
app.get("/", (req, res) => {
  res.render("index");
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`App listening on http://127.0.0.1:${port}`);
});
