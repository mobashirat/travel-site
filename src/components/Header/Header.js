import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth()
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home"> <i className="fas fa-plane-departure fs-2"> Take Off</i>
                    </Navbar.Brand>

                    <Navbar.Toggle />

                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home" className="fs-5 ms-1">Home</Nav.Link>
                        <Nav.Link as={Link} to="/hotels" className="fs-5 ms-1">Hotels</Nav.Link>
                        <Nav.Link as={Link} to="/city" className="fs-5 ms-1">city
                        </Nav.Link>
                        <Nav.Link as={Link} to="/services" className="fs-5 ms-1">Packages
                        </Nav.Link>

                        <Nav.Link as={Link} to="/register" className="fs-5 ms-1">Sign up</Nav.Link>



                        {user?.displayName ?
                            <Button onClick={logOut} variant="secondary">Logout</Button> :
                            <Nav.Link as={Link} to="/login" className="fs-5 ms-1">Login</Nav.Link>}

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