import {useState} from "react"
import api from "../utils/axios"
 const Registration=()=>{
    
    const [formData,setFormData]=useState({name:"",email:"",pass:""})
    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    const handleSubmit= async (e)=>{
        e.preventDefault();
        try {
          const res=await api.post("/auth/register",formData)
          localStorage.setItem("token",res.data.token)
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
            console.log(error)
        }
    }
    return(
        <form 
  onSubmit={handleSubmit} 
  className="max-w-md mx-auto bg-white p-8 shadow-md rounded-lg space-y-6"
>
  <h2 className="text-2xl font-semibold text-gray-700 text-center">Register</h2>
  
  <div>
    <label htmlFor="name" className="block mx-2 text-start text-sm font-medium text-gray-600">Name</label>
    <input 
      placeholder="Name" 
      type="text" 
      name="name" 
      onChange={handleChange}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
    />
  </div>

  <div>
    <label htmlFor="email" className="block text-start mx-2 text-sm font-medium text-gray-600 mb-1">Email</label>
    <input 
      placeholder="Email" 
      type="email" 
      name="email" 
      onChange={handleChange}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
    />
  </div>

  <div>
    <label htmlFor="password" className="block text-start mx-2  text-sm font-medium text-gray-600 mb-1">Password</label>
    <input 
      placeholder="Password" 
      type="password" 
      name="pass" 
      onChange={handleChange}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
    />
  </div>

  <button 
    type="submit" 
    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300 font-medium"
  >
    Register
  </button>
</form>

    )
}

export default Registration;