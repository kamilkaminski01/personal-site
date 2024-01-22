import './style.scss'
import Tile from 'components/atoms/Tile'
import { LuArrowUpRight } from 'react-icons/lu'
import { EXPERIENCE } from 'utils/consts.ts'
import Label from 'components/atoms/Label'

const ExperienceSection = () => {
  return (
    <section id="experience" className="experience-section">
      {EXPERIENCE.map((experience, index) => (
        <Tile key={index} link={experience.link} className="experience-section__tile">
          <div className="experience__time-frame">{experience.timeFrame}</div>
          <div className="experience__content">
            <h4 className="experience__title">
              {experience.title} <LuArrowUpRight className="arrow-icon" />
            </h4>
            <p className="experience__desc">{experience.desc}</p>
            <div className="experience__tech-stack">
              {experience.techStack.map((techStack, index) => (
                <Label key={index} text={techStack} />
              ))}
            </div>
          </div>
        </Tile>
      ))}
    </section>
  )
}

export default ExperienceSection
