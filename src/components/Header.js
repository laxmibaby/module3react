import Carousel from 'react-bootstrap/Carousel'
import React from 'react'
import { Card, CardBody, CarouselItem, Navbar, NavbarText } from 'reactstrap'
import  './../compstyle/style.css'


function Header() {
    return (
        <div className="header">
            {/* <Card className="my-2 text-center bg-info">
                <CardBody>
                 <h1 className="my-4">Electricity Billing System</h1>
                </CardBody>
            </Card> */}
            <div className="text-center">
                <Navbar className="navbar navbar-dark bg-dark ">
                    <NavbarText className="ml-5 pl-5"><h2>Electricity Billing System</h2></NavbarText>
                </Navbar>
            </div>
            
            <Carousel>
                <Carousel.Item>
                    <img 
                    className="d-block "
                    src="https://source.unsplash.com/1200x500/?electrician"
                    alt="First Image"
                    />
                    <Carousel.Caption>
                        <h3>First Slide</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                    className="d-block "
                    src="https://source.unsplash.com/1200x500/?electrical"
                    alt="Second Image"
                    
                    />
                    <Carousel.Caption>
                        <h3>Second Slide</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                    className="d-block "
                    src="https://source.unsplash.com/1200x500/?electricity"
                    alt="Third Image"
                    
                    />
                    <Carousel.Caption>
                        <h3>Third Slide</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Header
