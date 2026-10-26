import { Formik, Form, ErrorMessage } from 'formik'
import { USER_VALIDATION_SCHEMA } from './../../utils/validate/validationSchema'

function RegistrationForm () {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: ''
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
            <Field type='string' name='firstName' placeholder='First name' />
            <ErrorMessage name='firstName' />
          </label>
        </Form>
      )}
    </Formik>
  )
}

export default RegistrationForm
