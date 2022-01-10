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
      <div className='primary-nav'>
        <div>
          <Link to="/"><img 
            src='https://i.imgur.com/yM71o7j.png' 
            alt='logo'
            id='logo'
          /></Link>
        </div>
        <div className='nav-right'>
          {isAuth ? (
            <>
              <Link to="/projects/create">Add Project</Link>
              <button 
                onClick={handleLogout}
                className='logout-button'>
                  Log Out</button>
            </>
          ) : (
            <>
              <Link to="/register"><button className='nav-button'>Sign up</button></Link>
              <Link to="/login">Login</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Nav