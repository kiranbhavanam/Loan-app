
const users=[];
const loans=[];
exports.register=(req,res)=>{
    const {name,email,pass}=req.body;
    const userExists=users.find(user=>user.email===email);
    if(userExists){
        return res.status(400).json({msg:"user already exists"});
    }
    const newUser={name,email,pass};
    users.push(newUser);
    //creating token 
    const token=require("../utils/jwt").generateToken({email});
    res.status(201).json({token,msg:"user account registered succesfully"})
    // res.json({token});
}

exports.login=(req,res)=>{
    const {email,pass}=req.body;
    const userExists= users.find(user=>user.email===email&&user.pass===pass);
    if(!userExists){
        res.status(401).json({msg:"Invalid credentials"});
    }
 //generate token   
    const token=require("../utils/jwt").generateToken({email});
    res.status(201).json({token})
}
// exports.getLoans=(req,res)=>{
//     res.json({amount:1000,reason:"personal",status:"success"});
// }
exports.getAllUsers=(req,res)=>{
    res.json(users)
}

exports.applyLoan=(req,res)=>{
    const {amount,reason}=req.body;
    const {email}=req.user;
    const newLoan={email,amount,reason,status:"Pending",date:new Date()};
    loans.push(newLoan);
    res.status(201).json({msg:"loan application submitted successfully",loan:newLoan})

}
exports.getLoans=(req,res)=>{
    res.json(loans);
}