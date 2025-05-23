const path = require('path');

/**
 *  adding import alias for most used modules
 */

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
      },
    },
  });
};

exports.createResolvers = ({ createResolvers }) => {
  createResolvers({
    StrapiBlog: {
      description_html: {
        type: "String",
        resolve(source) {
          if (typeof source.description_html === 'string') {
            console.log("description_html is a string.");
            return source.description_html;
          } else if (source.description_html && typeof source.description_html.content === 'string') {
            console.log("description_html is not a string and has content");
            return source.description_html.content;
          }
          console.log("I have no idea.");
          return "";
        },
      },
    },
  });
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  console.log("Creating custom type override for description_html");

  createTypes(`
    type StrapiBlog implements Node @dontInfer {
      description_html: String
    }
  `)

  console.log("description_html should be a string now.");
};

// These templates are only data-fetching wrappers that import components

const categoryTemplate = require.resolve('./src/templates/category-template.js');

const tagTemplate = require.resolve('./src/templates/tag-template.js');

const authorTemplate = require.resolve('./src/templates/author-template.js');

const testTemplate = require.resolve('./src/templates/post-test.js');

exports.createPages = async ({ graphql, actions, store, reporter }, { spaceId }) => {
  const { createPage } = actions;

  const categories = await graphql(`
    query CategoriesQuery {
      allStrapiCategory {
        nodes {
          slug
        }
      }
    }
  `);
  const tags = await graphql(`
    query TagsQuery {
      allStrapiTag {
        nodes {
          documentId
          slug
        }
      }
    }
  `);
  const authors = await graphql(`
    query AuthorsQuery {
      allStrapiAuthor {
        nodes {
          documentId
          slug
        }
      }
    }
  `);

  const blogs = await graphql(`
    query BlogsQuery {
      allStrapiBlog {
        nodes {
          description_html {
            data {
              internal {
                content
              }
            }
          }
          documentId
          publishedAt
          slug
        }
      }
    }
  `);

  // create post details

  blogs.data.allStrapiBlog.nodes.forEach((blog) => {
    if (blog.publishedAt) {
      createPage({
        path: `/blog/${blog.slug}/`,
        component: testTemplate,
        context: {
          documentId: blog.documentId,
          slug: blog.slug,
        },
      });
    }
  });
  //create category list page

  categories.data.allStrapiCategory.nodes.forEach((category) => {
    createPage({
      path: `/blog/category/${category.slug}/`,
      component: categoryTemplate,
      context: {
        slug: category.slug,
      },
    });
  });

  //create tag list page

  tags.data.allStrapiTag.nodes.forEach((tag) => {
    createPage({
      path: `/blog/tag/${tag.slug}/`,
      component: tagTemplate,
      context: {
        id: tag.documentId,
        slug: tag.slug,
      },
    });
  });

  //create author page

  authors.data.allStrapiAuthor.nodes.forEach((author) => {
    createPage({
      path: `/blog/author/${author.slug}/`,
      component: authorTemplate,
      context: {
        id: author.dId,
        slug: author.slug,
      },
    });
  });   
};

