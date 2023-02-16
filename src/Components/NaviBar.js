import React from "react";
import { Button, Nav, Navbar, Link } from "react-bootstrap";

export function NaviBar() {
    return (
    <>
        <Navbar collapseOnSelect expand = "lg" bg = "dark" variant="dark">
            <Navbar.Brand>WebDev Navbar Brand</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    {/* <Nav.Link>
                        <Link to="/">Home</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/user">user</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/about">about</Link>
                    </Nav.Link> */}
                     <Nav.Link>
                        Home
                    </Nav.Link>
                    <Nav.Link>
                        Home2
                    </Nav.Link>
                    <Nav.Link>
                        Home3
                    </Nav.Link>
                </Nav>

                <Nav>
                    <Button variant="primary">Log In</Button>
                    <Button variant="primary">Sign out</Button>
                </Nav>
            </Navbar.Collapse>

        </Navbar>

    </>
    )
}