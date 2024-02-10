import './style.scss'
import useResize from 'hooks/useResize.ts'
import Tile from 'components/atoms/Tile'
import { LuArrowUpRight } from 'react-icons/lu'
import Label from 'components/atoms/Label'
import { Link } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'
import { BiGitRepoForked } from 'react-icons/bi'
import { RxEyeOpen } from 'react-icons/rx'
import useProjects from 'hooks/useProjects.ts'
import { GoArrowRight } from 'react-icons/go'
import { PATHS } from 'utils/consts.ts'
import { MAX_WIDTH } from 'utils/consts.ts'

const ProjectsSection = () => {
  const isDesktop = useResize(MAX_WIDTH.desktop)
  const projects = useProjects()

  return (
    <section id="projects" className="projects-section">
      {!isDesktop && <div className="section__header">Projects</div>}
      {projects.map((project, index) => (
        <Tile key={index} link={project.link}>
          <img src={project.img} alt={project.title} className="tile__image" />
          <div className="tile__content">
            <Link to={project.link} target="_blank" rel="noreferrer" className="tile__link">
              <h4 className="tile__title">
                {project.title} <LuArrowUpRight className="arrow-icon" />
              </h4>
            </Link>
            <p className="tile__desc">{project.desc}</p>
            <div className="tile__stats">
              {project.stars && (
                <Link to={project.repo} className="tile__stat">
                  <FaStar /> {project.stars}
                </Link>
              )}
              {project.forks && (
                <Link to={project.repo} className="tile__stat">
                  <BiGitRepoForked /> {project.forks}
                </Link>
              )}
              {project.watchers && (
                <Link to={project.repo} className="tile__stat">
                  <RxEyeOpen /> {project.watchers}
                </Link>
              )}
            </div>
            <div className="tile__tech-stack">
              {project.techStack.map((techStack, index) => (
                <Label key={index} text={techStack} />
              ))}
            </div>
          </div>
        </Tile>
      ))}
      <Link to={PATHS.archive} className="projects-section__archive">
        <span>View Full Project Archive</span> <GoArrowRight />
      </Link>
    </section>
  )
}

export default ProjectsSection
