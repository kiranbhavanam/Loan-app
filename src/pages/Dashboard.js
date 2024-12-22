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
    <div className=" flex justify-center items-start gap-6 mt-2 relative top-[80px]   " id="dashboard">
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
            <div
            className="w-full max-w-md bg-white shadow-md rounded-lg p-6 flex flex-col items-start justify-start mb-2"
            key={user.email}
        >
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Name</h4>
            <p className="text-gray-700 text-base mb-4">{user.name}</p>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Email</h4>
            <p className="text-gray-700 text-base">{user.email}</p>
        </div>)))

            :<p>No user found</p>}
</div>
<div >
    <h3 className="font-semibold text-xl  border-b-2 border-black">Loans List:</h3>
    {console.log("loan data from responsse: "+JSON.stringify(loans))}

    {loans.length>0?(loans.map((loan)=>(
                        
            <div
            className="w-full max-w-md bg-white shadow-md rounded-lg p-6 mb-2 flex flex-col items-start justify-start"
            key={loan.email}
        >
            <div className=" bg-blue-300 w-full flex items-center justify-around">
            <h4 className="text-lg font-semibold text-gray-800 mb-2  ">Amount</h4>
            <p className="text-gray-700 text-base mb-4">{loan.amount}</p>
            </div>
            <div className="w-full flex items-center justify-around">
            <h4 className="text-lg font-semibold text-gray-800 mb-2 inline-block w-1/2 ">Reason</h4>
            <p className="text-gray-700 text-base inline-block">{loan.reason}</p>
           </div>
            <div className="bg-blue-300 w-full flex items-center justify-around">
            <h4 className="text-lg font-semibold text-gray-800 mb-2 inline-block w-1/2 ">Status: </h4>
            <p className="text-gray-700 text-base inline-block ">{loan.status}</p>
            </div>
            <div className="w-full">

            <h4 className="text-lg font-semibold text-gray-800 mb-2 inline-block ">Date Applied: </h4>
            <p className="text-gray-700 text-base ">{loan.date}</p>
            </div>
        </div>)))

            :<p>No loans</p>}
</div>
    </div>

)
}
export default Dashboard;