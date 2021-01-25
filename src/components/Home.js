
import {Jumbotron,Container,Button} from "reactstrap"
// function Home() {
//     return (
//         <div>
//             <Jumbotron>
//                 <h1>Pay your Bill</h1>
//                 <Container>
//                     <Button color="primary">Pay Bill</Button>
//                 </Container>
//             </Jumbotron>
//         </div>
//     )
// }

import React, { Component } from 'react'

class Home extends Component {

    componentDidMount(){
        document.title= "Home || Electricity Billing System";
    }
    render() {
        return (
            <div className=" mt-4 my-3">
                <Jumbotron className="text-center">
                    <h1>Generate Bill</h1>
                    <Container>
                        <p>Here, all the bills are managed and generated efficiently</p>
                    </Container>
                 </Jumbotron> 
            </div>
        )
    }
}

export default Home



