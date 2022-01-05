import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav>
      <Link to="/"> Home </Link>
      <Link to="/index"> Show All </Link>
      <Link to="/show"> Show One  </Link>
    </nav>
  )
}

export default Nav