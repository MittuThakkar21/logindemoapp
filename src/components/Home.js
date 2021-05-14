
import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const Home = () => {
    return (

        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">News Application</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    {/* <Nav className="mr-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav> */}
                    <Nav className="mr-auto">
                        <Link to="/login">Login</Link>
                        <Link to="/registration">Registration</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        </>

    )
}

export default Home
