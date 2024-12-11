import React,{useState,useEffect} from "react";
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

useEffect(()=>{
    const fetchUsers=async ()=>{
        try {
            const res=await api.get("/users")
            if(res.status===200){
                console.log("response at dashboard.js: "+res);
                setUsers(res.data)
            } 
        } catch (error) {
           
            if (error.response && error.response.status === 401) {
                alert("Please log in to view the dashboard.");
            } else {
                console.error("Error fetching users:", error);
            }
        }
        
    }
    fetchUsers();
},[])
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
    {users.map((user)=>(
            <div className="flex justify-center items-center text-center gap-8" key={user.email}>
                <p className="font-thin text-xl text-gray-900">Name: {user.name}</p>
                <p className="font-thin text-xl text-gray-900">Mail: {user.email}</p>
            </div>))}

            </div>
    </div>

)
}
export default Dashboard;