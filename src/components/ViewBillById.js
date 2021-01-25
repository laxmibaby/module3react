import React,{useState} from 'react'
import { Button, Container, Form, FormGroup, Input } from 'reactstrap';
import axios from 'axios';
import base_url from './../api/bootapi';
import {toast} from 'react-toastify';
import Bill from './Bill';
function ViewBillById() {

    const [bill,setBill] = useState()

    let [billno,setBillNo]=useState();

    const getById =() => {
        axios.get(`${base_url}/bills/${billno}`).then(
            (response)=>{
                console.log(response.data);
                setBill(response.data);
            },
            (error)=>{
                console.log(error);
                toast.error("error occured");
            }
        )
    }

    console.log(billno);
    return (
        <div className="mt-5 my-3">
            <Form>
                   <FormGroup>
                       <label for="id" className="inputName">Enter Bill ID:</label>
                       <Input
                            type="text"
                            placeholder="Enter Bill ID"
                            name="id"
                            id="id"
                            onChange={(e)=>{
                                setBillNo(billno=e.target.value)
                            }}
                        />
                   </FormGroup>
                   <Container className="text-center mt-4">
                   <Button color="success" size="lg" outline onClick={()=> getById()}>
                        <b>Search</b>
                   </Button>
                   </Container>
                  
            </Form>
            <div className="mt-5">
            {
               bill!=null? <Bill key={billno} bill={bill} />
               :<h2 className="text-center">No Bills</h2>
            }
            </div>
            
        </div>
    )
}

export default ViewBillById
