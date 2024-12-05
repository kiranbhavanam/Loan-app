
const users=[];
exports.register=(req,res)=>{
    const {name,email,pass}=req.body;
    const userExists=users.find(user=>user.email===email);
    if(userExists){
        return res.status(400).json({msg:"user already exists"});
    }
    const newUser={name,email,pass};
    users.push(newUser);
    //creating token 

    // res.json({token});
}

exports.login=(req,res)=>{
    const {email,pass}=req.body;
    const userExists= users.find(user=>user.email===email&&user.pass===pass);
    if(!userExists){
        res.status(401).json({msg:"Invalid credentials"});
    }
 //generate token   
}

exports.getAllUsers=(req,res)=>{
    res.json(users)
}