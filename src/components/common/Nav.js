import { Link, useNavigate, useLocation } from 'react-router-dom'
import { isAuthenticated, removeToken } from '../lib/auth'

function Nav() {
  const navigate = useNavigate()
  const isAuth = isAuthenticated()
  useLocation()

  const handleLogout = () => {
    removeToken()
    navigate('/')
  }

  return (
    <nav>
      <Link to="/"> Home </Link>
      <Link to="/projects"> Show All </Link>
      <Link to="/projects/:projectId"> Show One  </Link>
      {isAuth ? (
        <>
          <Link to="/projects/create">Add Project</Link>
          <button onClick={handleLogout}>Log Out</button>
        </>
      ) : (
        <>
          <Link to="/register">Register</Link>
          <Link to="/login">Log in</Link>
        </>
      )}
    </nav>
  )
}

export default Nav