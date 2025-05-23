import * as React from 'react';
import { graphql } from 'gatsby';
import PostTest from '@components/PostTest';
import Layout from '@components/Layout/index';
import { Seo } from '../components/Seo';

const PostPage = ({ data }) => {
  const { posts, post: strapiBlog } = data;
  const currentPost = posts.edges.filter(({ node }) => node.documentId === strapiBlog.documentId)[0];
  const { previous: previousPost, next: nextPost } = currentPost;
  return (
    <Layout>
      <Seo title={strapiBlog.title} description={strapiBlog.subtitle} />
      <PostTest datam={strapiBlog} previousPost={previousPost} nextPost={nextPost} />
    </Layout>
  );
};

export default PostPage;

export const query = graphql`
  query ($slug: String!) {
    posts: allStrapiBlog {
      edges {
        node {
          description_html {
            data {
              internal {
                content
              }
            }
          }
          documentId
          excerpt
          slug
          subtitle
          title
          updatedAt
          authors {
            email
            first_name
            last_name
            slug
          }
          tags {
            name
            slug
          }
          medium {
            url
          }
          categories {
            name
            slug
          }
        }
        next {
          documentId
          slug
          title
          publishedAt
          medium {
            url
          }
        }
        previous {
          documentId
          slug
          title
          publishedAt
          medium {
            url
          }
        }
      }
    }
    post: strapiBlog(slug: { eq: $slug }) {
      documentId
      description_html {
            data {
              internal {
                content
              }
            }
          }
      publishedAt
      excerpt
      slug
      subtitle
      title
      updatedAt
      authors {
        email
        first_name
        last_name
        display_name
      }
      tags {
        name
        slug        
      }
      medium {
        url
      }
      categories {
        name
        slug
      }
    }
    recentPosts: allStrapiBlog(
      sort: { fields: publishedAt, order: DESC }
      limit: 6
    ) {
      nodes {
        documentId
        publishedAt
        title
        excerpt
        slug
        authors {
          display_name
          slug
        }
        published_date
        categories {
          name
          slug
        }
        medium {
          url
        }
      }
    }
  }
`;
