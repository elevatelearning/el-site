import React, { createRef } from "react"

import { Button, Form } from "react-bootstrap"
import axios from "axios"
import * as qs from "query-string"

class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.formRef = createRef()
    this.state = { feedbackMessage: null, formValidated: false }
  }

  handleSubmit = event => {
    event.preventDefault()
    event.stopPropagation()

    const form = event.currentTarget
    if (form.checkValidity() === false) {
      this.setState({
        feedbackMessage: null,
        formValidated: true,
      })
      return
    }

    const formData = {}
    Object.keys(this.formRef.current)
      .filter(key => this.formRef.current[key].value)
      .map(key => {
        const name = this.formRef.current[key].name
        return (formData[name] = this.formRef.current[key].value)
      })

    console.log(qs.stringify(formData))

    const axiosOptions = {
      url: "/",
      method: "post",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      data: qs.stringify(formData),
    }

    axios(axiosOptions)
      .then(response => {
        this.setState({
          feedbackMessage: "Message sent successfully!",
          formValidated: false,
        })
        this.formRef.current.reset()
      })
      .catch(error =>
        this.setState({
          feedbackMessage: `Message could not be sent. ${JSON.stringify(
            error
          )}`,
          formValidated: false,
        })
      )
  }

  render() {
    return (
      <Form
        ref={this.formRef}
        name="contact"
        method="POST"
        data-netlify-recaptcha="true"
        data-netlify="true"
        onSubmit={event => this.handleSubmit(event)}
        noValidate
        validated={this.state.formValidated}
      >
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            maxLength="100"
            name="name"
            required
          />
          <Form.Control.Feedback type="invalid">
            Please enter your name.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            maxLength="100"
            name="email"
            required
          />
          <Form.Control.Feedback type="invalid">
            Please enter your email.
          </Form.Control.Feedback>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>Contact Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter contact number"
            name="number"
            maxLength="20"
          />
          <Form.Text className="text-muted">
            We'll never share your contact number with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>Enquiry</Form.Label>
          <Form.Control
            as="textarea"
            rows="3"
            maxLength="400"
            name="message"
            required
          />
          <Form.Control.Feedback type="invalid">
            Please enter a message.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <div data-netlify-recaptcha="true"></div>
        </Form.Group>
        <Form.Group>
          {this.state.feedbackMessage && <p>{this.state.feedbackMessage}</p>}
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
