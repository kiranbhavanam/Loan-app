import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import api from "../utils/axios";

const Dashboard=()=>{
// const [loans,setLoans]=useState([]);

// useEffect(()=>{
//     const fetchLoans=async ()=>{
//         const res=await api.get("/loans")
//         console.log(await res.json())
//         setLoans(res.json().data)
//     }
//     fetchLoans();
// },[])
const [users,setUsers]=useState([]);
const [loans,setLoans]=useState([]);
const navigate=useNavigate();

useEffect(()=>{
    const token=localStorage.getItem("token")
    if(!token){
        if(window.location.pathname!=="/login"){

            alert("Please log in to view the dashboard.");
            navigate("/login")
        }
        return;
    }
    const fetchUsers=async ()=>{
       
        try {
            const res=await api.get("/users")
            if(res.status===200){
                console.log("response at dashboard.js: "+res);
                setUsers(res.data)
            } 
        } catch (error) {
           
            if (error.response && error.response.status === 401) {
                alert("Session expired . please login again");
                localStorage.removeItem("token");
                navigate("/login")
            } else {
                console.error("Error fetching users:", error);
            }
        }
        
    }
    const fetchLoans=async ()=>{
        try {
            const res=await api.get("/loans");
            if(res.status===200){
                setLoans(res.data)
            }
            
        } catch (error) {
            console.log("error fetching loans: "+error);
        }
    }
    fetchUsers();
    fetchLoans();
},[navigate])
return(
    <div className="min-h-screen flex justify-center items-center ">
        {/* <div className="block">
        <h3>Loans of user:</h3>
        {loans.map((loan)=>(
            <div key={loan.id}>
                <p>Amount: {loan.amount}</p>
                <p>Reason: {loan.reason}</p>
                <p>Status: {loan.status}</p>
            </div>

)

)}</div> */}

<div>
    <h3 className="font-semibold text-xl  border-b-2 border-black">Users List:</h3>
    {users.length>0?(users.map((user)=>(
            <div className="flex justify-center items-center text-center gap-8" key={user.email}>
                <p className="font-thin text-xl text-gray-900">Name: {user.name}</p>
                <p className="font-thin text-xl text-gray-900">Mail: {user.email}</p>
            </div>)))

            :<p>No user found</p>}
</div>
<div>
    <h3 className="font-semibold text-xl  border-b-2 border-black">Loans List:</h3>
    {loans.length>0?(loans.map((loan)=>(
            <div className="flex justify-center items-center text-center gap-8" key={loans.amount}>
                <p className="font-thin text-xl text-gray-900">Name: {loan.amount}</p>
                <p className="font-thin text-xl text-gray-900">Mail: {loan.reason}</p>
            </div>)))

            :<p>No loans</p>}
</div>
    </div>

)
}
export default Dashboard;