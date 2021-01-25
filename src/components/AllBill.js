import React, { useState, useEffect } from 'react'
import Bill from './Bill';
import axios from 'axios'
import base_url from './../api/bootapi';
import { toast } from 'react-toastify';

function AllBill() {

    useEffect(() => {
       document.title = "All Bills || Electricity Billing System";
    }, []);

    //function to call server
    const getAllBillsFromServer = () => {
        axios.get(`${base_url}/bills/all`).then(
            (response)=>{
                console.log(response.data);
                setBill(response.data);
            },
            (error)=>{
                console.log(error);
                toast.error("Something went wrong!!");
            }
        )
    }

    useEffect(()=>{
        getAllBillsFromServer();
    },[]);

    const removeBillById=(billno)=>{
        setBill(bill.filter((b)=>b.billno!=billno));
    }


    const [bill,setBill] = useState([])

    return (
        <div>
            <h1 className="text-center mt-5 my-4">LIST OF BILLS</h1>
            {
                bill.length>0?bill.map((items)=> <Bill key={items.billno} bill={items} remove={removeBillById} />)
                :<h2 className="text-center">No Bills</h2>}
        </div>
    )
}

export default AllBill
