'use client'

import './style.scss'
import { PATHS } from 'utils/consts'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <nav>
      <Link to={PATHS.about} className="nav__link" activeClass="active" spy offset={-100}>
        <span className="nav__link-line" />
        About
      </Link>
      <Link to={PATHS.experience} className="nav__link" activeClass="active" spy offset={-112}>
        <span className="nav__link-line" />
        Experience
      </Link>
      <Link to={PATHS.projects} className="nav__link" activeClass="active" spy offset={-112}>
        <span className="nav__link-line" />
        Projects
      </Link>
    </nav>
  )
}

export default Navbar
