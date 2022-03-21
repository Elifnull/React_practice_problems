const mongoose = require('mongoose');
const database = ''

mongoose.connect(`mongodb://localhost/${database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=> console.log(`Established connection to ${database}`))
    .catch(err => console.log(`Something went wrong when connecting to database error: ${err}`));