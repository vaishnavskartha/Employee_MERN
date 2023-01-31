var express=require("express");
var Bodyparser=require("body-parser");
var Mongoose=require("mongoose");
var cors=require("cors");
const employeedata = require('./routes/employeeData');
const login = require('./routes/loginData');

var app= new express();

app.use(Bodyparser.json());
app.use(Bodyparser.urlencoded({extended:false}));
app.use(cors());
Mongoose.set("strictQuery", false);


Mongoose.connect("mongodb+srv://Vaishnav_S_Kartha:Vishnu14061996@cluster0.zjmnu1k.mongodb.net/EmployeeDB?retryWrites=true&w=majority",{ useNewUrlParser: true });

app.use('',employeedata);
app.use('',login);


app.listen(5000,()=>{
    console.log("Server is running on the Port 5000");
})