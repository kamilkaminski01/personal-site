import './style.scss'
import Tile from 'components/atoms/Tile'
import { LuArrowUpRight } from 'react-icons/lu'
import Label from 'components/atoms/Label'
import { GoArrowRight } from 'react-icons/go'
import { PATHS, PROJECTS } from 'utils/consts'
import Link from 'next/link'
import Image from 'next/image'
import TileProjectStats from 'components/atoms/TileProjectStats'

const ProjectsSection = () => {
  return (
    <>
      <section id="projects" className="projects-section">
        <div className="section__header">Projects</div>
        {PROJECTS.map((project, index) => (
          <Tile key={index}>
            <Image src={project.img} alt={project.title} className="tile__image" />
            <div className="tile__content">
              <a href={project.link} target="_blank" rel="noreferrer" className="tile__link">
                <h4 className="tile__title">
                  {project.title} <LuArrowUpRight className="arrow-icon" />
                </h4>
              </a>
              <p className="tile__desc">{project.desc}</p>
              {project.api && <TileProjectStats {...project} />}
              <div className="tile__tech-stack">
                {project.techStack.map((techStack, index) => (
                  <Label key={index} text={techStack} />
                ))}
              </div>
            </div>
          </Tile>
        ))}
      </section>
      <Link href={PATHS.archive} className="projects__archive">
        <span>View Full Project Archive</span> <GoArrowRight />
      </Link>
    </>
  )
}

export default ProjectsSection
