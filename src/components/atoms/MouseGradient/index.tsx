'use client'

import './style.scss'
import { useMouse } from '@uidotdev/usehooks'
import { MutableRefObject, useEffect, useRef } from 'react'
import useMediaQuery from 'hooks/useMediaQuery'

const MouseGradient = () => {
  const [mouse, baseRef] = useMouse()
  const htmlRef = useRef<HTMLDivElement>(null)
  const isDesktop = useMediaQuery('(min-width: 1025px)')

  useEffect(() => {
    if (htmlRef.current)
      (baseRef as MutableRefObject<HTMLDivElement | null>).current = htmlRef.current
  }, [baseRef])

  return (
    <div
      ref={htmlRef}
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
