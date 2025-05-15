import './style.scss'
import { TileProps } from './interface'
import classNames from 'classnames'

const Tile = ({ children, className }: TileProps) => {
  return (
    <div className={classNames('tile', className)}>
      <div className="tile--hover" />
      {children}
    </div>
  )
}

export default Tile
