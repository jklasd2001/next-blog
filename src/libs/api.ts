import axios from 'axios'
import { stringify } from 'qs'

import { StrapiApiResponse } from 'src/types'

export function getStrapiURL(path = '') {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'
  }${path}`
}

export async function fetchAPI<T>(
  path: string,
  urlParamsObject = {},
  options = {}
) {
  const mergedOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  }

  const queryString = stringify(urlParamsObject)
  const requestUrl = `${getStrapiURL(`/api${path}${queryString ?? ''}`)}`

  console.log(requestUrl)

  const response = await axios.get<StrapiApiResponse<T>>(
    requestUrl,
    mergedOptions
  )

  if (response.status !== 200) {
    console.error(response.statusText)
    throw new Error('An error occured please try again')
  }

  const data = response.data.data
  return data
}
