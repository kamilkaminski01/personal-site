import './style.scss'
import TitleSection from './partials/sections/TitleSection'
import Navbar from './partials/components/Navbar'
import SocialMedia from './partials/components/SocialMedia'

const Header = () => {
  return (
    <header>
      <div className="header-top">
        <TitleSection />
        <Navbar />
      </div>
      <SocialMedia />
    </header>
  )
}

export default Header
