import './style.scss'

const Footer = () => {
  const renderLink = (url: string, text: string) => (
    <a className="footer__link" href={url} target="_blank" rel="noreferrer">
      {text}
    </a>
  )

  return (
    <footer>
      Coded by myself, inspired by {renderLink('https://github.com/bchiang7', 'Brittany Chiang')}.
      Built with {renderLink('https://nextjs.org/', 'Next.js')} in TypeScript and{' '}
      {renderLink('https://sass-lang.com/', 'SASS')}, deployed with{' '}
      {renderLink('https://vercel.com/', 'Vercel')}.
    </footer>
  )
}

export default Footer
