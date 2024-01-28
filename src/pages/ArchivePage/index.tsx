import './style.scss'
import { Link } from 'react-router-dom'
import { PATHS } from 'utils/consts.ts'
import { GoArrowLeft } from 'react-icons/go'
import useDocumentTitle from 'hooks/useDocumentTitle.ts'

const ArchivePage = () => {
  useDocumentTitle('Archive | Kamil Kamiński')

  return (
    <div className="archive-page">
      <Link to={PATHS.home} className="archive-page__return">
        <GoArrowLeft />
        Kamil Kamiński
      </Link>
      <h1 className="archive-page__title">All Projects</h1>
    </div>
  )
}

export default ArchivePage
