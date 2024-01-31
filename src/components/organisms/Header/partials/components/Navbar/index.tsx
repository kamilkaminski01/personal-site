import './style.scss'
import classNames from 'classnames'
import { Link, useLocation } from 'react-router-dom'
import { PATHS } from 'utils/consts.ts'
import useResize from 'hooks/useResize.ts'
import { MAX_WIDTH } from 'utils/consts.ts'

const Navbar = () => {
  const location = useLocation()
  const isDesktop = useResize(MAX_WIDTH.desktop)

  return (
    isDesktop && (
      <nav>
        <Link
          to={PATHS.about}
          className={classNames('nav__link', { active: location.hash === PATHS.about })}>
          <span className="nav__link-line" />
          About
        </Link>
        <Link
          to={PATHS.experience}
          className={classNames('nav__link', { active: location.hash === PATHS.experience })}>
          <span className="nav__link-line" />
          Experience
        </Link>
        <Link
          to={PATHS.projects}
          className={classNames('nav__link', { active: location.hash === PATHS.projects })}>
          <span className="nav__link-line" />
          Projects
        </Link>
      </nav>
    )
  )
}

export default Navbar
