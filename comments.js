// Create web server
// Load the Express module on our server
const express = require("express");
// Load the CORS module on our server
const cors = require("cors");
// Load the Mongoose module on our server
const mongoose = require("mongoose");
// Load the body-parser module on our server
const bodyParser = require("body-parser");
// Load the Express module on our server
const app = express();
// Load the Express module on our server
const port = 3000;
// Load the Express module on our server
const commentRoutes = express.Router();
// Load the Express module on our server
const comment = require("./comment.model");
// Load the Express module on our server
const User = require("./user.model");
// Load the Express module on our server
const jwt = require("jsonwebtoken");
// Load the Express module on our server
const bcrypt = require("bcrypt");
// Load the Express module on our server
const saltRounds = 10;
// Load the Express module on our server
const myPlaintextPassword = "s0/\/\P4$$w0rD";
// Load the Express module on our server
const someOtherPlaintextPassword = "not_bacon";

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://