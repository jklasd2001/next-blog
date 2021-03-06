const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
})

module.exports = withMDX(
  withPWA({
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    pwa: {
      dest: 'public',
      scope: '/',
      runtimeCaching,
      disable: process.env.NODE_ENV === 'development'
    },
    reactStrictMode: true, // React.StrictMode와 비슷한 것으로 개발 모드에서 잠재적인 문제를 알애내기 위한 도구입니다.
    images: {
      loader: 'default',
      domains: ["localhost"]
    }
  })
)