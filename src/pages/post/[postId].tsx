import axios from 'axios'
import { DateTime } from 'luxon'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'

import { Post, StrapiApiResponse } from 'src/types'
interface PostInterface {
  post: Post
}

const Post = ({ post }: PostInterface) => {
  return (
    <div>
      <div className="mb-6 mt-12 text-2xl font-semibold">
        {post.attributes.title}
      </div>

      <div className="mb-6 text-xl">
        {DateTime.fromISO(post.attributes.createdAt).toFormat('yyyy-MM-dd')}
      </div>

      <article className="prose">{post.attributes.content}</article>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const result = await axios.get<StrapiApiResponse<Post[]>>(
      'https://boiling-shore-98845.herokuapp.com/api/articles'
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
      `https://boiling-shore-98845.herokuapp.com/api/articles/${params?.postId}`
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
