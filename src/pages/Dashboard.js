import React,{useState,useEffect} from "react";
import api from "../utils/axios";

const Dashboard=()=>{
const [loans,setLoans]=useState([]);

useEffect(()=>{
    const fetchLoans=async ()=>{
        const res=await api.get("/loans")
        setLoans(res.data)
    }
    fetchLoans();
},[])
const [users,setUsers]=useState([]);

useEffect(()=>{
    const fetchUsers=async ()=>{
        const res=await api.get("/users")
        setUsers(res.data)
    }
    fetchUsers();
},[])
return(
    <div className="min-h-screen flex justify-center items-center ">
        <div className="block">
        <h3>Loans of user:</h3>
        {loans.map((loan)=>(
            <div key={loan.id}>
                <p>Amount: {loan.amount}</p>
                <p>Reason: {loan.reason}</p>
                <p>Status: {loan.status}</p>
            </div>

)

)}</div>
<div>
    <h3>users List:</h3>
    {users.map((user)=>(
            <div key={user.email}>
                <p>Name: {user.name}</p>
                <p>Mail: {user.email}</p>
            </div>))}

            </div>
    </div>

)
}
export default Dashboard;