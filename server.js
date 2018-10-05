var express = require("express");
var bodyParser = require("body-parser");


var app = express();
var PORT = process.env.PORT || 4955;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

// Routes
require("./routes/htmlRoutes.js")(app);



// Starting the server, syncing our models ------------------------------------/
app.listen(PORT, function () {
  console.log(
    "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
    PORT,
    PORT
  );
});

module.exports = app;
