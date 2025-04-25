/** @jsx jsx */
import { jsx } from 'theme-ui';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/index';
import { Seo } from '../components/Seo';
import BlogCard from '../components/BlogPage/BlogCard';
import capitalize from '../helpers/capitalize';

const CategoryDetailsPage = ({ data }) => {
  const { posts, category } = data;
  return (
    <Layout>
      <Seo
        title={`${category.name} | Rejoice Fertility Center`}
        description="Knoxville Full Service Fertility, IVF, and Reproductive Surgery Center. Specializing in Infertility, Testing, and Embryo Adoption. Serving East Tennessee. "
      />
      <div>
        <section>
          <div className="content">
            {`${capitalize(category.name)}`}
            {category.description && (
              <p
                sx={{
                  variant: 'text.normal',
                }}
              >
                {category.description}
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

export default CategoryDetailsPage;

export const query = graphql`
  query ($id: String!) {
    category: strapiCategory(documentId: { eq: $id }) {
      description
      documentid
      medium {
        alt_text
        url
        dimensions
      }
      name
      slug
    }
    posts: allStrapiPost(filter: { categories: { elemMatch: { id: { eq: $id } } } }) {
      edges {
        node {
          publishedAt
          excerpt
          documentId
          slug
          status
          subtitle
          title
          authors {
            email
            first_name
            last_name
            documentId
            slug
          }
          tags {
            documentId
            name
            slug
            description
          }
          medium {
            alt_text
            url
            dimensions
          }
          categories {
            description
            created_at
            documentId
            name
            slug
          }
        }
        next {
          slug
          title
          publishedAt
          medium {
            alt_text
            url
            dimensions
          }
        }
        previous {
          slug
          title
          publishedAt
          medium {
            alt_text
            url
            dimensions
          }
        }
      }
    }
    recentPosts: allStrapiBlog(
      sort: { fields: publishedAt, order: DESC }
      filter: { format: { slug: { eq: "article" } } }
      limit: 6
    ) {
      nodes {
        publishedAt
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
