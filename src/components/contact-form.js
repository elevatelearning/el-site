import React from "react"

import { Button, Form } from "react-bootstrap"
import axios from "axios"
import * as qs from "query-string"

class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.domRef = React.createRef()
    this.state = { feedbackMsg: null }
  }

  handleSubmit(event) {
    event.preventDefault()
    const formData = {}
    Object.keys(this.domRef).map(
      key => (formData[key] = this.domRef[key].value)
    )

    const axiosOptions = {
      url: this.props.location.pathname,
      method: "post",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      data: qs.stringify(formData),
    }

    axios(axiosOptions)
      .then(response => {
        this.setState({
          feedbackMsg: "Form submitted successfully!",
        })
        this.domRef.current.reset()
      })
      .catch(err =>
        this.setState({
          feedbackMsg: "Form could not be submitted.",
        })
      )
  }

  render() {
    return (
      <Form
        ref={this.domRef}
        method="post"
        onSubmit={event => this.handleSubmit(event)}
        netlify-honeypot="bot-field"
        data-netlify="true"
        name="contact"
      >
        <Form.Group>
          {this.state.feedbackMsg && <p>{this.state.feedbackMsg}</p>}
        </Form.Group>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter name"
            name="name"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Enter email"
            name="email"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Contact Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter contact number"
            name="contact-number"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Enquiry</Form.Label>
          <Form.Control required as="textarea" rows="3" name="message" />
        </Form.Group>
        <Form.Group>
          <small
            className="form-text text-muted d-none d-lg-block"
            id="emailHelp"
          >
            We'll never share your personal details or data with anyone.
          </small>
        </Form.Group>
        <Form.Group>
          <Form.Control type="hidden" name="bot-field" />
          <Form.Control type="hidden" name="form-name" value="contact" />
        </Form.Group>
        <Button type="submit" className="btn btn-lg" variant="outline-primary">
          Submit
        </Button>
      </Form>
    )
  }
}

export default ContactForm
