const express = require("express");
const faker = require("faker");
const app = express();
const port = 8000;

app.use(express.json()); // allows us to parse JSON objects coming from POST and PUT requests
app.use(express.urlencoded({extended: true})); // allows us to parse string and arrays coming in with JSON objects

console.log("ilove nodemon")
app.get("/api", (req, res) => {
    console.log(req );
    res.json({ message: "Hello World" });
});
app.post("/api/welcome/nud", (req, res) => {
    res.json({message: ["MERN Goodness", "MERN baby MERN"], Broly: req.body})
});

app.listen( port, () => console.log(`Listening on port: ${port}`) );