import React from 'react'
import axios from 'axios';
import base_url from '../api/bootapi';
import { toast } from 'react-toastify';
import swal from 'sweetalert';
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col
  } from 'reactstrap';

import { Link } from 'react-router-dom';


  const Bill = ({bill,remove}) =>{

    const deleteBill = () => {
        // axios.delete(`${base_url}/bills/${bill.billno}`).then(
        //     (response)=>{
        //         console.log(response);
        //         toast.success("bill deleted");
        //         remove(bill.billno);
        //     },(error)=>{
        //         console.log(error);
        //         toast.error("bill not deleted!!");
        //     }
        // );
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this data",
            icon: "warning",
            buttons: true,
            dangerMode: true,
           
          })
          .then((willDelete) => {
            if (willDelete) {
                axios.delete(`${base_url}/bills/${bill.billno}`).then(
                    (response)=>{
                       console.log(response);
                      // toast.success("bill deleted");
                       remove(bill.billno);
                   },(error)=>{
                       console.log(error);
                       swal({
                           title:"Something went wrong!!",
                           icon:"error",
                        })
                   }
               )
              swal({
                title:"Your data has been Deleted",
                icon: "success",
              });
            } else {
              swal({title:"Your data is safe!"});
            }

          });
    }

  

     let bno=bill.billno;
    
    return (
        <Card>
            <CardBody>
                <Row>
                <Col md={7} className="my-1" style={{backgroundColor:""}}>
                <CardTitle className="font-weight-bold">Bill No: {bill.billno} </CardTitle>
                    <CardText>
                    Customer ID: {bill.customer.custId} Date: {bill.billDate} <br/>
                    Status: {bill.status}  Units: {bill.units}<br/>
                    Amount: {bill.amount}/- <br/>
                    </CardText>
                 </Col>  
                 <Col md={5} className="my-1 py-3" style={{backgroundColor:""}}>  
                            <Button color="danger mx-1" size="lg" outline onClick={()=>{ deleteBill(bill.billno)}}>
                                <b>Delete</b>
                            </Button>
                            <Link to={{pathname:'/update-bill', state:{billNo:bno}}} >
                                <Button color="warning mx-1" size="lg" outline  >
                                <b>Update</b>
                                </Button>
                            </Link>
                </Col>
                </Row>
            </CardBody>
        </Card>
    )
  }

export default Bill
