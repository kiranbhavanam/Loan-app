import React, { useState } from "react";
import api from "../utils/axios";
import FormInput from "../utils/FormInput";
const Login=()=>{
    const [formData,setFormData]=useState({email:"",pass:""});
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setFormData({...formData,[name]:value})
    }
    const isFormInValid=!formData.email||!formData.pass
    const handleSubmit=async (e)=>{
        e.preventDefault();
        alert("Login success")
        try{
            const res=await api.post('/auth/login',formData);
            localStorage.setItem("token",res.data.token);
        }
        catch(err){
            console.log(err)
        }
            
    }
    return(
        <div className="min-h-screen flex justify-center items-center bg-gray-100">
            <form onSubmit={handleSubmit}
            className="w-3/5 max-w-lg bg-white p-8 shadow-md rounded-lg space-y-6">
               {/*
                <div>
                    <label htmlFor="email" className=" block text-start mx-2 text-sm font-medium text-gray-700">Email</label>
                    <input name="email" type="email" placeholder="Email" 
                    className="w-full px-4 py-2 border border-brown-300 rounded-lg focus:ring-2 focus:outline-none focus:ring-blue-400"
                    onChange={handleChange} />
                    
                </div>
                <div>
                    <label className=" block text-start mx-2 text-sm font-medium text-gray-700">Password</label>
                    <input name="pass" type="password" placeholder="Password" 
                    className="w-full  px-4 py-2 border border-brown-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    onChange={handleChange} />
                </div>
                using FormInput custom component.
                */}
    <FormInput
  label={"Email"}
  name={"email"}
  type={"email"}
  placeholder={"Email"}
    onChange={handleChange}
    error={""}
  ></FormInput>

<FormInput
  label={"Password"}
  name={"pass"}
  type={"password"}
  placeholder={"password"}
    onChange={handleChange}
    // error={errors.pass}
  ></FormInput>
                <button type="submit"  disabled={isFormInValid}
                className={`w-full py-2 ${isFormInValid?"bg-blue-400 ":" bg-blue-600 hover:bg-blue-700"} text-white rounded-lg font-medium  transition  duration-300`}>
                    Login</button>
            </form>
        </div>
    )
}
export default Login