import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  console.log(user);
  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        sticky="top"
        collapseOnSelect
        expand="lg"
      >
        <Container>
          <Navbar.Brand href="#home">GCM</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={Link} to="#home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="#services">
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="#experts">
              Exparts
            </Nav.Link>
            {!user.email ? (
              <Nav.Link as={Link} to="/login">
                login
              </Nav.Link>
            ) : (
              <Button variant="light" onClick={logOut}>
                Log Out
              </Button>
            )}
            <Navbar.Text>
              Signed in as: <a href="#login">{user?.displayName}</a>
            </Navbar.Text>
          </Navbar.Collapse>
          <Nav className="me-auto"></Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
