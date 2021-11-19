import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import MessageIcon from "@mui/icons-material/Message";
import PersonIcon from "@mui/icons-material/Person";
import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./DynamicNavbar.css";
import { logout } from "./../../services/auth.service";
import { useHistory } from "react-router-dom";
import { LogoutAction } from "../../action/authAction";
import { useDispatch } from 'react-redux';
const Dynamicnavbar = ({ brandName, isLoggedIn }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    dispatch(LogoutAction(history));
   
  };
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>{brandName}</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {isLoggedIn && (
                <>
                  <Nav.Link as={NavLink} exact to="/">
                    <HomeIcon />
                    Home
                  </Nav.Link>
                  <Nav.Link as={NavLink} exact to="/message">
                    <MessageIcon />
                    Messages
                  </Nav.Link>
                </>
              )}
            </Nav>
            <Nav>
              <Nav>
                {!isLoggedIn && (
                  <>
                    <Nav.Link as={NavLink} exact to="/login">
                      <LoginIcon />
                      Login
                    </Nav.Link>
                    <Nav.Link as={NavLink} exact to="/register">
                      <AppRegistrationIcon />
                      Register
                    </Nav.Link>
                  </>
                )}
              </Nav>
              {isLoggedIn && (
                <NavDropdown title="Sundar Gautam" id="collasible-nav-dropdown">
                  <NavDropdown.Item as={NavLink} exact to="/profile">
                    <PersonIcon /> Profile
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={handleLogout}>
                    <LogoutIcon />
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Dynamicnavbar;
