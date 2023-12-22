/** @jsx jsx */
import { jsx } from 'theme-ui';
import { graphql } from 'gatsby';
import * as React from 'react';
import Layout from '../components/Layout/index';
import { Seo } from '../components/Seo';
import BlogCard from '../components/BlogPage/BlogCard';
import capitalize from '../helpers/capitalize';

const UserDetailsPage = ({ data }) => {
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
            {user.description && (
              <p
                sx={{
                  variant: 'text.normal',
                }}
              >
                {user.description}
              </p>
            )}
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
    user: degaUser(degaId: { eq: $id }) {
      description
      id
      first_name
      last_name
      display_name
      slug
    }
    posts: allDegaPost(filter: { users: { elemMatch: { id: { eq: $id } } } }) {
      edges {
        node {
          published_date
          description
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
            description
          }
          medium {
            alt_text
            id
            url
            dimensions
          }
          categories {
            description
            created_at
            id
            name
            slug
          }
        }
        next {
          slug
          title
          published_date
          medium {
            alt_text
            id
            url
            dimensions
          }
        }
        previous {
          slug
          title
          published_date
          medium {
            alt_text
            id
            url
            dimensions
          }
        }
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
          dimensions
          alt_text
          url
        }
      }
    }
  }
`;
