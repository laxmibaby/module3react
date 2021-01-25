import logo from './logo.svg';
import './App.css';
import {ToastContainer, toast} from "react-toastify"
import {Button, Col, Container, Row} from "reactstrap"
import Home from './components/Home';
import Header from './components/Header';
import Bill from './components/Bill';
import SideBar from './components/SideBar';
import AllBill from './components/AllBill';
import CreateBill from './components/CreateBill';
import Logout from './components/Logout';
import {BrowserRouter as Router, Route} from "react-router-dom";
import UpdateBill from './components/UpdateBill';
import ViewBillByStatus from './components/ViewBillByStatus';
import ViewBillByDate from './components/ViewBillByDate';
import ViewBillById from './components/ViewBillById';
import UpdateBillView from './components/UpdateBillView';
import UpdateD from './components/UpdateD';
import ViewByCustId from './components/ViewByCustId';
import Footer from './components/Footer';

function App() {

  const btnHandle = () => {
    toast.success("wow");
  }

  return (
    <div className="App">
      <Router>
        <ToastContainer/>
        <Container>
          <Header/>
          <Row>
            <Col md={4}>
              <SideBar/>
            </Col>
            <Col md={8}>
              <Route path="/" component={Home} exact/>
              <Route path="/create-bill" component={CreateBill} exact/>
              <Route path="/view-bills" component={AllBill} exact/>
              <Route path="/view-bill-byid" component={ViewBillById} exact/>
              <Route path="/view-bill-bycustid" component={ViewByCustId} exact/>
              <Route path="/view-bill-bystatus" component={ViewBillByStatus} exact/>
              <Route path="/view-bill-bydate" component={ViewBillByDate} exact/>
              <Route path="/logout" component={Logout} exact/>
              <Route path="/update-bill" component={UpdateD} exact/>
            </Col>
          </Row>
          <Footer/>
        </Container>
      </Router>
     
    </div>
  );
}

export default App;
