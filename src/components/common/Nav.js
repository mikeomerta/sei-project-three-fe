import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav>
      <Link to="/"> Home </Link>
      <Link to="/projects"> Show All </Link>
      <Link to="/show"> Show One  </Link>
    </nav>
  )
}

export default Nav