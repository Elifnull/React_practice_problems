const express = require("express");
const mongoose = require("mongoose");
const databaseName = "admin";

const app = express();


// this is needed to allow for JASON post and get requests
app.use(express.json());
app.use(express.urlencoded({extended: true}));

mongoose.connect("mongodb://localhost/" + databaseName, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log(`You connected to the ${databaseName} database`);
})
.catch((err)=>{
    console.log(`there was an error connecting to the ${databaseName} database`);
})

// create the model - shape of the documents inside of a collection
const MongooseSchema = new mongoose.Schema({
    name: { 
        type: String,
        minlength: 3,
    },
    age: {
        type: Number,
    },
    isFriendly: {
        type: Boolean,
    },
}, { timestamps: true });
//routes


app.listen(8000, () => {
    console.log("You have successfully started your server on port 8k");
});