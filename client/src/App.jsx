import { Routes, Route } from 'react-router-dom'
import Main from './views/Main/Main'
import Login from './views/Login/Login'
import Register from './views/Register/Register'
import NavBar from './components/NavBar/NavBar'

function App() {

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  )
}

export default App
