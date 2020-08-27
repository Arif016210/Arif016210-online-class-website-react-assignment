import React from 'react';
import logo from '../../img/logo.jpg';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, } from 'react-bootstrap';




const Header = () => {
    return (
        // <div className="header">
        //     <img src={logo} alt="" />
        //     <h1>Development School</h1>

        //     <nav>
        //         <a href="/Courses">Courses</a>
        //         <a href="/Enroll Review">Enroll Review</a>
        //         <a href="/manage">Manage Inventory Here</a>
        //     </nav>
        // </div>

        <Navbar bg="light" expand="lg">

            <Navbar.Brand href="#home"><img src={logo} alt="" className="img-size" /></Navbar.Brand>
            <h1>Development School</h1>
            <Nav className="ml-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#Courses">Courses</Nav.Link>
                <Nav.Link href="#Enroll Review">Enroll Review</Nav.Link>

                <Nav.Link href="#link">Link</Nav.Link>

            </Nav>
        </Navbar>
    );
};

export default Header;