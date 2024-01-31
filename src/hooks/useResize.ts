import { useEffect, useState } from 'react'

const useResize = (width: number) => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > width)

  const handleResize = () => {
    setIsDesktop(window.innerWidth > width)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return isDesktop
}

export default useResize
