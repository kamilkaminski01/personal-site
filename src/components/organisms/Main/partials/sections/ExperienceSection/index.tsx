import './style.scss'
import Tile from 'components/atoms/Tile'
import { LuArrowUpRight } from 'react-icons/lu'
import { EXPERIENCE } from 'utils/consts.ts'
import Label from 'components/atoms/Label'
import useResize from 'hooks/useResize.ts'
import { Link } from 'react-router-dom'
import { MAX_WIDTH } from 'utils/consts.ts'
import { HiMiniLink } from 'react-icons/hi2'

const ExperienceSection = () => {
  const isNotDesktop = useResize(MAX_WIDTH.desktop)

  return (
    <section id="experience" className="experience-section">
      {!isNotDesktop && <div className="section__header">Experience</div>}
      {EXPERIENCE.map((experience, index) => (
        <Tile key={index}>
          <div className="tile__time-frame">{experience.timeFrame}</div>
          <div className="tile__content">
            <Link to={experience.link} target="_blank" rel="noreferrer" className="tile__link">
              <h4 className="tile__title">
                {experience.title} <LuArrowUpRight className="arrow-icon" />
              </h4>
            </Link>
            <p className="tile__subtitle">{experience.workType}</p>
            <p className="tile__desc">{experience.desc}</p>
            {experience.tags && (
              <div className="tile__tags">
                {experience.tags.map((tag, index) => (
                  <Link
                    to={tag.link}
                    key={index}
                    target="_blank"
                    rel="noreferrer"
                    className="tag__link">
                    <HiMiniLink className="link-icon" /> {tag.title}
                  </Link>
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
