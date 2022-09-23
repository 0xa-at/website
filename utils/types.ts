export type AuthorType = {
  id: string
  name: string
  image?: string
  description: string
  github?: string
  twitter?: string
}

export type TalkType = {
  id: string
  title: string
  date: string
  speaker: string | AuthorType
  youtube: string
  description: string
  slides?: string
  repository?: string
}

export type PostType = {
  id: string
  title: string
  date: string
  author: string | AuthorType
  content: string
}

export default PostType