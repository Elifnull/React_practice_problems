const express = require("express");

const app = express();
const port = 8000;

console.log("ilove nodemon")
app.get("/api", (req, res) => {
    console.log(req );
    res.json({ message: "Hello World" });
});
app.post("/api/welcome/nud", (req, res) => {
    res.json({message: ["MERN Goodness", "MERN baby MERN"], Broly: req.body})
});

app.listen( port, () => console.log(`Listening on port: ${port}`) );