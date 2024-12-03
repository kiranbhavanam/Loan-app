const express=require("express");
const jwt=require("jsonwebtoken")
const app=express();
app.use(express.json())
const cors = require('cors');
app.use(cors({ origin: 'http://localhost:3000' })); // Allow frontend origin

//in-memory database
const AllUsers=[];

app.post("/register",(req,res)=>{
    const {name,email,pass}=req.body;
    const newUser={name,email,pass};
    console.log(newUser)
    AllUsers.push(newUser);
    const token=jwt.sign({username:name},"9999")
    res.send(token)
})

app.get("/users",(req,res)=>{
    try {
        return res.json(AllUsers);
    } catch (error) {
        console.log(error)
    }
}
)
app.listen(5000,()=>{
    console.log("Listening go on..")
})