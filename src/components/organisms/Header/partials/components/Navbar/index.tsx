import './style.scss'
import { PATHS } from 'utils/consts.ts'
import useResize from 'hooks/useResize.ts'
import { MAX_WIDTH } from 'utils/consts.ts'
import { Link } from 'react-scroll'

const Navbar = () => {
  const isDesktop = useResize(MAX_WIDTH.desktop)

  return (
    isDesktop && (
      <nav>
        <Link className="nav__link" activeClass="active" to={PATHS.about} smooth duration={300}>
          <span className="nav__link-line" />
          About
        </Link>
        <Link
          className="nav__link"
          activeClass="active"
          to={PATHS.experience}
          smooth
          duration={300}>
          <span className="nav__link-line" />
          Experience
        </Link>
        <Link className="nav__link" activeClass="active" to={PATHS.projects} smooth duration={300}>
          <span className="nav__link-line" />
          Projects
        </Link>
      </nav>
    )
  )
}

export default Navbar
