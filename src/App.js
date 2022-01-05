import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/common/Nav'
import Home from './components/common/Home'

function App() {
  return (
    <BrowserRouter> 
      <Nav />
      <Routes>
        <Route path = "/" element = {<Home />} />
        {/* <Route path = "/projects" element = {<Index />} /> */}
        {/* <Route path = "/projects/:projectId" element = {<Show />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
