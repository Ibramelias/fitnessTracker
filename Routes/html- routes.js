
// require path to html // 
const path = require("path");

module.exports = function (app) {

    app.get("/", (req, res) => {
        res.send(index.html);
    });

    app.get("/exercise", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });

    app.get("/stats", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });

}