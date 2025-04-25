/** @jsx jsx */
import { jsx } from 'theme-ui';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/index';
import { Seo } from '../components/Seo';
import BlogCard from '../components/BlogPage/BlogCard';
import capitalize from '../helpers/capitalize';

const TagDetailsPage = ({ data }) => {
  const { posts, tag } = data;
  return (
    <Layout>
      <Seo
        title={`${tag.name} | Rejoice Fertility Center`}
        description="Knoxville Full Service Fertility, IVF, and Reproductive Surgery Center. Specializing in Infertility, Testing, and Embryo Adoption. Serving East Tennessee. "
      />
      <div>
        <section>
          <div className="content">
            {`${capitalize(tag.name)}`}
            
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

export default TagDetailsPage;

export const query = graphql`
  query ($id: String!) {
    tag: degaTag(degaId: { eq: $id }) {
      id
      name
      slug
    }
    posts: allDegaPost(filter: { tags: { elemMatch: { id: { eq: $id } } } }) {
      edges {
        node {
          published_date
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
