import './style.scss'
import { Link } from 'react-router-dom'
import { PATHS } from 'utils/consts'
import { GoArrowLeft } from 'react-icons/go'
import useDocumentTitle from 'hooks/useDocumentTitle'
import { PROJECTS_ARCHIVE } from 'utils/consts'
import Label from 'components/atoms/Label'
import { LuArrowUpRight } from 'react-icons/lu'
import useResize from 'hooks/useResize'
import { MAX_WIDTH } from 'utils/consts'
import { IoLogoGithub } from 'react-icons/io'

const ArchivePage = () => {
  useDocumentTitle('Archive | Kamil Kamiński')
  const isNotDesktop = useResize(MAX_WIDTH.desktop)
  const isNotPhone = useResize(MAX_WIDTH.phone)

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
            <th>Year</th>
            <th>Project</th>
            {isNotDesktop && (
              <>
                <th>Made at</th>
                <th>Built with</th>
              </>
            )}
            {isNotPhone && <th>Link</th>}
          </tr>
        </thead>
        <tbody>
          {PROJECTS_ARCHIVE.map((project, index) => (
            <tr key={index} className="table__row">
              <td className="cell__year">{project.year}</td>
              {isNotPhone ? (
                <td className="cell__project">{project.project}</td>
              ) : (
                <td className="cell__project">
                  <Link
                    to={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="project__link">
                    {project.project} <LuArrowUpRight className="arrow-icon" />
                  </Link>
                </td>
              )}
              {isNotDesktop && (
                <>
                  <td className="cell__made_at">{project.madeAt}</td>
                  <td className="cell__built_with">
                    {project.builtWith.map((tech, index) => (
                      <Label text={tech} key={index} />
                    ))}
                  </td>
                </>
              )}
              {isNotPhone && (
                <td className="cell__link">
                  {project.link && (
                    <Link
                      to={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="link__shorthand">
                      {project.shorthandLink ? (
                        <>
                          {project.shorthandLink} <LuArrowUpRight className="arrow-icon" />
                        </>
                      ) : (
                        <span>
                          GitHub <IoLogoGithub />
                        </span>
                      )}
                    </Link>
                  )}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ArchivePage
