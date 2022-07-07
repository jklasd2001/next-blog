import { GetStaticProps } from 'next'
import Link from 'next/link'

import { fetchAPI } from 'src/libs'
import { Post } from 'src/types'

interface PostsProps {
  posts: Post[]
}

const Posts = ({ posts }: PostsProps) => {
  return (
    <div>
      {posts.map((post) => (
        <Link key={post.id} href={`/post/${post.id}`}>
          <div>{post.attributes.title}</div>
        </Link>
      ))}
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const posts = await fetchAPI<Post[]>('/articles')
    return {
      props: {
        posts,
      },
    }
  } catch (e) {
    return {
      props: {
        posts: [],
      },
    }
  }
}

export default Posts
