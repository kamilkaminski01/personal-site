import './style.scss'
import Link from 'next/link'
import { PATHS } from 'utils/consts'

const TitleSection = () => {
  return (
    <section className="title-section">
      <h1 className="title-section__title">
        <Link href={PATHS.home}>Kamil Kamiński</Link>
      </h1>
      <h2 className="title-section__subtitle">Software Engineer at InPost</h2>
      <p className="title-section__desc">Passionate about creating robust web applications.</p>
    </section>
  )
}

export default TitleSection
