import './style.scss'
import { PATHS } from 'utils/consts.ts'
import useResize from 'hooks/useResize.ts'
import { MAX_WIDTH } from 'utils/consts.ts'
import { Link } from 'react-scroll'

const Navbar = () => {
  const isNotDesktop = useResize(MAX_WIDTH.desktop)

  return (
    isNotDesktop && (
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
  )
}

export default Navbar
