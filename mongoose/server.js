const express = require("express");
const app = express();


// this is needed to allow for JASON post and get requests
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//routes
app.get();

app.listen(8000, () => {
    console.log("You have successfully started your server on port 8k");
})