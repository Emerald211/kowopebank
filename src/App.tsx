import { Route, Routes } from 'react-router-dom'
import './App.css'
import Onboarding from './pages/onboarding/onboarding'
import Login from './pages/onboarding/login/login'

function App() {


  return (
    <Routes>
      <Route path='/onboarding' element={<Onboarding />}>
<Route path='login' element={<Login />} />
      </Route>
 </Routes>
  )
}

export default App
