import './style.scss'
import { TileProps } from './interface.ts'
import classNames from 'classnames'
import useResize from 'hooks/useResize.ts'
import { MAX_WIDTH } from 'utils/consts.ts'

const Tile = ({ children, className }: TileProps) => {
  const isNotDesktop = useResize(MAX_WIDTH.desktop)

  return (
    <div className={classNames('tile', className)}>
      {isNotDesktop && <div className="tile--hover"></div>}
      {children}
    </div>
  )
}

export default Tile
