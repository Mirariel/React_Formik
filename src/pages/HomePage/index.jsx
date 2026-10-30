import { Link } from 'react-router'
import styles from './../FormPage.module.sass'

function HomePage () {
  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>Formik Forms</h2>
      <div>
        <Link className={styles.link} to='/registration'>
          Registration
        </Link>
        <Link className={styles.link} to='/signUp'>
          SignUp
        </Link>
      </div>
    </div>
  )
}

export default HomePage
