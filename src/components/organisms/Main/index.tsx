import './style.scss'
import AboutSection from './partials/sections/AboutSection'
import ExperienceSection from './partials/sections/ExperienceSection'
import Footer from 'components/molecules/Footer'
import ProjectsSection from './partials/sections/ProjectsSection'
import EducationSection from './partials/sections/EducationSection'

const Main = () => {
  return (
    <main>
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <Footer />
    </main>
  )
}

export default Main
