import { useEffect, useState } from 'react'
import { IProjectStats } from 'models/projectStats'
import { IProject } from 'models/project'

const useProjectStats = (project: IProject) => {
  const [projectStats, setProjectStats] = useState<IProjectStats | null>(null)

  useEffect(() => {
    if (!project.api) return

    const fetchProjectStats = async () => {
      try {
        const response = await fetch(project.api!)
        const data = await response.json()
        setProjectStats({
          repo: project.repo,
          stars: data.stargazers_count || null,
          forks: data.forks || null,
          watchers: data.watchers_count || null
        })
      } catch {
        setProjectStats({ repo: project.repo, stars: null, forks: null, watchers: null })
      }
    }

    fetchProjectStats()
  }, [project.api, project.repo])

  return { projectStats }
}

export default useProjectStats
