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
              <Nav.Link href="#link">Tải ứng dụng</Nav.Link>
              <Nav.Link href="#home">Hợp tác với chúng tôi</Nav.Link>
              <Nav.Link href="#link">Đã lưu</Nav.Link>
              <Nav.Link href="#home">Đặt chỗ của tôi</Nav.Link>
              <Nav.Link href="#link">VND</Nav.Link>
                   <NavDropdown title="Đăng nhập" align="end">
                      <div style={{width:400}}>
                         <h3>Đăng nhập tài khoản</h3>
                         <h2>Email hoặc số di động</h2>
                      </div>
                   <Form >
                     <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search"/>
                   </Form>
             </NavDropdown>
             <Button>Đăng kí</Button>
            </Nav>     
        </Container>
      </Navbar>
      </div>
      <div >
            <Navbar className="banner2">
               <Container>
            <Nav>
               <NavDropdown title="Vận chuyển" id="basic-nav-dropdown" className="text-primary">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
               </NavDropdown>
               <NavDropdown title="Chổ ở" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
               </NavDropdown>
               <NavDropdown title="Hoạt động và giải trí" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
               </NavDropdown>
               <NavDropdown title="Sản phẩm bổ sung" id="basic-nav-dropdown">
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