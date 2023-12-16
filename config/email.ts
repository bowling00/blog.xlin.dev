export const emailConfig = {
  from: 'hi@xlin.dev',
  baseUrl:
    process.env.VERCEL_ENV === 'production'
      ? `https://xlin.dev`
      : 'http://localhost:3000',
}
