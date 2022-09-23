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

export type TalkType = {
  id: string
  title: string
  date: Date
  speaker: string | AuthorType
  youtube: string
  description: string
  slides?: string
  repository?: string
}

export type PostType = {
  id: string
  title: string
  date: Date
  author: string | AuthorType
  content: string
}

export default PostType