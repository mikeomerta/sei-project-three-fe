import { Link } from 'react-router-dom'
import { removeToken } from '../lib/auth'

function Nav() {
  return (
    <nav>
      <Link to="/"> Home </Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Log in</Link>
      <Link to="/projects"> Show All </Link>
      <Link to="/projects/:projectId"> Show One  </Link>
      <Link to="/projects/create">Add Project</Link>
      <button onClick={removeToken}>Log Out</button>
    </nav>
  )
}

export default Nav