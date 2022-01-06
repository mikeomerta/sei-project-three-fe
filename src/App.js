import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/common/Nav'
import Home from './components/common/Home'

function App() {
  return (
    <BrowserRouter> 
      <Nav />
      <Routes>
        <Route path = "/" element = {<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
