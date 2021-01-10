const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const cookieParser = require('cookie-parser');

const routes = require('./routes/');
require('dotenv').config();
require('./db/connection')();

// Create the Express applictation
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: "http://localhost:3000", // <-- the location of the react app we're connecting to
    credentials: true
}));
app.use(cookieParser());

// Routes
app.use('/', routes);
app.use(errors())

// Start the server
const PORT = process.env.PORT || 3020
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))

