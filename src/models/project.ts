import { StaticImageData } from 'next/image'

export interface IProject {
  api?: string
  img: StaticImageData
  link: string
  repo: string
  title: string
  desc: string
  techStack: string[]
}
