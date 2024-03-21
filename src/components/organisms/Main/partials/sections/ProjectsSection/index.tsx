import './style.scss'
import useResize from 'hooks/useResize'
import Tile from 'components/atoms/Tile'
import { LuArrowUpRight } from 'react-icons/lu'
import Label from 'components/atoms/Label'
import { Link } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'
import { BiGitRepoForked } from 'react-icons/bi'
import { RxEyeOpen } from 'react-icons/rx'
import useGitHubStats from 'hooks/useGitHubStats'
import { GoArrowRight } from 'react-icons/go'
import { PATHS, PROJECTS, MAX_WIDTH } from 'utils/consts'

const ProjectsSection = () => {
  const isDesktop = useResize(MAX_WIDTH.desktop)
  const { projectsGitHubStats } = useGitHubStats()

  return (
    <>
      <section id="projects" className="projects-section">
        {!isDesktop && <div className="section__header">Projects</div>}
        {PROJECTS.map((project, index) => (
          <Tile key={index}>
            <img src={project.img} alt={project.title} className="tile__image" />
            <div className="tile__content">
              <Link to={project.link} target="_blank" rel="noreferrer" className="tile__link">
                <h4 className="tile__title">
                  {project.title} <LuArrowUpRight className="arrow-icon" />
                </h4>
              </Link>
              <p className="tile__desc">{project.desc}</p>
              <div className="tile__stats">
                {projectsGitHubStats[index] && projectsGitHubStats[index].stars && (
                  <Link to={project.repo} className="tile__stat">
                    <FaStar /> {projectsGitHubStats[index].stars}
                  </Link>
                )}
                {projectsGitHubStats[index] && projectsGitHubStats[index].forks && (
                  <Link to={project.repo} className="tile__stat">
                    <BiGitRepoForked /> {projectsGitHubStats[index].forks}
                  </Link>
                )}
                {projectsGitHubStats[index] && projectsGitHubStats[index].watchers && (
                  <Link to={project.repo} className="tile__stat">
                    <RxEyeOpen /> {projectsGitHubStats[index].watchers}
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
      </section>
      <Link to={PATHS.archive} className="projects__archive">
        <span>View Full Project Archive</span> <GoArrowRight />
      </Link>
    </>
  )
}

export default ProjectsSection
