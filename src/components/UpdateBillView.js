import React, { Component } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import { Button, Container, Form, FormGroup, Input } from 'reactstrap'
import base_url from './../api/bootapi';
import  './../compstyle/style.css'
class UpdateBillView extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             bill:{
                billno:"",
                units:"",
                amount:"",
                customer:{
                    custId:"",
                    custName:"",
                    password:""
                },
                status:""
             },
             bill2:null 
            
        }
    }

    componentDidMount(){
        document.title ="Update Bill || Electricity Billing System";
    }

    handleForm = (e) =>{
       // console.log("before",this.state.bill);
        this.getById();
        //this.putDataToServer(this.state.bill);
        console.log("after",this.state.bill);
         e.preventDefault();
    }

    getById = () => {
        axios.get(`${base_url}/bills/${this.props.location.state.billNo}`).then(
            (response)=>{
                console.log("fetched",response.data); // yeh kab run hota hai
                this.setState({
                    bill2:response.data
                }); 
                this.setState({
                   bill:{
                       billno:this.state.bill2.billno,
                       units:this.state.bill2.units,
                       amount:this.state.bill2.amount,
                       customer:{
                           custId:this.state.bill2.customer.custId,
                           custName:this.state.bill2.customer.custName,
                           password:this.state.bill2.customer.password
                        },
                        status:this.state.bill2.status
                   }
                }); 
                console.log("got data",this.state.bill); 
                this.putDataToServer(this.state.bill);
            },
            (error)=>{
                console.log(error);
            }
        )

    }

   
    putDataToServer =(bill)=>{  //yaha pr bill kese pass karu ?

        axios.put(`${base_url}/bills/${this.props.location.state.billNo}`, bill).then(
            (response)=>{
                console.log("myupdate:",response.data);
                toast.success("Bill Updated Successfully!!");
            },
            (error)=>{
                console.log(error);
                toast.error("Updation Failed!!");
            }
        )
    }
    render() {
       // let [billno2,units2,amount2,customer2,status2] = this.state.bill2;
        console.log(this.props.location.state);
        // let bnod = this.props.location.state.billNo;
        // console.log(bnod);
        return (
            <div className="createBill px-4 py-4 my-3">
               <Form onSubmit={this.handleForm}>
                   <FormGroup>
                       <label for="units" className="inputName">Units:</label>
                       <Input
                            type="text"
                            placeholder="Enter Units"
                            name="units"
                            id="units"
                            onChange={ (e)=>{
                                this.setState(prevState => ({
                                    bill:{
                                        ...prevState.bill,
                                        units:e.target.value
                                    }
                                    // let bill = Object.assign({},prevState.bill);
                                    // bill.units=e.target.value;
                                    // return {bill};
                                 }))
                                // console.log(e.target.value)
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
                                this.setState( prevState => ({
                                    bill:{
                                        ...prevState.bill,
                                        amount:e.target.value
                                    }
                                    // let bill = Object.assign({},prevState.bill);
                                    // bill.units = e.target.value;
                                    // return {bill};
                                //    let bill = {
                                //        ...prevState.bill,
                                //    }
                                  // console.log(prevState)
                                  // return {bill};
                                })) 
                             
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
                               this.setState(prevState => ({

                                bill:{
                                    ...prevState.bill,
                                    status:e.target.value
                                }
                                //    let bill = Object.assign({},prevState.bill);
                                //    bill.status=e.target.value;
                                //    return {bill};
                                 }))
                                 //console.log(e.target.value)
                            }}
                        />
                   </FormGroup>
                   <Container className="text-center mt-4">
                   <Button color="success"  size="lg" outline type="submit"><b>Update Bill</b></Button>
                   <Button color="primary ml-3" type="reset" size="lg" outline ><b>Clear</b></Button>
                   <Button color="primary ml-3" size="lg" outline onClick={this.getById} ><b>Clear</b></Button>
                   </Container>
                </Form> 
            </div>
        )
    }
}

export default UpdateBillView
