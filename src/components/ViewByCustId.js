import React,{useState} from 'react'
import { Button, Container, Form, FormGroup, Input } from 'reactstrap';
import axios from 'axios';
import base_url from './../api/bootapi';
import {toast} from 'react-toastify';
import Bill from './Bill';
function ViewByCustId() {

    const [bill,setBill] = useState()

    let [custno,setCustNo]=useState();

    const getById =() => {
        axios.get(`${base_url}/bills/byCustId/${custno}`).then(
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

   // console.log(billno);
    return (
        <div className="mt-5 my-3">
            <Form>
                   <FormGroup>
                       <label for="id" className="inputName">Enter Customer ID:</label>
                       <Input
                            type="text"
                            placeholder="Enter Customer ID"
                            name="id"
                            id="id"
                            onChange={(e)=>{
                                setCustNo(custno=e.target.value)
                            }}
                        />
                   </FormGroup>
                   <Container className="text-center mt-4">
                   <Button color="success" size="lg" outline onClick={()=> getById()}>
                        <b>Search</b>
                   </Button>
                   </Container>
                  
            </Form>
            <div className="mt-5 ">
            {
               bill!=null?bill.map((items)=> <Bill key={items.custno} bill={items} />)
                :<h2 className="text-center">No Bills</h2>
            }
            </div>
            
        </div>
    )
}

export default ViewByCustId
