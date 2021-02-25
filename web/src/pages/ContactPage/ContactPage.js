import { Form, TextAreaField, Submit, TextField, FieldError, Label, } from '@redwoodjs/forms/dist'
import NoteLayout from 'src/layouts/NoteLayout'

const ContactPage = () => {
  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <NoteLayout>
      <Form onSubmit={onSubmit} validation={{ mode: "onBlur"}}>
        <Label name="name" errorClassName="error">Name</Label>
        <TextField name="name" validation={{ required: true }} errorClassName="error" />
        <FieldError name="name" className="error" />

        <Label name="email" errorClassName="error">Email</Label>
        <TextField name="email"
                   validation={{
                     required: true,
                     pattern: {
                       value: /[^@]+@[^.]+\..+/,
                       message: "Please enter a valid email address.",
                     },
                   }}
                   errorClassName="error" />
        <FieldError name="email" className="error" />

        <Label name="message" errorClassName="error">Message</Label>
        <TextAreaField name="message" validation={{ required: true }} errorClassName="error" />
        <FieldError name="message" className="error" />

        <Submit>Save</Submit>
      </Form>
    </NoteLayout>
  )
}

export default ContactPage
