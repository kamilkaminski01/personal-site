import './style.scss'

const AboutSection = () => {
  const renderLink = (url: string, text: string) => (
    <a className="paragraph__link" href={url} target="_blank" rel="noreferrer">
      {text}
    </a>
  )

  return (
    <section id="about" className="about-section">
      <p className="about-section__paragraph">
        In 2020, my journey with software development began, sparked by a fascination with Python.
        Fast-forward to today, and I&apos;ve had the privilege of building software for a{' '}
        {renderLink('https://www.leadin.pl/', 'start-up')}, a{' '}
        {renderLink('https://projekty.muratordom.pl/', 'house design agency')}, and big{' '}
        {renderLink('https://www.grupazpr.pl/', 'media brands')}.
      </p>
      <p className="about-section__paragraph">
        My main focus these days is building products at{' '}
        {renderLink('https://netstation.pl/', 'Netstation')}. In my free time I&apos;ve created over
        5 full stack projects, developing my skills in Django, React, SASS, and AWS services.
      </p>
      <p className="about-section__paragraph">
        Beyond the 9-to-5, I like diving into the latest trends and technologies to stay ahead of
        the curve.
      </p>
    </section>
  )
}

export default AboutSection
