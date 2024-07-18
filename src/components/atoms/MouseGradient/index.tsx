import './style.scss'
import { MutableRefObject } from 'react'
import { useMouse } from '@uidotdev/usehooks'
import useResize from 'hooks/useResize'
import { MAX_WIDTH } from 'utils/consts'

const MouseGradient = () => {
  const [mouse, ref] = useMouse()
  const isNotDesktop = useResize(MAX_WIDTH.desktop)

  return (
    <>
      {isNotDesktop ? (
        <div
          ref={ref as MutableRefObject<HTMLDivElement>}
          className="mouse-gradient"
          style={{
            background: `radial-gradient(600px at ${mouse.elementX}px ${mouse.elementY}px, rgba(29, 78, 216, 0.15), transparent 80%)`
          }}></div>
      ) : (
        <div className="mouse-gradient"></div>
      )}
    </>
  )
}

export default MouseGradient
