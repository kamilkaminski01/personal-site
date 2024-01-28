import './style.scss'
import useDesktop from 'hooks/useDesktop.ts'
import Tile from 'components/atoms/Tile'
import { LuArrowUpRight } from 'react-icons/lu'
import Label from 'components/atoms/Label'
import { Link } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'
import { BiGitRepoForked } from 'react-icons/bi'
import { RxEyeOpen } from 'react-icons/rx'
import useProjects from 'hooks/useProjects.ts'

const ProjectsSection = () => {
  const isDesktop = useDesktop()
  const projects = useProjects()

  return (
    <section id="projects" className="projects-section">
      {!isDesktop && <div className="projects-section__header">Projects</div>}
      {projects.map((project, index) => (
        <Tile key={index} className="projects-section__tile">
          <img src={project.img} alt={project.title} className="project__image" />
          <div className="project__content">
            <Link to={project.link} target="_blank" rel="noreferrer" className="project__link">
              <h4 className="project__title">
                {project.title} <LuArrowUpRight className="arrow-icon" />
              </h4>
            </Link>
            <p className="project__desc">{project.desc}</p>
            <div className="project__stats">
              {project.stars && (
                <Link to={project.repo} className="project__stat">
                  <FaStar /> {project.stars}
                </Link>
              )}
              {project.forks && (
                <Link to={project.repo} className="project__stat">
                  <BiGitRepoForked /> {project.forks}
                </Link>
              )}
              {project.watchers && (
                <Link to={project.repo} className="project__stat">
                  <RxEyeOpen /> {project.watchers}
                </Link>
              )}
            </div>
            <div className="project__tech-stack">
              {project.techStack.map((techStack, index) => (
                <Label key={index} text={techStack} />
              ))}
            </div>
          </div>
        </Tile>
      ))}
    </section>
  )
}

export default ProjectsSection
