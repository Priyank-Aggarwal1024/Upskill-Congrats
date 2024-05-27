import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Congrats from './pages/home/Congrats'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Congrats />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
