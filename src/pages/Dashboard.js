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
return(
    <div>
        <h3>Loans of user:</h3>
        {loans.map((loan)=>(
            <div key={loan.id}>
                <p>Amount: {loan.amount}</p>
                <p>Reason: {loan.reason}</p>
                <p>Status: {loan.status}</p>
            </div>
        )

        )}
    </div>

)
}
export default Dashboard;