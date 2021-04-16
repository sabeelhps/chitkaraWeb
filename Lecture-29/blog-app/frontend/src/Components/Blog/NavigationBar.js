import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class NavigationBar extends Component {
    render() {
        return (
            <>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Blog App</Navbar.Brand>
            <Nav className="mr-auto">
            <Link to="/blogs"><Nav.Link>Blogs</Nav.Link></Link> 
            <Link to="/blogs/new"><Nav.Link>New</Nav.Link></Link> 
        
            </Nav>
        </Navbar>
        </>
        );
    }
}

export default NavigationBar;
