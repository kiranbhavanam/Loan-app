//we are creating a custom component that returns jsx. so
import React from "react"

const FormInput=({label,name,type,placeholder,onChange,error})=>{
    return(
        <div>
            <label htmlFor={name} className="block text-start mx-2 text-sm font-medium text-gray-600 mb-1">{label}</label>
            <input
            name={name}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            className={`w-full px-4 py-2 border ${
                error ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none`}
            />
        
        {error&& <p className="text-sm text-red-500 mt-1">{error}</p>}
        </div>
    )
}
export default FormInput;