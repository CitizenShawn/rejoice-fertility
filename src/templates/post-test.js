import * as React from 'react';
import { graphql } from 'gatsby';
import Post from '@components/Post';
import Layout from '@components/Layout/index';
import { Seo } from '../components/Seo';

const PostPage = ({ data }) => {
  const { posts, post: strapiBlog } = data;
  const currentPost = posts.edges.filter(({ node }) => node.documentId === strapiBlog.documentId)[0];
  const { previous: previousPost, next: nextPost } = currentPost;
  return (
    <Layout>
      <Seo title={strapiBlog.title} description={strapiBlog.subtitle} />
      <Post data={strapiBlog} previousPost={previousPost} nextPost={nextPost} />
    </Layout>
  );
};

export default PostPage;

export const query = graphql`
  query ($slug: String!) {
    posts: allStrapiBlog {
      edges {
        node {
          documentId
          description_html
          excerpt
          schemas
          slug
          status
          subtitle
          title
          updatedAt
          users {
            email
            first_name
            last_name
            slug
          }
          tags {
            name
            slug
            description
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
      publishedAt
      description_html
      excerpt
      schemas
      slug
      status
      subtitle
      title
      updatedAt
      users {
        email
        first_name
        last_name
        display_name
      }
      tags {
        name
        slug
        description
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
        users {
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
