require("dotenv").config();
const express = require("express");
const exphbs = require("express-handlebars");
const morgan = require('morgan');

const db = require("./models");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware that logs on the console api calls
app.use(morgan('dev')); 
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// prevent CORS errors
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//   );
//   if (req.method === "OPTIONS") {
//     res.header("Access-Control-Allow-Methods", "PUT, POST, DELETE, GET");
//     return res.status(200).json({});
//   }
//   next();
// });


// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
var htmlRoutes = require("./routes/html-routes");
var apiRoutes = require("./routes/api-routes");


app.use("/", htmlRoutes);
app.use("/api/", apiRoutes);

// Midleware to link errors
// app.use((req, res, next) => {
//   const error = new Error("Not found");
//   error.status = 404;
//   next(error);
// });

// Handle database error
// app.use((error, req, res, next) => {
//   res.status(error.status || 500);
//   res.json({
//     error: {
//       message: error.message
//     }
//   });
// });

var syncOptions = { force: true };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = false;
}


// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
