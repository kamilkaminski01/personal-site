import './style.scss'
import Tile from 'components/atoms/Tile'
import { LuArrowUpRight } from 'react-icons/lu'
import { EXPERIENCE } from 'utils/consts'
import Label from 'components/atoms/Label'
import { HiMiniLink } from 'react-icons/hi2'

const ExperienceSection = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="section__header">Experience</div>
      {EXPERIENCE.map((experience, index) => (
        <Tile key={index}>
          <div className="tile__time-frame">{experience.timeFrame}</div>
          <div className="tile__content">
            <a href={experience.link} target="_blank" rel="noreferrer" className="tile__link">
              <h4 className="tile__title">
                {experience.title} <LuArrowUpRight className="arrow-icon" />
              </h4>
            </a>
            <p className="tile__subtitle">{experience.workType}</p>
            <p className="tile__desc">{experience.desc}</p>
            {experience.tags && (
              <div className="tile__tags">
                {experience.tags.map((tag, index) => (
                  <a
                    href={tag.link}
                    key={index}
                    target="_blank"
                    rel="noreferrer"
                    className="tag__link">
                    <HiMiniLink className="link-icon" /> {tag.title}
                  </a>
                ))}
              </div>
            )}
            <div className="tile__tech-stack">
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
