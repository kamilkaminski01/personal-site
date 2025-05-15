import './style.scss'
import TitleSection from 'components/molecules/TitleSection'
import Navbar from 'components/molecules/Navbar'
import SocialMedia from 'components/molecules/SocialMedia'

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
