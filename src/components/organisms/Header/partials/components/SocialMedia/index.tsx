import './style.scss'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io'
import { MdOutlineMailOutline } from 'react-icons/md'
import { SOCIAL_MEDIA } from 'utils/consts.ts'
import { ReactNode } from 'react'

const SocialMedia = () => {
  const renderLink = (url: string, icon: ReactNode) => (
    <a href={url} target="_blank" rel="noreferrer">
      {icon}
    </a>
  )

  return (
    <div className="social-media">
      {renderLink(SOCIAL_MEDIA.github, <IoLogoGithub />)}
      {renderLink(SOCIAL_MEDIA.linkedin, <IoLogoLinkedin />)}
      {renderLink(SOCIAL_MEDIA.email, <MdOutlineMailOutline />)}
    </div>
  )
}

export default SocialMedia
