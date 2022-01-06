import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav>
      <Link to="/"> Home </Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Log in</Link>
      <Link to="/projects"> Show All </Link>
      <Link to="/projects/:projectId"> Show One  </Link>
    </nav>
  )
}

export default Nav