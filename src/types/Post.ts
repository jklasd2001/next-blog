export interface Post {
  id: string
  attributes: {
    title: string
    description: string
    content: string
    createdAt: string
    updateAt: string
    publishedAt: string
  }
}
