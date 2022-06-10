import axios from 'axios'
import { GetStaticProps } from 'next'
import Link from 'next/link'

import { Post, StrapiApiResponse } from 'src/types'

interface PostsProps {
  posts: Post[]
}

const Posts = ({ posts }: PostsProps) => {
  return (
    <div>
      {posts.map((post) => (
        <Link key={post.id} href={`/post/${post.id}`}>
          {post.attributes.title}
        </Link>
      ))}
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const result = await axios.get<StrapiApiResponse<Post[]>>(
      'http://127.0.0.1:1337/api/articles'
    )
    const posts = result.data.data
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
