import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { Button, Container, Form, FormGroup, Input } from 'reactstrap'
import base_url from './../api/bootapi';
import  './../compstyle/style.css'

function CreateBill() {

    useEffect(() => {
        document.title ="Create Bill || Electricity Billing System";
    }, [])

    const [bill,setBill]=useState({});

    const handleForm = (e) =>{
        console.log(bill);
        postDataToServer(bill);
         e.preventDefault();
    }

    let [custId,setCustId]=useState();
    
    //creating function to post data
    const postDataToServer = (data) => {
        axios.post(`${base_url}/bills/${custId}`, data).then(
            (response)=>{
                let results=response.data;
                if(results.status==400){
                    toast.error(results.message);
                }
                else{
                toast.success("Bill created Successfully!!");
                }
                
            },
            (error)=>{
                console.log(error);
                toast.error("Customer Doesn't Exist or Bill Already Created");
            }
        )
    }
   
    return (
             <div className="createBill px-4 py-4 mt-4 my-3">
               <Form onSubmit={handleForm}>
                   <h2 className="text-center mb-3 ">Enter Details</h2>
                   <FormGroup>
                       <label for="custId" className="inputName">Customer ID:</label>
                       <Input
                            type="text"
                            placeholder="Enter Customer Id"
                            name="custId"
                            id="custId"
                            onChange={(e)=>{
                                setCustId(e.target.value)
                            }}
                        />
                   </FormGroup>
                   <FormGroup>
                       <label for="units" className="inputName">Units:</label>
                       <Input
                            type="text"
                            placeholder="Enter Units"
                            name="units"
                            id="units"
                            onChange={(e)=>{
                                setBill({...bill, units:e.target.value})
                            }}
                        />
                   </FormGroup>
                   <FormGroup>
                       <label for="amount" className="inputName">Amount:</label>
                       <Input
                            type="text"
                            placeholder="Enter Amount"
                            name="amount"
                            id="amount"
                            onChange={(e)=>{
                                setBill({...bill, amount:e.target.value})
                            }}
                        />
                   </FormGroup>
                   <Container className="text-center mt-4">
                   <Button color="success" type="submit" size="lg" outline><b>Create Bill</b></Button>
                   <Button color="primary ml-3" type="reset" size="lg" outline><b>Clear</b></Button>
                   </Container>
                </Form> 
            </div>
    )
}

export default CreateBill



