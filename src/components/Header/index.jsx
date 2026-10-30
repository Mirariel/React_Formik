import { Link } from 'react-router'
import styles from './Header.module.sass'

function Header () {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Formik</div>
      <nav className={styles.nav}>
        <Link className={styles.link} to='/'>Home</Link>
        <Link className={styles.link} to='registration'>Registration</Link>
        <Link className={styles.link} to='signUp'>SignUp</Link>
      </nav>
    </header>
  )
}

export default Header
