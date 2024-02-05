import './style.scss'
import useResize from 'hooks/useResize.ts'
import { EDUCATION, MAX_WIDTH } from 'utils/consts.ts'
import Tile from 'components/atoms/Tile'
import { Link } from 'react-router-dom'
import { LuArrowUpRight } from 'react-icons/lu'

const EducationSection = () => {
  const isDesktop = useResize(MAX_WIDTH.desktop)

  return (
    <section id="education" className="education-section">
      {!isDesktop && <div className="education-section__header">Education</div>}
      {EDUCATION.map((education, index) => (
        <Tile key={index} className="education-section__tile">
          <div className="education__time-frame">{education.timeFrame}</div>
          <div className="education__content">
            <Link to={education.link} target="_blank" rel="noreferrer" className="education__link">
              <h4 className="education__title">
                {education.title} <LuArrowUpRight className="arrow-icon" />
              </h4>
            </Link>
            <p className="education__degree">{education.degree}</p>
          </div>
        </Tile>
      ))}
    </section>
  )
}

export default EducationSection
