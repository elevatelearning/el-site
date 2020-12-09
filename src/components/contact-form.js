import React, { createRef } from "react"

import { Button, Form } from "react-bootstrap"
import axios from "axios"
import * as qs from "query-string"

class ContactForm extends React.Component {
  formRef = createRef()
  state = { feedbackMessage: null, formValidated: false }

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
    Object.keys(this.formRef).map(
      key => (formData[key] = this.formRef[key].value)
    )

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
        this.formRef.reset()
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
        noValidate
        validated={this.state.formValidated}
        onSubmit={event => this.handleSubmit(event)}
        method="post"
        ref={form => (this.formRef = form)}
        netlify-honeypot="bot-field"
        data-netlify="true"
        name="contact"
      >
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" required />
          <Form.Control.Feedback type="invalid">
            Please enter your name.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required />
          <Form.Control.Feedback type="invalid">
            Please enter your email.
          </Form.Control.Feedback>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>Contact Number</Form.Label>
          <Form.Control type="text" placeholder="Enter contact number" />
          <Form.Text className="text-muted">
            We'll never share your contact number with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>Enquiry</Form.Label>
          <Form.Control as="textarea" rows="3" required />
          <Form.Control.Feedback type="invalid">
            Please enter a message.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          {this.state.feedbackMessage && <p>{this.state.feedbackMessage}</p>}
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
