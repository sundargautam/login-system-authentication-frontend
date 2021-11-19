import "./Login.css";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "../../action/authAction";
import { useHistory } from "react-router-dom";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <div className="loginpage l-common">
      <Form
        className="login-form"
        onSubmit={(e) => {
          dispatch(authAction(username,password,history));
          e.preventDefault();
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>UserName</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <div className="form-wrapper">
          <Button variant="primary" type="submit">
            Login
          </Button>
          <LinkContainer to="/register">
            <span className="form-notice">Don't have account</span>
          </LinkContainer>
        </div>
      </Form>
    </div>
  );
};

export default Login;
