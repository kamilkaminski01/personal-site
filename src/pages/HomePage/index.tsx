import './style.scss'
import Header from 'components/organisms/Header'
import Main from 'components/organisms/Main'
import useDocumentTitle from 'hooks/useDocumentTitle.ts'

const HomePage = () => {
  useDocumentTitle('Kamil Kamiński')

  return (
    <div className="home-page">
      <Header />
      <Main />
    </div>
  )
}

export default HomePage
