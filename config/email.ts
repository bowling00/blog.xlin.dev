export const emailConfig = {
  from: 'hi@zhangbaolin.cn',
  baseUrl:
    process.env.VERCEL_ENV === 'production'
      ? `https://zhangbaolin.cn`
      : 'http://localhost:3000',
}
