import './style.scss'
import Link from 'next/link'
import { PATHS } from 'utils/consts'
import { GoArrowLeft } from 'react-icons/go'
import { PROJECTS_ARCHIVE } from 'utils/consts'
import Label from 'components/atoms/Label'
import { LuArrowUpRight } from 'react-icons/lu'
import { IoLogoGithub } from 'react-icons/io'

const ArchivePage = () => {
  return (
    <div className="archive-page">
      <Link href={PATHS.home} className="archive-page__return">
        <GoArrowLeft />
        Kamil Kamiński
      </Link>
      <h1 className="archive-page__title">All Projects</h1>
      <table className="archive-page__table">
        <thead className="table__header">
          <tr className="table__header-row">
            <th className="header-row__year">Year</th>
            <th className="header-row__project">Project</th>
            <th className="header-row__made-at">Made at</th>
            <th className="header-row__built-with">Built with</th>
            <th className="header-row__link">Link</th>
          </tr>
        </thead>
        <tbody>
          {PROJECTS_ARCHIVE.map((project, index) => (
            <tr key={index} className="table__row">
              <td className="cell__year">{project.year}</td>
              <td className="cell__project desktop">{project.project}</td>
              <td className="cell__project mobile">
                <a href={project.link} target="_blank" rel="noreferrer" className="project__link">
                  {project.project} <LuArrowUpRight className="arrow-icon" />
                </a>
              </td>
              <td className="cell__made-at">{project.madeAt}</td>
              <td className="cell__built-with">
                {project.builtWith.map((tech, index) => (
                  <Label text={tech} key={index} />
                ))}
              </td>
              <td className="cell__link">
                {project.link && (
                  <a
                    href={project.link}
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
                  </a>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ArchivePage
