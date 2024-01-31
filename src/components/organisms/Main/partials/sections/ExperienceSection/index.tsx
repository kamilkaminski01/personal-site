import './style.scss'
import Tile from 'components/atoms/Tile'
import { LuArrowUpRight } from 'react-icons/lu'
import { EXPERIENCE } from 'utils/consts.ts'
import Label from 'components/atoms/Label'
import useResize from 'hooks/useResize.ts'
import { Link } from 'react-router-dom'
import { MAX_WIDTH } from 'utils/consts.ts'

const ExperienceSection = () => {
  const isDesktop = useResize(MAX_WIDTH.desktop)

  return (
    <section id="experience" className="experience-section">
      {!isDesktop && <div className="experience-section__header">Experience</div>}
      {EXPERIENCE.map((experience, index) => (
        <Tile key={index} className="experience-section__tile">
          <div className="experience__time-frame">{experience.timeFrame}</div>
          <div className="experience__content">
            <Link
              to={experience.link}
              target="_blank"
              rel="noreferrer"
              className="experience__link">
              <h4 className="experience__title">
                {experience.title} <LuArrowUpRight className="arrow-icon" />
              </h4>
            </Link>
            <p className="experience__work-type">{experience.workType}</p>
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
