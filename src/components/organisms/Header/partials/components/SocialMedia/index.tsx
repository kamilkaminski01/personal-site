import './style.scss'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io'
import { MdOutlineMailOutline } from 'react-icons/md'
import { FaSquareUpwork } from 'react-icons/fa6'
import { SiFreelancer } from 'react-icons/si'
import { SOCIAL_MEDIA } from 'utils/consts'
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
      {renderLink(SOCIAL_MEDIA.upwork, <FaSquareUpwork />)}
      {renderLink(SOCIAL_MEDIA.useme, <SiFreelancer />)}
    </div>
  )
}

export default SocialMedia
