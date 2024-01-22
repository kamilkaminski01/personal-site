import './style.scss'
import { TileProps } from './interface.ts'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

const Tile = ({ children, link, className }: TileProps) => {
  return (
    <Link to={link} target="_blank" rel="noreferrer" className={classNames('tile', className)}>
      {children}
    </Link>
  )
}

export default Tile
