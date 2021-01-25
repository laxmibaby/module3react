import React, { Component } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import { Button, Container, Form, FormGroup, Input } from 'reactstrap'
import base_url from './../api/bootapi';
import  './../compstyle/style.css'
class UpdateD extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             bill:{}
    }

}

    componentDidMount(){
        document.title ="Update Bill || Electricity Billing System";
        this.getById();
        console.log(this.state.bill);
    }

    handleForm = (e) =>{
        this.getById();
        this.putDataToServer(this.state.bill);
         e.preventDefault();
    }

    getById = () => {
        axios.get(`${base_url}/bills/${this.props.location.state.billNo}`).then(
            (response)=>{
                this.setState( {bill:response.data } , ()=>{console.log(this.state.bill)} );  
            },
            (error)=>{
                console.log(error);
            }
        )

    }

   
    putDataToServer =()=>{  

        axios.put(`${base_url}/bills/${this.props.location.state.billNo}`, this.state.bill ).then(
            (response)=>{
                toast.success("Bill Updated Successfully!!");
            },
            (error)=>{
                console.log(error);
                toast.error("Updation Failed!!");
            }
        )
    }
    render() {
        console.log(this.props.location.state);
        return (
            <div className="createBill px-4 py-4 my-3">
               <Form >
                   <FormGroup>
                       <label for="units" className="inputName">Units:</label>
                       <Input
                            type="text"
                            placeholder="Enter Units"
                            name="units"
                            id="units"
                            onChange={(e)=>{
                                this.setState( (prevState)=>( {
                                  bill:{
                                      ...prevState.bill,
                                      units:e.target.value,
                                  }
                                }) , ()=>{console.log(this.state.bill) } )
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
                                this.setState( (prevState)=>( {
                                  bill:{
                                      ...prevState.bill,
                                      amount:e.target.value,
                                  }
                                }) , ()=>{console.log(this.state.bill) })
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
                                this.setState( (prevState)=>( {
                                  bill:{
                                      ...prevState.bill,
                                      status:e.target.value,
                                  }
                                }) , ()=>{console.log(this.state.bill) })
                            }}
                        />
                   </FormGroup>
                   <Container className="text-center mt-4">
                   <Button color="success"  size="lg" outline onClick={()=>{this.putDataToServer()} }><b>Update Bill</b></Button>
                   <Button color="primary ml-3" type="reset" size="lg" outline ><b>Clear</b></Button>
                   </Container>
                </Form> 
            </div>
        )
    }
}

export default UpdateD

