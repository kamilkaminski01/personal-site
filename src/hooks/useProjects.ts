import { useEffect, useMemo, useState } from 'react'
import { PROJECTS } from 'utils/consts.ts'
import { IProject } from 'models/project.ts'

const useProjects = () => {
  const [projectsWithStats, setProjectsWithStats] = useState<IProject[]>([])

  useEffect(() => {
    const fetchGithubStats = async () => {
      const updatedProjects = await Promise.all(
        PROJECTS.map(async (project) => {
          try {
            const response = await fetch(project.api)
            const data = await response.json()
            return {
              ...project,
              stars: data.stargazers_count || null,
              forks: data.forks || null,
              watchers: data.watchers_count || null
            }
          } catch (error) {
            console.error(`Error fetching GitHub stats for ${project.title}`, error)
            return project
          }
        })
      )
      setProjectsWithStats(updatedProjects)
    }

    fetchGithubStats()
  }, [])

  return useMemo(() => projectsWithStats, [projectsWithStats])
}

export default useProjects
