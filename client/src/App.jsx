import { Routes, Route } from 'react-router-dom'
import Main from './views/Main/Main'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
    </div>
  )
}

export default App
