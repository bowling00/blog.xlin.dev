export function url(path = '') {
  const baseUrl =
    process.env.NODE_ENV === 'production'
      ? 'https://xlin.dev'
      : 'http://localhost:3000'

  return new URL(path, baseUrl)
}
