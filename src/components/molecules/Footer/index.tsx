import './style.scss'

const Footer = () => {
  const renderLink = (url: string, text: string) => (
    <a className="footer__link" href={url} target="_blank" rel="noreferrer">
      {text}
    </a>
  )

  return (
    <footer>
      Coded by myself in {renderLink('https://www.jetbrains.com/pycharm/', 'PyCharm')}, inspired by{' '}
      {renderLink('https://github.com/bchiang7', 'Brittany Chiang')}. Built with{' '}
      {renderLink('https://react.dev/', 'React.js')} in TypeScript and{' '}
      {renderLink('https://sass-lang.com/', 'SASS')}, deployed with{' '}
      {renderLink('https://pages.github.com/', 'GitHub Pages')}.
    </footer>
  )
}

export default Footer
