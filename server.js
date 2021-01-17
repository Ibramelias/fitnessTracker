const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");
const db = require("./models");


const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


//password workout123

const MONGODB_URI =  'mongodb+srv://ibram-admin:workout123@cluster0.gteek.mongodb.net/workoutdb?retryWrites=true&w=majority'

mongoose.connect ( MONGODB_URI || 'mongodb://localhost/workoutdb',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
);


// to make sure we are connected with MongoDB
mongoose.connection.on('connected', ()=>{
    console.log("Mongoose is conneced")
})



app.get("/", (req, res) => {
    res.send(index.html);
});

app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/exercise.html"));
});

app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/stats.html"));
});

app.get("/api/workouts", (req,res) => {
    db.Exercise.find({}).then(data =>{
        data.forEach(exercise => {
            var total = 0;
            exercise.exercises.forEach(e=>{
                total+= e.duration;
            });
            exercise.totalDuration = total;
        });
        res.json(data);
    }).catch(err =>{
        console.log(err);
    })
})


app.post("/api/workouts", ({ body },res) => {
    db.Exercise.create(body).then((data) => {
      res.json(data);
    }).catch(err => {
        console.log(err);
      });
  })

  app.put("/api/workouts/:id", (req, res) => {
    db.Exercise.findByIdAndUpdate(
      // get the current ID
      req.params.id,
      // "push" our body of request data into exercises object
      { $push: { exercises: req.body } }
    )
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        console.log(err);
      });
  });


app.get("/api/workouts/range", (req,res)=>{
    db.Exercise.find({}).then(data=>{
        res.json(data);
    }).catch(err =>{
        console.log(err);
    })
})


// Listening to server PORT
app.listen(process.env.PORT || 3000, () => {
    console.log("App running on port 3000!");
});





