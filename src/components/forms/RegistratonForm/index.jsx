import { Formik, Form, ErrorMessage, Field } from 'formik'
import classNames from 'classnames'

import { USER_VALIDATION_SCHEMA } from '../../../utils/validate/validationSchema'
import styles from './../FormStyles.module.sass'
import Input from '../Input'

function RegistrationForm () {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
    birthday: ''
  }

  const handleRegistrationSubmit = (values, formikBag) => {
    formikBag.resetForm()
  }

  const classes = {
    erorr: styles.erorr,
    input: styles.input,
    valid: styles.valid,
    invalid: styles.invalid
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
              classes={classes}
            />

            <Input
              label='Last name:'
              type='text'
              name='lastName'
              placeholder='Last name'
              autoFocus
              classes={classes}
            />

            <Input
              label='Email:'
              type='email'
              name='email'
              placeholder='Your Email'
              autoFocus
              classes={classes}
            />

            <Input
              label='Password:'
              type='password'
              name='password'
              placeholder='password'
              autoFocus
              classes={classes}
            />

            <Input
              label='Phone:'
              type='tel'
              name='phone'
              placeholder='+380*********'
              autoFocus
              classes={classes}
            />

            <Input
              label='Birthday:'
              type='date'
              name='birthday'
              placeholder='Date your birthday'
              autoFocus
              classes={classes}
            />

            <button type='submit'>Registration</button>
          </Form>
        )
      }}
    </Formik>
  )
}

export default RegistrationForm
