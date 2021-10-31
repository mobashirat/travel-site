import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth()
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home"> <i className="fas fa-plane-departure fs-2"><span style={{ color: 'red' }}>Take Off</span></i>
                    </Navbar.Brand>

                    <Navbar.Toggle />

                    <Navbar.Collapse className="justify-content-end nav">
                        <Nav.Link as={Link} to="/home" className="fs-5 ms-1"><span>Home</span></Nav.Link>
                        <Nav.Link as={Link} to="/hotels" className="fs-5 ms-1"><span>Hotels</span></Nav.Link>
                        <Nav.Link as={Link} to="/city" className="fs-5 ms-1"><span>city</span>
                        </Nav.Link>
                        <Nav.Link as={Link} to="/services" className="fs-5 ms-1"><span>Packages</span>
                        </Nav.Link>

                        <Nav.Link as={Link} to="/register" className="fs-5 ms-1"><span>Sign up</span></Nav.Link>



                        {user?.displayName ?
                            <Button onClick={logOut} variant="info">Logout</Button> :
                            <Nav.Link as={Link} to="/login" className="fs-5 ms-1"><span>Login</span></Nav.Link>}

                        <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>

                </Container>
            </Navbar>


        </>
    );
};

export default Header;