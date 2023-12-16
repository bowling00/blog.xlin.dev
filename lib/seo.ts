export const seo = {
  title: '张保林',
  description:
    '我叫张保林，一名开发者，一个积极向上的年轻人～',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://xlin.dev'
      : 'http://localhost:3000'
  ),
} as const
