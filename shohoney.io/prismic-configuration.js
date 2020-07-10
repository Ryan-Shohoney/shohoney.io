import Prismic from 'prismic-javascript';

export const apiEndpoint = 'https://shohoneyio.cdn.prismic.io/api/v2';
export const accessToken = '';

// Client method to query documents from the Prismic repo
export const Client = (req = null) => (
  Prismic.client(apiEndpoint, createClientOptions(req, accessToken))
);

export const LinkResolver = doc => {
  const slug = doc.slug || '';
  return `/${slug}`;
}

export const HrefResolver = doc => {
  const slug = doc.slug || '';
  return `/${slug.replace(/-./g, x => x.toUpperCase()[1])}`;
}


const createClientOptions = (req = null, prismicAccessToken = null) => {
  const reqOption = req ? { req } : {}
  const accessTokenOption = prismicAccessToken ? { accessToken: prismicAccessToken } : {}
  return {
    ...reqOption,
    ...accessTokenOption,
  }
};