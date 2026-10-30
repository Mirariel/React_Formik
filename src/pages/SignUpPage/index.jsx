import LoginForm from '../../components/forms/LoginForm'
import styles from './../FormPage.module.sass'

function SignUpPage () {
  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>SignUp</h2>
      <LoginForm />
    </div>
  )
}

export default SignUpPage
