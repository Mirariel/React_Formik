import { Formik, Form, ErrorMessage, Field } from 'formik'

const initialValues = {
  email: '',
  password: ''
}

const handleLoginingSubmit = (values, formikBag) => {
  formikBag.resetForm()
}

function LoginForm () {
  return (
    <Formik initialValues={initialValues} onSubmit={handleLoginingSubmit}>
      {formikProps => (
        <Form>
          <label>
            <span>Email: </span>
            <Field type='email' name='email' placeholder='Email' autofocus />
            <ErrorMessage name='Email' component='div' />
          </label>
          <label>
            <span>Password: </span>
            <Field
              type='password'
              name='password'
              placeholder='password'
              autofocus
            />
            <ErrorMessage name='passwords' component='div' />
          </label>
          <button>SignUp</button>
        </Form>
      )}
    </Formik>
  )
}

export default LoginForm
