/** @jsx jsx */
import { jsx } from 'theme-ui';
import { graphql } from 'gatsby';
import * as React from 'react';
import Layout from '../components/Layout/index';
import { Seo } from '../components/Seo';
import BlogCard from '../components/BlogPage/BlogCard';
import capitalize from '../helpers/capitalize';

const UserDetailsPage = ({ data }) => {
  console.log("Building Authors");
  const { posts, user } = data;
  return (
    <Layout>
      <Seo
        title={`${user.display_name || user.first_name} | Rejoice Fertility Center`}
        description="Knoxville Full Service Fertility, IVF, and Reproductive Surgery Center. Specializing in Infertility, Testing, and Embryo Adoption. Serving East Tennessee. "
      />
      <div>
        <section>
          <div className="content">
            {`Posts by ${capitalize(user.display_name)}`}
            
          </div>
        </section>
        <section>
          <div className="content">
            <div
              sx={{
                display: 'flex',
                gap: '1.5rem',
                flexWrap: 'wrap',
                justifyContent: 'flex-start',
              }}
            >
              {posts.edges.map(({ node: post }) => (
                <BlogCard key={post.id} data={post} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default UserDetailsPage;

export const query = graphql`
  query ($id: String!) {
    user: strapiAuthor(documentId: { eq: $id }) {
      documentId
      first_name
      last_name
      display_name
      slug
    }
    posts: allStrapiBlog(filter: { authors: { elemMatch: { id: { eq: $id } } } }) {
      edges {
        node {
          publishedAt
          excerpt
          slug
          subtitle
          title
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
          slug
          title
          publishedAt
          medium {
            url
          }
        }
        previous {
          slug
          title
          publishedAt
          medium {
            url
          }
        }
      }
    }
    recentPosts: allStrapiBlog(
      sort: { fields: publishedAt, order: DESC }
      limit: 6
    ) {
      nodes {
        publishedAt
        title
        excerpt
        slug
        authors {
          display_name
          slug
        }
        publishedAt
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
