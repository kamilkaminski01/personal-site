import { useEffect, useState } from 'react'
import { MAX_WIDTH } from 'utils/consts.ts'

const useDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > MAX_WIDTH.desktop)

  const handleResize = () => {
    setIsDesktop(window.innerWidth > MAX_WIDTH.desktop)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return isDesktop
}

export default useDesktop
