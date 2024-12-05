
const errorHandler=(error,req,res,next)=>{
    console.log(error.stack);
    return res.status(400).json({msg:"Intenal server error"})
}
module.exports=errorHandler;