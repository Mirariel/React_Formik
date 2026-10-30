import { Formik, Form } from 'formik'
import styles from './../FormStyles.module.sass'
import Input from '../Input'
import { USER_VALIDATION_SCHEMA } from '../../../utils/validate/validationSchema'

const initialValues = {
  email: '',
  password: ''
}

const handleLoginingSubmit = (values, formikBag) => {
  formikBag.resetForm()
}

function LoginForm () {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleLoginingSubmit}
      validationSchema={USER_VALIDATION_SCHEMA}
    >
      {formikProps => (
        <Form className={styles.formContainer}>
          <Input
            label='Email:'
            type='email'
            name='email'
            placeholder='abc@mail.com'
            autoFocus
          />

          <Input
            label='Password:'
            type='password'
            name='password'
            placeholder='password'
          />

          <button>SignUp</button>
        </Form>
      )}
    </Formik>
  )
}

export default LoginForm
