import React from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import "./Header.css";
import logo from "./../../images/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from 'firebase/auth';
import auth from "../../firebase.init";
const Header = () => {
  let navigete = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  const loginSignupBTN = ()=>{
    if(!user){
      navigete('login');
    }else{
      signOut(auth);
      navigete('/login')
    }
  }
  return (
    <header>
      <Navbar bg="light" expand="lg" className="px-3">
        <Container fluid>
          <Navbar.Brand to="/" as={Link}>
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link to="services" as={Link}>Services</Nav.Link>
              <Nav.Link to="checkout" as={Link}>Checkout</Nav.Link>
              <Nav.Link to="about" as={Link}>About</Nav.Link>
              <Nav.Link to="blogs" as={Link}>Blogs</Nav.Link>
            </Nav>
            <Form className="d-flex">
            <Button variant="outline-danger" onClick={()=>{navigete('signup')}} className={user ? "signup-btn border-0 rounded-0 ms-2 px-4 d-none ": "signup-btn border-0 rounded-0 ms-2 px-4 "}>Create Account</Button>
              <Button variant="outline-success" onClick={loginSignupBTN}className="login-btn border-0 rounded-0 ms-2 px-4">{user? "Sign Out " : "Log in"}</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
