import './style.scss'
import AboutSection from './partials/sections/AboutSection'
import ExperienceSection from './partials/sections/ExperienceSection'
import Footer from 'components/molecules/Footer'

const Main = () => {
  return (
    <main>
      <AboutSection />
      <ExperienceSection />
      <Footer />
    </main>
  )
}

export default Main
