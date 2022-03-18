const express = require("express");
const faker = require("faker");

const app = express();
const port = 8000;
const createUser = () => {
    const user = {
        id: faker.datatype.uuid(),
        name: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        password: faker.internet.password()
    }
    return user;
};

const createCompany = () => {
    const company = {
        id: faker.datatype.uuid(),
        name: faker.company.companyName(),
        address:{
            street:faker.address.streetAddress(),
            city:faker.address.cityName(),
            state:faker.address.state(),
            zipcode:faker.address.zipCode(),
            country:faker.address.country(),
        },
    }
    return company;  // return is important but probably not necessary!
};
//some important app middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/api/users/new", (req, res) =>{
    res.json(createUser())
});

app.get("/api/companies/new", (req, res)=>{
    res.json(createCompany())
});

app.get("/api/user/company",(req,res)=>{
    res.json([createCompany(),createUser()])
});

app.listen(port, () => console.log(`listening port: ${port}`));