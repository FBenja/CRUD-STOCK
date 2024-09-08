import React from "react";
import {Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavbarBS from 'react-bootstrap/Navbar';
import './navbar.css'


const Navbar = () => {
    return (
    <>
    <NavbarBS bg="dark" data-bs-theme="dark">
        <Container fluid>
        <NavbarBS.Brand href="#home">STORE</NavbarBS.Brand>
        <Nav className="nav-container justify-content-evenly">
            <Nav.Item>
            <Link to="/" style = {{color:'#fff', textDecoration:'none'}}> Home </Link>
            </Nav.Item>
            <Nav.Item>
            <Link to="/create" style = {{color:'#fff', textDecoration:'none'}}> ProductCreating </Link>
            </Nav.Item>
            <Nav.Item>
            <Link to="/products" style = {{color:'#fff', textDecoration:'none'}}> ProductList </Link>
            </Nav.Item>
        </Nav>
        </Container>
    </NavbarBS>
    </>
    );
};
export default Navbar;
