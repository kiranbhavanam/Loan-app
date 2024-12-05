const express=require("express");

const {register,login,getAllUsers}=require("../controllers");
const {authenticate}=require("../middlewares");

const router=express.Router();
router.post("/register",register)
router.post("/login",login);
router.get("/dashbord",authenticate,getAllUsers);

module.exports=router;