import {useState} from "react"
import api from "../utils/axios"
import formValidator from "../utils/formValidator"
import FormInput from "../utils/FormInput"

 const Registration=()=>{
    const [formData,setFormData]=useState({name:"",email:"",pass:""})
    const [errors,setErrors]=useState({});
    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
        //clear error on change
        if(errors[e.target.name]){
          setErrors((prev)=>({...prev,[e.target.name]:""}))
        }
    }

    
    const handleSubmit= async (e)=>{
        e.preventDefault();
        const validationErrors=formValidator(formData);
        // console.log("errors: "+JSON.stringify(errors)+"Validation errors: "+JSON.stringify(validationErrors))
        if(Object.keys(validationErrors).length>0){
          return setErrors(validationErrors);
        }
        try {
          const res=await api.post("/register",formData)
          if(res.status===400)
              alert("User Already Exists ,please login.")
          localStorage.setItem("token",res.data.token)
          alert("form submitted successfully")
          console.log(localStorage.getItem("token"));
          /*
          Using fetch instead of axios
            const res=await fetch("http:/localhost:3000/auth/register",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:{formData}
              })
              */
            //post request is sent to http server/
            //a token has to be generated.
        } catch (error) {
          if (error.response) {
              if (error.response.status === 400) {
                  alert("User already exists, please login.");
              } else if (error.response.status === 401) {
                  alert("Unauthorized: Please check your credentials.");
              } else {
                  alert(`An error occurred: ${error.response.statusText}`);
              }
          } else {
              alert("An unexpected error occurred.");
          }
        }
    }
    
    return(
      <div className=" registration min-h-screen relative pt-[80px]  flex justify-center items-center bg-gray-100">
        <form 
  onSubmit={handleSubmit} 
  className=" w-3/5 max-w-lg bg-white p-8 shadow-md rounded-lg space-y-6"
>
  <h2 className="text-2xl font-semibold text-gray-700 text-center">Register</h2>
  {/*
  <div>
    <label htmlFor="name" className="block mx-2 text-start text-sm font-medium text-gray-600">Name</label>
    <input 
      placeholder="Name" 
      type="text" 
      name="name" 
      onChange={handleChange}
      className={`w-full px-4 py-2 border ${errors.name?"border-red-500":"border-gray-300"}  rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none`}

    />
    {errors.name&&<p className="text-red-500 text-sm mt-1">{errors.name}</p>}
  </div>

  <div>
    <label htmlFor="email" className="block text-start mx-2 text-sm font-medium text-gray-600 mb-1">Email</label>
    <input 
      placeholder="Email" 
      type="email" 
      name="email" 
      onChange={handleChange}
      className={`w-full px-4 py-2 border ${
        errors.email ? "border-red-500" : "border-gray-300"
      } rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none`}
    />
    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
  </div>

  <div>
    <label htmlFor="password" className="block text-start mx-2  text-sm font-medium text-gray-600 mb-1">Password</label>
    <input 
      placeholder="Password" 
      type="password" 
      name="pass" 
      onChange={handleChange}
      className={`w-full px-4 py-2 border ${
        errors.pass ? "border-red-500" : "border-gray-300"
      } rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none`}
    />
    {errors.pass && <p className="text-red-500 text-sm mt-1">{errors.pass}</p>}
  </div>
  using FormInput custom comonent.
  */}
  <FormInput
  label={"Name"}
  name={"name"}
  type={"text"}
  placeholder={"Name"}
    onChange={handleChange}
    error={errors.name}
  ></FormInput>

<FormInput
  label={"Email"}
  name={"email"}
  type={"email"}
  placeholder={"Email"}
    onChange={handleChange}
    error={errors.email}
  ></FormInput>

<FormInput
  label={"Password"}
  name={"pass"}
  type={"password"}
  placeholder={"password"}
    onChange={handleChange}
    error={errors.pass}
  ></FormInput>
  <button 
    type="submit" 
    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300 font-medium"
  >
    Register
  </button>
</form>
</div>
    )
}

export default Registration;