const express = require('express');
const passport = require('passport');
const mongoose = require('mongoose');
const cors = require('cors');
const { errors } = require('celebrate');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
require('dotenv').config();

const connectDB = require('./db/connection');
const routes = require('./routes/');
const UserModel = require('./db/User');

// Create the Express applictation
const app = express();

// Connecting with the database
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: "http://localhost:3000", // <-- the location of the react app we're connecting to
    credentials: true
}));

// Session Setup
// const sessionStore = new MongoStore({ 
//     mongooseConnection: connection, 
//     collection: 'session'
// })

// app.use(session({
//     secret: process.env.SECRET,
//     resave: false,
//     saveUninitialized: true,
//     store: sessionStore,
//     cookie: {
//         maxAge: 1000 * 60 * 60 * 24 // Equals 1 day
//     }
// }));

// Passport Authentication


// Routes
app.use('/', routes);
app.use(errors())

// Start the server
const PORT = process.env.PORT || 3020
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))

