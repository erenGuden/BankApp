import React, { useRef } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { Container } from "react-bootstrap";

const Signup = () => {
  const emailRef = useRef();
  const passwordConfirmRef = useRef();
  const passwordRef = useRef();
  return (
    <>
      <Container
        className="d-flex align-items justify-content-center "
        style={{ marginTop:"10%", minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Sign Up</h2>
              <Form>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>
                <Form.Group id="password-confirmation">
                  <Form.Label>Password Confirmation</Form.Label>
                  <Form.Control
                    type="password"
                    ref={passwordConfirmRef}
                    required
                  />
                </Form.Group>
                <Button className="text-center mt-3" type="submit">
                  Sign Up
                </Button>
              </Form>
            </Card.Body>
          </Card>
          <div className="w100 text-center mt-2">
            Already have an account? Login
          </div>
        </div>
      </Container>
    </>
  );
};

export default Signup;
