require("dotenv").config();
const express = require("express");
const cors = require('cors')

const app = express();

const corsOpts = {
  origin: '*',

  methods: [
    'GET',
    'POST',
  ],

  allowedHeaders: [
    'Content-Type',
  ],
};

app.use(cors(corsOpts));

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

// Middleware
app.use(express.json());

// Routes
app.use(require("./routes/routes"));


// Global Error Handler
app.use((err, req, res, next) => {
  console.log(err.stack);
  console.log(err.name);
  console.log(err.code);

  res.status(500).json({
    message: "Sorry, Something went wrong, Please Try Again...",
  });
});

//Server
app.listen(5000, () => {
  console.log("Server Runs on port 5000...");
});
