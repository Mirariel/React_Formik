import { Formik, Form, ErrorMessage, Field } from 'formik'
import { USER_VALIDATION_SCHEMA } from '../../../utils/validate/validationSchema'
import styles from './../FormStyles.module.sass'
import classNames from 'classnames'

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

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleRegistrationSubmit}
      validationSchema={USER_VALIDATION_SCHEMA}
    >
      {formikProps => {
        const inputStyles = classNames(styles.input, {
          [styles.valid]: !formikProps.errors.name && formikProps.touched.name,
          [styles.invalid]: formikProps.errors.name && formikProps.touched.name
        })

        return (
          <Form className={styles.formContainer}>
            <label>
              <span>First name: </span>
              <Field
                type='string'
                name='firstName'
                placeholder='First name'
                autofocus
              />
              <ErrorMessage
                className={styles.error}
                name='firstName'
                component='div'
              />
            </label>
            <label>
              <span>Last name: </span>
              <Field
                className={inputStyles}
                type='string'
                name='lastName'
                placeholder='Last name'
                autofocus
              />
              <ErrorMessage
                className={styles.error}
                name='lastName'
                component='div'
              />
            </label>
            <label>
              <span>Email: </span>
              <Field
                className={inputStyles}
                type='email'
                name='email'
                placeholder='Your Email'
                autofocus
              />
              <ErrorMessage
                className={styles.error}
                name='email'
                component='div'
              />
            </label>
            <label>
              <span>Password: </span>
              <Field
                className={inputStyles}
                type='password'
                name='password'
                placeholder='password'
                autofocus
              />
              <ErrorMessage
                className={styles.error}
                name='password'
                component='div'
              />
            </label>
            <label>
              <span>Phone: </span>
              <Field
                className={inputStyles}
                type='tel'
                name='phone'
                placeholder='Phone number'
                autofocus
              />
              <ErrorMessage
                className={styles.error}
                name='phone'
                component='div'
              />
            </label>
            <label>
              <span>Birthday: </span>
              <Field
                className={inputStyles}
                type='date'
                name='birthday'
                placeholder='Date your birthday'
                autofocus
              />
              <ErrorMessage
                className={styles.error}
                name='birthday'
                component='div'
              />
            </label>

            <button type='submit'>Registration</button>
          </Form>
        )
      }}
    </Formik>
  )
}

export default RegistrationForm
