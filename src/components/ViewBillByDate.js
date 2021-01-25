import React,{useState} from 'react'
import { Button, Container, Form, FormGroup, Input } from 'reactstrap';
import axios from 'axios';
import base_url from './../api/bootapi';
import {toast} from 'react-toastify';
import Bill from './Bill';
function ViewBillByDate() {

    const [bill,setBill] = useState([])

    let [date,setDate]=useState();

    const viewDateBill = () => {
        axios.get(`${base_url}/bills/byDate/${date}`).then(
            (response)=>{
                console.log(response);
                console.log("Date is:",date); 
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
            <Form>
                   <FormGroup>
                       <label for="date" className="inputName">Enter Date:</label>
                       <Input
                            type="text"
                            placeholder="YYYY/MM/DD"
                            name="date"
                            id="date"
                            onChange={(e)=>{
                                setDate(e.target.value)
                            }}
                        />
                   </FormGroup>
                   <Container className="text-center mt-4">
                   <Button color="success" size="lg" outline onClick={viewDateBill}>
                        <b>Search</b>
                   </Button>
                   </Container>
                  
            </Form>
            <div className="mt-5">
            {
                bill.length>0?bill.map((items)=> <Bill key={items.billno} bill={items} />)
                :<h2 className="text-center">No Bills</h2>
            }
            </div>
            
        </div>
    )
}

export default ViewBillByDate
