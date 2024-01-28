import './style.scss'
import { Link } from 'react-router-dom'
import { PATHS } from 'utils/consts.ts'
import { GoArrowLeft } from 'react-icons/go'
import useDocumentTitle from 'hooks/useDocumentTitle.ts'
import { PROJECTS_ARCHIVE } from 'utils/consts.ts'
import Label from 'components/atoms/Label'

const ArchivePage = () => {
  useDocumentTitle('Archive | Kamil Kamiński')

  return (
    <div className="archive-page">
      <Link to={PATHS.home} className="archive-page__return">
        <GoArrowLeft />
        Kamil Kamiński
      </Link>
      <h1 className="archive-page__title">All Projects</h1>
      <table className="archive-page__table">
        <thead className="table__header">
          <tr className="table__header-row">
            <th className="table__header-cell">Year</th>
            <th>Project</th>
            <th>Made at</th>
            <th>Built with</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {PROJECTS_ARCHIVE.map((project, index) => (
            <tr key={index}>
              <td>{project.year}</td>
              <td>{project.project}</td>
              <td>{project.madeAt}</td>
              <td>
                {project.builtWith.map((tech, index) => (
                  <Label text={tech} key={index} />
                ))}
              </td>
              <td>{project.link}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ArchivePage
