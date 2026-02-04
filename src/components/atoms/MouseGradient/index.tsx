'use client'

import './style.scss'
import { useMouse } from '@uidotdev/usehooks'
import useMediaQuery from 'hooks/useMediaQuery'

const MouseGradient = () => {
  const [mouse, mouseRef] = useMouse<HTMLDivElement>()
  const isDesktop = useMediaQuery('(min-width: 1025px)')

  return (
    <div
      ref={mouseRef}
      className="mouse-gradient"
      style={
        isDesktop
          ? {
              background: `radial-gradient(600px at ${mouse.elementX}px ${mouse.elementY}px, rgba(29, 78, 216, 0.15), transparent 80%)`
            }
          : undefined
      }
    />
  )
}

export default MouseGradient
