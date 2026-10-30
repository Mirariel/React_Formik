import { Link } from 'react-router'

function HomePage () {
  return (
    <>
      <h1>Formik Forms</h1>
      <div>
        <Link to='/registration'>Registration</Link>
        <Link to='/signUp'>SignUp</Link>
      </div>
    </>
  )
}

export default HomePage
