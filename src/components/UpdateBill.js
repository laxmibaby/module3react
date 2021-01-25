import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { Button, Container, Form, FormGroup, Input } from 'reactstrap'
import base_url from './../api/bootapi';
import  './../compstyle/style.css'

const UpdateBill = ({billNo}) => {

    useEffect(() => {
        document.title ="Update Bill || Electricity Billing System";
    }, [])

    const [bill,setBill]=useState();

    const handleForm = (e) =>{
       // console.log(bill);
        putDataToServer(bill);
         e.preventDefault();
    }

    // const getById =() => {
    //     axios.get(`${base_url}/bills/${billNo}`).then(
    //         (response)=>{
    //             console.log(response.data);
    //             setBill(response.data);
    //         },
    //         (error)=>{
    //             console.log(error);
    //         }
    //     )
    // }

  //  console.log(location.state);
 
    //creating function to post data
    const putDataToServer = (bill) => {
        axios.put(`${base_url}/bills/${billNo}`, bill).then(
            (response)=>{
                console.log(response);
                toast.success("Bill Updated Successfully!!");
            },
            (error)=>{
                console.log(error);
                toast.error("Updation Failed!!");
            }
        )
    }
   
    return (
             <div className="createBill px-4 py-4 my-3">
               <Form onSubmit={handleForm}>
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
                   <FormGroup>
                       <label for="status" className="inputName">Status:</label>
                       <Input
                            type="text"
                            placeholder="Enter Status"
                            name="status"
                            id="status"
                            onChange={(e)=>{
                                setBill({...bill, status:e.target.value})
                            }}
                        />
                   </FormGroup>
                   <Container className="text-center mt-4">
                   <Button color="success" type="submit" size="lg" outline><b>Update Bill</b></Button>
                   <Button color="primary ml-3" type="reset" size="lg" outline><b>Clear</b></Button>
                   </Container>
                </Form> 
            </div>
    )
}

export default UpdateBill



