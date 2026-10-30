import RegistrationForm from '../../components/forms/RegistratonForm'
import styles from './../FormPage.module.sass'

function RegistrationPage () {
  return (
    <div className={styles.container}>
      <h2>Registration</h2>
      <RegistrationForm />
    </div>
  )
}

export default RegistrationPage
