export const seo = {
  title: 'fielding | 开发者、设计师、细节控、创始人',
  description:
    '我叫 fielding，一名开发者，一个积极向上的年轻人～',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://xlin.dev'
      : 'http://localhost:3000'
  ),
} as const
