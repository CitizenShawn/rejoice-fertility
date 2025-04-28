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
  query ($slug: String!) {
    tag: StrapiTag(slug: { eq: $slug }) {
      id
      name
      slug
    }
    posts: allStrapiBlog(filter: { tags: { elemMatch: { slug: { eq: $slug } } } }) {
      edges {
        node {
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
            slug
          }
          tags {
            documentId
            name
            slug
          }
          medium {
            url
          }
          categories {
            createdAt
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
      sort: { fields: createdAt, order: DESC }
      limit: 6
    ) {
      nodes {
        createdAt
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
