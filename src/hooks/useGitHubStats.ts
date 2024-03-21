import { useEffect, useState } from 'react'
import { PROJECTS } from 'utils/consts'
import { IGitHubStats } from 'models/githubStats'

const useGitHubStats = () => {
  const [projectsGitHubStats, setProjectsGitHubStats] = useState<IGitHubStats[]>([])

  const fetchGithubStats = async () => {
    const projectsStats = await Promise.all(
      PROJECTS.map(async (project) => {
        try {
          const response = await fetch(project.api)
          const data = await response.json()
          return {
            repo: project.repo,
            stars: data.stargazers_count || null,
            forks: data.forks || null,
            watchers: data.watchers_count || null
          }
        } catch {
          return { repo: project.repo, stars: null, forks: null, watchers: null }
        }
      })
    )
    setProjectsGitHubStats(projectsStats)
  }

  useEffect(() => {
    fetchGithubStats()
  }, [])

  return { projectsGitHubStats }
}

export default useGitHubStats
