module.exports = {
  siteMetadata: {
    title: `BlumenauJS - Blog`,
    name: `BlumenauJS`,
    siteUrl: `https://blog.blumenaujs.org`,
    description: `Comunidade JavaScript de Blumenau e Região`,
    hero: {
      heading: `Comunidade JavaScript de Blumenau`,
      maxWidth: 652,
    },
    social: [
      {
        name: `github`,
        url: `https://github.com/blumenaujs`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/blumenaujs`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/company/blumenaujs/?viewAsMember=false`,
      }
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `BlumenauJS`,
        short_name: `BlumenauJS`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
  ],
};
