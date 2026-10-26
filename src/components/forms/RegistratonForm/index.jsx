import { Formik, Form, ErrorMessage, Field } from 'formik'
import { USER_VALIDATION_SCHEMA } from '../../../utils/validate/validationSchema'

function RegistrationForm () {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
    birthday: ''
  }

  const handleSubmit = (values, formikBag) => {
    formikBag.resetForm()
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={USER_VALIDATION_SCHEMA}
    >
      {formikProps => (
        <Form>
          <label>
            <span>First name: </span>
            <Field
              type='string'
              name='firstName'
              placeholder='First name'
              autofocus
            />
            <ErrorMessage name='firstName' component='div' />
          </label>
          <label>
            <span>Last name: </span>
            <Field
              type='string'
              name='lastName'
              placeholder='Last name'
              autofocus
            />
            <ErrorMessage name='lastName' component='div' />
          </label>
          <label>
            <span>Email: </span>
            <Field
              type='email'
              name='email'
              placeholder='Your Email'
              autofocus
            />
            <ErrorMessage name='email' component='div' />
          </label>
          <label>
            <span>Password: </span>
            <Field
              type='password'
              name='password'
              placeholder='password'
              autofocus
            />
            <ErrorMessage name='password' component='div' />
          </label>
          <label>
            <span>Phone: </span>
            <Field
              type='tel'
              name='phone'
              placeholder='Phone number'
              autofocus
            />
            <ErrorMessage name='phone' component='div' />
          </label>
          <label>
            <span>Birthday: </span>
            <Field
              type='date'
              name='birthday'
              placeholder='Date your birthday'
              autofocus
            />
            <ErrorMessage name='birthday' component='div' />
          </label>

          <button type='submit'>Registration</button>
        </Form>
      )}
    </Formik>
  )
}

export default RegistrationForm
