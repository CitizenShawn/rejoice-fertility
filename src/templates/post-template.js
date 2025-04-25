import * as React from 'react';
import { graphql } from 'gatsby';
import Post from '@components/Post';
import Layout from '@components/Layout/index';
import { Seo } from '../components/Seo';

const PostPage = ({ data }) => {
  const { posts, post: degaPost } = data;
  const currentPost = posts.edges.filter(({ node }) => node.id === degaPost.id)[0];
  const { previous: previousPost, next: nextPost } = currentPost;
  return (
    <Layout>
      <Seo title={degaPost.title} description={degaPost.subtitle} />
      <Post data={degaPost} previousPost={previousPost} nextPost={nextPost} />
    </Layout>
  );
};

export default PostPage;

export const query = graphql`
  query ($slug: String!) {
    posts: allDegaPost {
      edges {
        node {
          published_date
          description
          description_html
          excerpt
          id
          schemas
          slug
          status
          subtitle
          title
          updated_at
          users {
            email
            first_name
            last_name
            id
            slug
          }
          tags {
            id
            name
            slug
          }
          medium {
            id
            url
          }
          categories {
            created_at
            id
            name
            slug
            medium {
              id
              url
            }
          }
        }
        next {
          slug
          title
          published_date
          medium {
            id
            url
          }
        }
        previous {
          slug
          title
          published_date
          medium {
            id
            url
          }
        }
      }
    }
    post: degaPost(slug: { eq: $slug }) {
      published_date
      description
      description_html
      excerpt
      id
      schemas
      slug
      status
      subtitle
      title
      updated_at
      users {
        email
        first_name
        last_name
        display_name
        id
      }
      tags {
        id
        name
        slug
      }
      medium {
        id
        url
      }
      categories {
        created_at
        id
        name
        slug
      }
    }
    recentPosts: allDegaPost(
      sort: { fields: created_at, order: DESC }
      filter: { format: { slug: { eq: "article" } } }
      limit: 6
    ) {
      nodes {
        created_at
        title
        excerpt
        slug
        users {
          display_name
          slug
          id
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
