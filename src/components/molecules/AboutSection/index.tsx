import './style.scss'
import { EXTERNAL_SITES } from 'utils/consts'

const AboutSection = () => {
  const renderLink = (url: string, text: string) => (
    <a className="paragraph__link" href={url} target="_blank" rel="noreferrer">
      {text}
    </a>
  )

  return (
    <section id="about" className="about-section">
      <div className="about-section__header">About</div>
      <p className="about-section__paragraph">
        In 2020, my journey with software development began, sparked by a fascination with Python.
        Fast-forward to today, and I&apos;ve had the privilege of building software for a{' '}
        {renderLink(EXTERNAL_SITES.leadin, 'start-up')}, a{' '}
        {renderLink(EXTERNAL_SITES.murator, 'house design agency')}, big{' '}
        {renderLink(EXTERNAL_SITES.grupazpr, 'media brands')} and the{' '}
        {renderLink(EXTERNAL_SITES.inpost, 'leading logistics company')} in Europe.
      </p>
      <p className="about-section__paragraph">
        My main focus these days is building products for employees at{' '}
        {renderLink(EXTERNAL_SITES.inpost, 'InPost')}. In my free time I create full stack projects
        developing my skills in Flask, FastAPI, React, and DevOps methodologies.
      </p>
      <p className="about-section__paragraph">
        Apart from my regular work hours, I enjoy keeping up with the newest trends and technologies
        to stay up-to-date. I&apos;m also in the final stages of completing my master&apos;s degree
        in computer science.
      </p>
    </section>
  )
}

export default AboutSection
