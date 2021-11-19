import "./Register.css";
import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { register } from "../../services/auth.service";
import CustomAlert from "../../components/CustomAlert/CustomAlert";
const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [successModal, setsuccessModal] = useState(false);
  useEffect(() => {
    if (successModal) {
      setTimeout(() => {
        setsuccessModal(false);
      }, 1000);
    }
  }, [successModal]);
  const handleRegister = async () => {
    try {
      let { data } = await register(username, email, password);
      setMessage(data.message);
      setsuccessModal(true);
    } catch (error) {
      if (error.response) {
        // Request made and server responded
        const {
          data: { message },
        } = error.response;
        console.log(message);
        setMessage(message);
        setsuccessModal(true);
      } else if (error.request) {
        // The request was made but no response was received
        setMessage("Server Failed");
      } else {
        // Something happened in setting up the request that triggered an Error
        setMessage("Something unexpected happened");
      }
    }
  };
  return (
    <div className="registerpage l-common">
      {successModal && <CustomAlert message={message} />}
      <Form
        className="login-form"
        onSubmit={(e) => {
          handleRegister();
          e.preventDefault();
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>UserName</Form.Label>
          <Form.Control
            type="text"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
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
            Register
          </Button>
          <LinkContainer to="/login">
            <span className="form-notice form-notice_custom">
              Already have account
            </span>
          </LinkContainer>
        </div>
      </Form>
    </div>
  );
};

export default Register;
