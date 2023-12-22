require('dotenv').config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: `Southeastern Fertility`,
    description: `Center for Fertility and Reproductive Surgery.`,
    author: `@chakradhar2711`,
    siteUrl: process.env.SITE_URL,
    image: '/images/og-image.png',
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
        ignore: ['**/.*'],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-theme-ui`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     display: `minimal-ui`,
    //     icon: `static/images/gatsby-icon.png`, // This path is relative to the root of the site.
    //   },
    // },
    {
      resolve: `@factly/gatsby-source-dega`,
      options: {
        spaceId: process.env.SPACE_ID,
        accessToken: process.env.ACCESS_TOKEN,
        uri: process.env.API_ENDPOINT,
      },
    },
    {
      resolve: `gatsby-plugin-advanced-sitemap`,
      options: {
        // 1 query for each data type
        query: `
      {
          allDegaPost {
              edges {
                  node {
                      id
                      slug
                      updated_at
                      medium {
                        url
                      }
                  }
              }
          }
          allDegaCategory {
            edges {
                node {
                    id
                    slug
                }
            }
        }
        allDegaTag {
            edges {
                node {
                    id
                    slug
                }
            }
        }
        allDegaUser {
            edges {
                  node {
                      id
                      slug
                  }
              }
          }
      }`,
        mapping: {
          // Each data type can be mapped to a predefined sitemap
          // Routes can be grouped in one of: posts, tags, authors, pages, or a custom name
          // The default sitemap - if none is passed - will be pages
          allDegaPost: {
            sitemap: `post`,
            // Add a query level prefix to slugs, Don't get confused with global path prefix from Gatsby
            // This will add a prefix to this particular sitemap only
            // Custom Serializer
            // serializer: (edges) => {
            //   return edges.map(({ node }) => {
            //     console.log({ node });
            //   });
            // },
            serializer: (edges) => {
              const siteMapEntries = [];
              edges.forEach((edge) => {
                edge.node.slug = '/blog/' + edge.node.slug;
                siteMapEntries.push(edge);
              });
              return siteMapEntries;
            },
          },
          allDegaTag: {
            sitemap: `tag`,
            serializer: (edges) => {
              const siteMapEntries = [];
              edges.forEach((edge) => {
                edge.node.slug = '/blog/tag/' + edge.node.slug;
                siteMapEntries.push(edge);
              });
              return siteMapEntries;
            },
          },
          allDegaUser: {
            sitemap: `author`,
            serializer: (edges) => {
              const siteMapEntries = [];
              edges.forEach((edge) => {
                edge.node.slug = '/blog/author/' + edge.node.slug;
                siteMapEntries.push(edge);
              });
              return siteMapEntries;
            },
          },
          allDegaCategory: {
            sitemap: `category`,
            serializer: (edges) => {
              const siteMapEntries = [];
              edges.forEach((edge) => {
                edge.node.slug = '/blog/category/' + edge.node.slug;
                siteMapEntries.push(edge);
              });
              return siteMapEntries;
            },
          },
        },

        exclude: [
          `/dev-404-page`,
          `/404`,
          `/404.html`,
          `/offline-plugin-app-shell-fallback`, // you can also pass valid RegExp to exclude internal tags for example
        ],
        createLinkInHead: true, // optional: create a link in the `<head>` of your site
        addUncaughtPages: true, // optional: will fill up pages that are not caught by queries and mapping and list them under `sitemap-pages.xml`
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [process.env.TRACKING_ID],
        gTagConfig: {
          send_page_view: true,
        },
      },
    },
  ],
};
