import { Formik, Form, ErrorMessage, Field } from 'formik'

import { USER_VALIDATION_SCHEMA } from '../../../utils/validate/validationSchema'
import styles from './../FormStyles.module.sass'
import Input from '../Input'

function RegistrationForm () {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    phone: '',
    birthday: ''
  }

  const handleRegistrationSubmit = (values, formikBag) => {
    formikBag.resetForm()
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleRegistrationSubmit}
      validationSchema={USER_VALIDATION_SCHEMA}
    >
      {formikProps => {
        return (
          <Form className={styles.formContainer}>
            <Input
              label='First name:'
              type='text'
              name='firstName'
              placeholder='First name'
              autoFocus
            />
            <Input
              label='Last name:'
              type='text'
              name='lastName'
              placeholder='Last name'
            />
            <Input
              label='Email:'
              type='email'
              name='email'
              placeholder='Your Email'
            />
            <Input
              label='Password:'
              type='password'
              name='password'
              placeholder='password'
            />

            <Input
              label='Repeat your password:'
              type='password'
              name='passwordConfirmation'
            />

            <Input
              label='Phone:'
              type='tel'
              name='phone'
              placeholder='+380*********'
            />

            <Input label='Birthday:' type='date' name='birthday' />
            <button type='submit'>Registration</button>
          </Form>
        )
      }}
    </Formik>
  )
}

export default RegistrationForm
