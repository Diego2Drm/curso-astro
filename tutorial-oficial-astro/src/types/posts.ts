export interface Posts {
  frontmatter: {
    title: string,
    author: string,
    description: string,
    image: {
      url: string,
      alt: string,
    },
    pubDate: string
    tags: string[],
  },
  url: string,
}