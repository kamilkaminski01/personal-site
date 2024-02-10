import './style.scss'
import { TileProps } from './interface.ts'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import useResize from 'hooks/useResize.ts'
import { MAX_WIDTH } from 'utils/consts.ts'

const Tile = ({ children, link, className }: TileProps) => {
  const isNotDesktop = useResize(MAX_WIDTH.desktop)

  return (
    <div className={classNames('tile', className)}>
      {isNotDesktop && <Link to={link} target="_blank" rel="noreferrer" className="tile__hover" />}
      {children}
    </div>
  )
}

export default Tile
