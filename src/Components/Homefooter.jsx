import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Homefooter() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

  return (
    <div>
        <div className="footer">
            <br/><br/>

            <Row>
                <Col>
                      <div className="regform">
                          <Form noValidate validated={validated} onSubmit={handleSubmit}>
                              <Row className="mb-3">
                                  <Form.Group controlId="validationCustom01">
                                      <Form.Label>First name</Form.Label>
                                      <Form.Control
                                          required
                                          type="text"
                                          placeholder="First name"
                                        //   defaultValue="Mark"
                                      />
                                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                  </Form.Group>
                                  <Form.Group controlId="validationCustom02">
                                      <Form.Label>Last name</Form.Label>
                                      <Form.Control
                                          required
                                          type="text"
                                          placeholder="Last name"
                                        //   defaultValue="Otto"
                                      />
                                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                  </Form.Group>
                                  <Form.Group controlId="validationCustomUsername">
                                      <Form.Label>Username</Form.Label>
                                      <InputGroup hasValidation>
                                          <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                          <Form.Control
                                              type="text"
                                              placeholder="Username"
                                              aria-describedby="inputGroupPrepend"
                                              required
                                          />
                                          <Form.Control.Feedback type="invalid">
                                              Please choose a username.
                                          </Form.Control.Feedback>
                                      </InputGroup>
                                  </Form.Group>
                                  <Form.Group controlId="validationCustom03">
                                      <Form.Label>City</Form.Label>
                                      <Form.Control type="text" placeholder="City" required />
                                      <Form.Control.Feedback type="invalid">
                                          Please provide a valid city.
                                      </Form.Control.Feedback>
                                  </Form.Group>
                                  <Form.Group controlId="validationCustom04">
                                      <Form.Label>State</Form.Label>
                                      <Form.Control type="text" placeholder="State" required />
                                      <Form.Control.Feedback type="invalid">
                                          Please provide a valid state.
                                      </Form.Control.Feedback>
                                  </Form.Group>
                                  <Form.Group controlId="validationCustom05">
                                      <Form.Label>Zip</Form.Label>
                                      <Form.Control type="text" placeholder="Zip" required />
                                      <Form.Control.Feedback type="invalid">
                                          Please provide a valid zip.
                                      </Form.Control.Feedback>
                                  </Form.Group>
                              </Row>
                              
                              <Form.Group className="mb-3">
                                  <Form.Check
                                      required
                                      label="Agree to terms and conditions"
                                      feedback="You must agree before submitting."
                                      feedbackType="invalid"
                                  />
                              </Form.Group>
                              <Button type="submit" className="subform">Submit form</Button>
                          </Form>

                      </div>
                
                </Col>

                <Col className="continfo">
                    <h3>CONTACT INFO</h3>
                    <p>Mobile : +91 8129911025<br />Email : info@openschool.com<br />
                        Address : Open School, Eden Garden, Bangalore<br />560066</p>
                    <p id="cr1">&copy; 2024 Open School. All rights reserved.</p>

                </Col>
            </Row>
              
            </div>
    </div>
  )
}

export default Homefooter