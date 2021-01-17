const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = ('path');
const db = require("./models");


const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


//password Ibram-123456

const MONGODB_URI = 'mongodb+srv://ibram-admin:Ibram-123456@cluster0.gteek.mongodb.net/workouts?retryWrites=true&w=majority'

mongoose.connect(MONGODB_URI || 'mongodb://localhost/workouts',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }
);



// to make sure we are connected with MongoDB
mongoose.connection.on('connected', () => {
    console.log("Mongoose is conneced")
})


// API routes

require("./Routes/api-route")(app);
require("./Routes/html- routes")(app)


// Listening to server PORT
app.listen(process.env.PORT || 3000, () => {
    console.log("App running on port 3000!");
});



