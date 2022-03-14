const express = require("express");
const faker = require("faker");

const app = express();
const port = 8000;


//some important app middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));



app.listen(port, () => console.log(`listening port: ${port}`));