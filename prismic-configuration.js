import Prismic from '@prismicio/client'

export const apiEndpoint = 'https://miniatureblog.cdn.prismic.io/api/v2'
export const accessToken = 'MC5ZREczWXhVQUFNbVY3aXJQ.Ke-_ve-_ve-_vRzvv70677-9BVA177-977-977-9Q--_vUQVVBcy77-9LyFS77-9fX3vv70Y77-9ZA'

// Client method to query documents from the Prismic repo
export const Client = (req = null) => (
  Prismic.client(apiEndpoint, createClientOptions(req, accessToken))
)

const createClientOptions = (req = null, prismicAccessToken = null) => {
  const reqOption = req ? { req } : {}
  const accessTokenOption = prismicAccessToken ? { accessToken: prismicAccessToken } : {}
  return {
    ...reqOption,
    ...accessTokenOption,
  }
}
