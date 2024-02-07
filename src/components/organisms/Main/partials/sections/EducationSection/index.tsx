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
      {!isDesktop && <div className="section__header">Education</div>}
      {EDUCATION.map((education, index) => (
        <Tile key={index}>
          <div className="tile__time-frame">{education.timeFrame}</div>
          <div className="tile__content">
            <Link to={education.link} target="_blank" rel="noreferrer" className="tile__link">
              <h4 className="tile__title">
                {education.title} <LuArrowUpRight className="arrow-icon" />
              </h4>
            </Link>
            <p className="tile__subtitle">{education.degree}</p>
          </div>
        </Tile>
      ))}
    </section>
  )
}

export default EducationSection
