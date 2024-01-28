import './style.scss'
import { TileProps } from './interface.ts'
import classNames from 'classnames'

const Tile = ({ children, className }: TileProps) => {
  return <div className={classNames('tile', className)}>{children}</div>
}

export default Tile
