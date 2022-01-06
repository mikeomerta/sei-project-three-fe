import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/common/Nav'
import Home from './components/common/Home'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import ProjectShow from './components/projects/ProjectShow'
import ProjectIndex from './components/projects/ProjectIndex'

function App() {
  return (
    <BrowserRouter> 
      <Nav />
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = '/register' element = {<Register />} />
        <Route path = '/login' element = {<Login />} />
        <Route path = "/projects" element = {<ProjectIndex />} />
        <Route path = "/projects/:projectId" element = {<ProjectShow />} />        
      </Routes>
    </BrowserRouter>
  )
}

export default App
