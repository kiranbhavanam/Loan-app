import React, { useState } from "react";
import api from "../utils/axios";
import FormInput from "../utils/FormInput";
const Login = () => {
  const [formData, setFormData] = useState({ email: "", pass: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const isFormInValid = !formData.email || !formData.pass;
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/login", formData);
      localStorage.setItem("token", res.data.token);
      console.log(localStorage.getItem("token"));
      if (localStorage.getItem("token")) alert("Login success");
    } catch (err) {
      //   console.log(err);
      if (err.response && err.response.status === 401)
        alert("User does not exist in the database.");
      else console.log("An unexpected aerror occured.");
    }
  };
  return (
    <div className=" login min-h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="w-2/6 max-w-lg bg-white p-8 shadow-md rounded-lg space-y-6"
      >
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
        <button
          type="submit"
          disabled={isFormInValid}
          className={`w-full py-2 ${
            isFormInValid ? "bg-blue-400 " : " bg-blue-600 hover:bg-blue-700"
          } text-white rounded-lg font-medium  transition  duration-300`}
        >
          Login
        </button>
      </form>
    </div>
  );
};
export default Login;
