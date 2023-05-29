import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>

            <Navbar className='navbar-color' expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Nike</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <Link className='links' to="/">Home</Link>
                            <Link className='links' to="/products">Products</Link>
                            <Link className='links' to="/featured">Featured</Link>
                            <Link className='links' to="/review">Review</Link>

                        </Nav>
                        <div class="icons">
                            <a href="#" class="fas fa-heart"></a>
                            <a href="#" class="fas fa-shopping-cart"></a>
                            <a href="#" class="fas fa-user"></a>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </>
    )
}

export default Header