'use client'

import { FaStar } from 'react-icons/fa'
import { BiGitRepoForked } from 'react-icons/bi'
import { RxEyeOpen } from 'react-icons/rx'
import useProjectStats from 'hooks/useProjectStats'
import { IProject } from 'models/project'

const TileProjectStats = (project: IProject) => {
  const { projectStats } = useProjectStats(project)

  if (!projectStats) return null

  const { stars, forks, watchers } = projectStats

  return (
    <div className="tile__stats">
      {stars && (
        <a href={project.repo} target="_blank" rel="noreferrer" className="tile__stat">
          <FaStar /> {stars}
        </a>
      )}
      {forks && (
        <a href={project.repo} target="_blank" rel="noreferrer" className="tile__stat">
          <BiGitRepoForked /> {forks}
        </a>
      )}
      {watchers && (
        <a href={project.repo} target="_blank" rel="noreferrer" className="tile__stat">
          <RxEyeOpen /> {watchers}
        </a>
      )}
    </div>
  )
}

export default TileProjectStats
