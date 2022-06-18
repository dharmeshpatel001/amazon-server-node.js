//IMPORT FROM PACKAGES
const express = require("express");
const mongoose = require("mongoose");
const adminRouter = require("./routes/admin");
//that means import some packages from dependencie in dart import 'package:express/express.dart'
//you can give any name to this not necessory to gave name like express you can give any name like const abc = require('express');
//IMPORT FROM OTHER FILES
const authRouter = require("./routes/auth");
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");

//INIT
const PORT = 3000;
const app = express();
const DB = "mongodb+srv://dharmesh:illbeback@cluster0.erhqa.mongodb.net/?retryWrites=true&w=majority";

//now initialize this express into variable and it is constant that means this variable naver going to change
//Creating an API
// http://<your ip address>/hello-world

//middleware CLIENT -> middleware -> SERVER -> CLIENT
app.use(express.json());
app.use(authRouter);
app.use(adminRouter);
app.use(productRouter);
app.use(userRouter);

//Connections

mongoose
  .connect(DB)
  .then(() => {
    console.log("Connection Succesful");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(PORT, "0.0.0.0", () => {
  console.log(`connectedd as port ${PORT}`);
});
/*locahost :- suppose you call an ip address on your computer ip address is basically some random string you'll find like 192.991 
you see this type of numbers in your computer multiple times whwnwver you call ip address you trying to conect another 
computer on internet but when you call ip address like 127.0.0.1 then you are communating with locahostthat means that 
the computer is taking to itself so if you don't specify anything it will take in locahost now we are specify an ip address which
is 0.0.0.0 which stands for it can be access from anywhere we need  and the reason we need to specify this ip address is because on 
android emulators or even on android devices if we use locahost it won't work on ios simulator it does work but for some reasons 
android is not able to take in localhostan instead we need to work using our own ip addresses jst fordebugging when you deploy it 
on a website then it will make sure to give youa url which you can use but now we are just going to pass in 0.0.0.0*/

/* Practice
app.get('/hello-world',(req,res) => {
    res.json({hi:"hello world"})
    //send send it to basic text format and res.json it going to send a json response
})

app.get("/user-email",(req,res) => {
    res.json({email:"Bhadiyadra001@gmail.com"})
})

app.get( '/user-name',(req,res) => {
 res.json({name: 'Dharmesh'})
})
*/
