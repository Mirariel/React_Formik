import { Route, BrowserRouter as Router, Routes } from 'react-router'
import './App.css'

import RegistrationPage from './pages/RegistrationPage'
import SignUpPage from './pages/SignUpPage'
import BasePage from './pages/BasePge'
import HomePage from './pages/HomePage'

function App () {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<BasePage />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/registration' element={<RegistrationPage />} />
          <Route path='/signUp' element={<SignUpPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
