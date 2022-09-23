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
  speaker: string
  date: string
  youtube: string
  description: string
  slides?: string
  repository?: string
}

export type PostType = {
  slug: string
  title: string
  date: string
  coverImage: string
  author: string
  excerpt: string
  ogImage: {
    url: string
  }
  content: string
}

export default PostType