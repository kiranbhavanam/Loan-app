const express=require("express");

const {register,login,getAllUsers}=require("../controllers/authController");
const {authenticate}=require("../middlewares/authMiddleware");

const router=express.Router();
router.post("/register",register)
router.post("/login",login);
router.get("/users",authenticate,getAllUsers);
// router.get("/loans",authenticate,getLoans)

module.exports=router;