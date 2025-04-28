/** @jsx jsx */
import { jsx } from 'theme-ui';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/index';
import { Seo } from '../components/Seo';
import BlogCard from '../components/BlogPage/BlogCard';
import capitalize from '../helpers/capitalize';

const CategoryDetailsPage = ({ data }) => {
  console.log("Building Categories");
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
  query ($slug: String!) {
    category: strapiCategory(slug: { eq: $slug }) {
      name
      slug
    }
    posts: allStrapiBlog(filter: { categories: { elemMatch: { slug: { eq: $slug } } } }) {
      edges {
        node {
          publishedAt
          excerpt
          documentId
          slug
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
          documentId
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
