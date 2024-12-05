const jwt=require("jsonwebtoken")

exports.generateToken=(payload)=>{
    return jwt.sign(payload,"9999",{expiresIn:'1h'});
}