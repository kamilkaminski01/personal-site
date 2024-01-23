import './style.scss'
import { EXTERNAL_SITES } from 'utils/consts.ts'
import useDesktop from 'hooks/useDesktop.ts'

const AboutSection = () => {
  const isDesktop = useDesktop()

  const renderLink = (url: string, text: string) => (
    <a className="paragraph__link" href={url} target="_blank" rel="noreferrer">
      {text}
    </a>
  )

  return (
    <section id="about" className="about-section">
      {!isDesktop && <div className="about-section__header">About</div>}
      <p className="about-section__paragraph">
        In 2020, my journey with software development began, sparked by a fascination with Python.
        Fast-forward to today, and I&apos;ve had the privilege of building software for a{' '}
        {renderLink(EXTERNAL_SITES.leadin, 'start-up')}, a{' '}
        {renderLink(EXTERNAL_SITES.murator, 'house design agency')}, and big{' '}
        {renderLink(EXTERNAL_SITES.grupazpr, 'media brands')}.
      </p>
      <p className="about-section__paragraph">
        My main focus these days is building products at{' '}
        {renderLink(EXTERNAL_SITES.netstation, 'Netstation')}. In my free time I&apos;ve created
        over 5 full stack projects, developing my skills in Django, React, SASS, and AWS services.
      </p>
      <p className="about-section__paragraph">
        Beyond the 9-to-5, I like diving into the latest trends and technologies to stay ahead of
        the curve.
      </p>
    </section>
  )
}

export default AboutSection
