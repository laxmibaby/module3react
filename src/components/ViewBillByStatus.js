import React,{useState} from 'react'
import { Button, Container } from 'reactstrap'
import Bill from './Bill';
import axios from 'axios'
import base_url from './../api/bootapi'
import {toast} from 'react-toastify'

function ViewBillByStatus() {

    const [bill,setBill] = useState([])

    let [status,setStatus]=useState();

    const viewStatusBill = () => {
        axios.get(`${base_url}/bills/byStatus/${status}`).then(
            (response)=>{
                console.log(response);
                console.log("status is:",status); 
                console.log(response.data);
                setBill(response.data);
            },(error)=>{
                console.log(error);
                toast.error("error occured");
            }
        );
    }

    return (
        <div className="mt-5 my-3">
            <Container className="text-center mb-4">
            <Button color="primary mx-3" outline size="lg" onClick={()=> {  
                setStatus(status="paid");
                viewStatusBill()
             }}>
                 <b>Paid Bills</b>
            </Button>
            <Button color="info mx-3" outline size="lg" onClick={()=> {  
                setStatus(status="unpaid");
                viewStatusBill()
             }}
            >
                <b>Unpaid Bills</b>
            </Button>
            </Container>
            <div className="mt-5">
            {
                bill.length>0?bill.map((items)=> <Bill key={items.billno} bill={items} />)
                :<h2 className="text-center">No Bills</h2>
            }
            </div>
            
        </div>
    )
}

export default ViewBillByStatus
