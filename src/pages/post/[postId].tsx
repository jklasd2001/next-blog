import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'

import { fetchAPI } from 'src/libs'
import { Post } from 'src/types'
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
        {/* {DateTime.fromISO(post.attributes.createdAt).toFormat('yyyy-MM-dd')} */}
      </div>

      <article
        className="prose"
        dangerouslySetInnerHTML={{ __html: post.attributes.content }}
      />
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const posts = await fetchAPI<Post[]>('/articles')
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
    const post = await fetchAPI<Post>(`/articles/${params?.postId}`)
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
