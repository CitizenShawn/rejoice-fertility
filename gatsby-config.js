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
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.STRAPI_API_URL || "https://leading-bird-3a9d286e5b.strapiapp.com",
        accessToken: "590dcc7fec9ad33866cb884a561a430af505743dbc2ee45453be6349bcac4c1d71eb69ad592827a2f820b42ff8c0e6acce4bd93fb63fae87079e6042e90b03e2b484158ba75e2801a23bec863bfebaa21c5f8295e200c29869cd64bf6522bd3b2cc2b21b4ca0a9d68bb0d637b2ebc528d4291949abdcb2929cd80c8ec8ccc856",
      },
    },
    {
      resolve: `gatsby-plugin-advanced-sitemap`,
      options: {
        // 1 query for each data type
        query: `
      {
          allStrapiBlog {
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
          allStrapiCategory {
            edges {
                node {
                    id
                    slug
                }
            }
        }
        allStrapiTag {
            edges {
                node {
                    id
                    slug
                }
            }
        }
        allStrapiAuthor {
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
          allStrapiBlog: {
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
          allStrapiTag: {
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
          allStrapiAuthor: {
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
          allStrapiCategory: {
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
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-KXH3QS6T",
  
        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,
  
        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },
  
        // Specify optional GTM environment details.
        //gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        //gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        dataLayerName: "dataLayer",
  
        // Name of the event that is triggered
        // on every Gatsby route change.
        //
        // Defaults to gatsby-route-change
        routeChangeEventName: "gatsby-route-change",
        // Defaults to false
        enableWebVitalsTracking: true,
        // Defaults to https://www.googletagmanager.com
        selfHostedOrigin: "https://www.googletagmanager.com",
        // Defaults to gtm.js
        selfHostedPath: "gtm.js",
      },
    },
  ],
};
