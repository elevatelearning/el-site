import React from "react"

import { Button, Form } from "react-bootstrap"

const ContactForm = () => {
  return (
    <Form action="//formspree.io/mknqevag" method="POST">
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control required type="text" placeholder="Enter name" name="name" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Email Address</Form.Label>
        <Form.Control required type="email" placeholder="Enter email" name="email" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Contact Number</Form.Label>
        <Form.Control type="text" placeholder="Enter contact number" name="contact-number" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Enquiry</Form.Label>
        <Form.Control required as="textarea" rows="3" name="message" />
      </Form.Group>
      <Form.Group>
        <small class="form-text text-muted d-none d-lg-block" id="emailHelp">We'll never share your personal details or data with anyone.</small>
        <Form.Control type="hidden" name="_next" value="//site.io/thanks.html" />
      </Form.Group>
      <Button className="btn btn-outline-elevate btn-lg" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default ContactForm
