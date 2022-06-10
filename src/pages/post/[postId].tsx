import axios from 'axios'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'

import { Post, StrapiApiResponse } from 'src/types'

interface PostInterface {
  post: Post
}

const Post = ({ post }: PostInterface) => {
  return (
    <div>
      {post.attributes.title}
      {post.attributes.content}
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const result = await axios.get<StrapiApiResponse<Post[]>>(
      'http://127.0.0.1:1337/api/articles'
    )
    const posts = result.data.data
    const paths = posts.map((post) => {
      return {
        params: {
          postId: post.id.toString(),
        },
      }
    })
    return {
      paths,
      fallback: false,
    }
  } catch (e) {
    return {
      paths: [],
      fallback: false,
    }
  }
}

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext) => {
  try {
    const response = await axios.get<StrapiApiResponse<Post>>(
      `http://127.0.0.1:1337/api/articles/${params?.postId}`
    )
    const post = response.data.data
    return {
      props: {
        post,
      },
    }
  } catch (e) {
    return {
      props: {
        post: undefined,
      },
    }
  }
}

export default Post
