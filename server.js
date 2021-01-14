const {json} = require("express");
const express = require ("express");
const mongojs = ("mongojs");
const logger = require ("morgan");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const databaseUrl = "fitness";
const collection = ["workout"];

const db = mongojs(databaseUrl, collection);

db.on("error", error=>{
    console.log("Database Error:", error);
});

app.get("/", (req,res)=>{
    res.send(index.html);
});



app.post("/submit", (req,res)=>{
    console.log(req.body)
});