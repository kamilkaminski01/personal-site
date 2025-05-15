import './style.scss'
import AboutSection from 'components/molecules/AboutSection'
import ExperienceSection from 'components/molecules/ExperienceSection'
import Footer from 'components/molecules/Footer'
import ProjectsSection from 'components/molecules/ProjectsSection'
import EducationSection from 'components/molecules/EducationSection'

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
