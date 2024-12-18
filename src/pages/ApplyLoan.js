import React ,{ useState }from "react";
import api from "../utils/axios";
import FormInput from "../utils/FormInput";
const ApplyLoan=()=>{
    const [formData,setFormData]=useState({amount:"",reason:""})
    const [message,setMessage]=useState('')
    const handleChange=(e)=>{
            setFormData({...formData,[e.target.name]:e.target.value})
    }
    const isFormInValid=!formData.amount||!formData.reason
    const handleSubmit=async (e)=>{
        e.preventDefault();
        try {
            const res= await api.post("/apply-loan",formData);
            setMessage(res.data.msg)
        } catch (error) {
            setMessage("Failed to apply loan");
            console.log(error)
        }

    }
    return(
        <div className=" min-h-screen flex justify-center items-center bg-gray-100">
            <form
            className="w-3/5 max-w-lg p-8 bg-white shadow-md rounded-lg space-y-6"
             onSubmit={handleSubmit}>
                <FormInput
                label={"Amount"}
                name={"amount"}
                type={"number"}
                placeholder={"Amount"}
                onChange={handleChange}
                error={""}
                >
                </FormInput>

                <FormInput
                label={"Reason For Loan"}
                name={"reason"}
                type={"text"}
                placeholder={"Reason"}
                onChange={handleChange}
                error={""}
                >
                </FormInput>
                <button type="submit"  disabled={isFormInValid}
                className={`w-full py-2 ${isFormInValid?"bg-blue-400 ":" bg-blue-600 hover:bg-blue-700"} text-white rounded-lg font-medium  transition  duration-300`}>
                    Apply</button>
                    {message&&<p >{message}</p>}
        </form>

        </div>
    )
}
export default  ApplyLoan;