const jwt=require("jsonwebtoken");

exports.authenticate=(req,res,next)=>{
    const token=req.headers["x-auth-token"];
    if(!token)
        return res.status(401).json({msg:"token not found"})
    try {
        const decoded=jwt.verify(token,"9999");
        req.user=decoded;
        next();
    } catch (error) {
        return res.status(401).json({msg:"invalid token"})
    }
}