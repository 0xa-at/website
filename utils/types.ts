import { IconDefinition } from "@fortawesome/fontawesome-svg-core"

export type AuthorType = {
  id: string
  name: string
  image?: string
  description: string
  github?: string
  twitter?: string
  website?: string
  linkedin?: string
}

export type PostType = {
  id: string
  title: string
  date: Date
  author: string | AuthorType
  content: string
}

export type SponsorType = {
  name: string
  link: string
  logo: string | undefined
  invertLogo?: boolean
}

export type ScheduleType = {
  title: string
  description: string
  speaker: string | AuthorType
}

export type EventType = {
  id: string
  title: string
  date: string
  link: string
  image: string
  hidden?: boolean

  schedule: ScheduleType[]
  sponsors: SponsorType[]
  location: string
  description: string
  register_link: string
  livestream_link?: string

  // Added after the event
  recording: string
  pictures: string[]
}


export type LinktreeLink = {
    href: string | string[], // array = parts of the link that will be joined by "/" for obfuscation
    title: string,
    icon: IconDefinition,
}

export default PostType