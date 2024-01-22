import './style.scss'
import { Link } from 'react-router-dom'
import { PATHS } from 'utils/consts.ts'

const TitleSection = () => {
  return (
    <section className="title-section">
      <h1 className="title-section__title">
        <Link to={PATHS.home}>Kamil Kamiński</Link>
      </h1>
      <h2 className="title-section__subtitle">Software Developer at Netstation</h2>
      <p className="title-section__desc">Passionate about creating robust web applications.</p>
    </section>
  )
}

export default TitleSection
