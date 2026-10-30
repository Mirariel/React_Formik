import { Link } from "react-router"


function Header () {
  return (
    <header>
      <div>Formik</div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='registration'>Registration</Link>
        <Link to='signUp'>SignUp</Link>
      </nav>
    </header>
  )
}

export default Header
