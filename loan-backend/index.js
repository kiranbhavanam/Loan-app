const express=require("express");
// const jwt=require("jsonwebtoken")
const errorHandler=require("./middlewares/errorMiddleware");
const router=require("./routes/authRoutes")
const app=express();
app.use(express.json())
const cors = require('cors');
app.use(cors({ origin: 'http://localhost:3000' })); // Allow frontend origin
app.use("/",router);
app.use(errorHandler)
app.listen(5000,()=>{
    console.log("Listening go on..")
})
//in-memory database
// const AllUsers=[];

// const userExists=(email,password)=>{
//    const userCheck= AllUsers.find(user=>user.pass===password&&user.email===email)
//    return userCheck?true:false;
// }
// app.post("/register",(req,res)=>{
//     const {name,email,pass}=req.body;
//     if(userExists(email,pass))
//         return res.status(401).json({"msg":"User already existed in database"})
//     const newUser={name,email,pass};
//     console.log(newUser)
//     AllUsers.push(newUser);
//     const token=jwt.sign({email:email},"9999")
//     res.send({"token":token})
// })

// app.get("/users",(req,res)=>{
//     try {
//         return res.json(AllUsers);
//     } catch (error) {
//         console.log(error)
//     }
// }
// )
// app.post("/login",(req,res)=>{
//     const {email,pass}=req.body;
//     if(!userExists(email,pass))
//         return res.status(401).send({"msg":"User do not exists "})
//     const token=jwt.sign({email:email},"9999")
//     res.send({"token":token})
// 
