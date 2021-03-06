import React, { useState } from "react";
import { Button, NavLink } from 'react-bootstrap';
import Nav from "react-bootstrap/esm/Nav";
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import logo from "../image/logo.svg"
import { Form,FormControl } from "react-bootstrap";
import { Offcanvas } from "react-bootstrap";
import { FaBars } from "react-icons/fa";
import "./Header.css";
import { style } from "@mui/system";
function Header(){
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
    return(
      <div>
        <div className="banner"></div>
      <div className="banner1">
      <Navbar className="banner1" expand="lg" >
         <Container>
         <Nav className="me-auto">
         <NavLink href="#" className="faBars" onClick={handleShow}>
            <FaBars  className="menu"/>
         </NavLink>
         <Offcanvas show={show} onHide={handleClose}>         
            <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                   <Nav.Link href="#action1">Home</Nav.Link>
                   <Nav.Link href="#action2">Link</Nav.Link>
                   <Nav.Link href="#home">Home</Nav.Link>
                   <Nav.Link href="#link">Link</Nav.Link>
                   <Nav.Link href="#home">Home</Nav.Link>
                   <Nav.Link href="#link">Link</Nav.Link>
                   <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                     <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                     <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                     <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                     <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                     <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                     <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                     <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                     <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                     <NavDropdown.Divider />
                     
                     <NavDropdown.Item href="#action5">
                       Something else here
                     </NavDropdown.Item>
                   </NavDropdown>
                </Nav>
            </Offcanvas.Body>
         </Offcanvas>
          <Navbar.Brand href="#home"><img src={logo}></img></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />   
           </Nav> 
           <Nav>
              <Nav.Link href="#link">T???i ???ng d???ng</Nav.Link>
              <Nav.Link href="#home">H???p t??c v???i ch??ng t??i</Nav.Link>
              <Nav.Link href="#link">???? l??u</Nav.Link>
              <Nav.Link href="#home">?????t ch??? c???a t??i</Nav.Link>
              <Nav.Link href="#link">VND</Nav.Link>
                   <NavDropdown title="????ng nh???p" align="end">
                      <div style={{width:400}}>
                         <h3>????ng nh???p t??i kho???n</h3>
                         <h2>Email ho???c s??? di ?????ng</h2>
                      </div>
                   <Form >
                     <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search"/>
                   </Form>
             </NavDropdown>
             <Button>????ng k??</Button>
            </Nav>     
        </Container>
      </Navbar>
      </div>
      <div >
            <Navbar className="banner2">
               <Container>
            <Nav>
               <NavDropdown title="V???n chuy???n" id="basic-nav-dropdown" className="text-primary">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
               </NavDropdown>
               <NavDropdown title="Ch??? ???" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
               </NavDropdown>
               <NavDropdown title="Ho???t ?????ng v?? gi???i tr??" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
               </NavDropdown>
               <NavDropdown title="S???n ph???m b??? sung" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
               </NavDropdown>
            </Nav>     
            </Container>
            </Navbar>
         </div>
      </div>
    );
}
export default Header;