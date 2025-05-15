import './style.scss'
import { EDUCATION } from 'utils/consts'
import Tile from 'components/atoms/Tile'
import { LuArrowUpRight } from 'react-icons/lu'

const EducationSection = () => {
  return (
    <section id="education" className="education-section">
      <div className="section__header">Education</div>
      {EDUCATION.map((education, index) => (
        <Tile key={index}>
          <div className="tile__time-frame">{education.timeFrame}</div>
          <div className="tile__content">
            <a href={education.link} target="_blank" rel="noreferrer" className="tile__link">
              <h4 className="tile__title">
                {education.title} <LuArrowUpRight className="arrow-icon" />
              </h4>
            </a>
            <p className="tile__subtitle">{education.degree}</p>
          </div>
        </Tile>
      ))}
    </section>
  )
}

export default EducationSection
