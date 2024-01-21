import './style.scss'
import { Link } from 'react-router-dom'
import { PATHS } from 'utils/consts.ts'

const Navbar = () => {
  return (
    <nav>
      <ul className="nav__menu">
        <li className="menu__item">
          <Link to={PATHS.about}>About</Link>
        </li>
        <li className="menu__item">
          <Link to={PATHS.experience}>Experience</Link>
        </li>
        <li className="menu__item">
          <Link to={PATHS.projects}>Projects</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
