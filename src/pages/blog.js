/** @jsx jsx */
import { graphql } from 'gatsby';
import { jsx } from 'theme-ui';
import Header from '@components/Common/Header';
import Layout from '@components/Layout';
import IntroSection from '@components/BlogPage/IntroSection';
import BlogCard from '@components/BlogPage/BlogCard';
import Help from '@components/Common/Help';
import { Seo } from '../components/Seo';

const BlogPage = ({ data }) => {
  console.log("Building Blog Page");
  const { posts } = data;
  return (
    <Layout>
      <Seo
        title="Knoxville Fertility, IVF and Reproductive Surgery | Rejoice Fertility Center "
        description="Knoxville Full Service Fertility, IVF, and Reproductive Surgery Center. Specializing in Infertility, Testing, and Embryo Adoption. Serving East Tennessee."
      />
      <div>
        <Header title={'Blog'} image={'/images/blog-img.png'} />

        <section>
          <IntroSection posts={posts.nodes.slice(0, 3)} />

          <div className="content">
            <h2
              sx={{
                variant: 'text.xl',
                fontWeight: '600',
                mb: '2rem',
                color: '#343753',
              }}
            >
              All blog posts
            </h2>
            <div
              sx={{
                display: 'flex',
                gap: '1.5rem',
                flexWrap: 'wrap',
                justifyContent: 'flex-start',
              }}
            >
              {posts.nodes.length > 3 &&
                posts.nodes.slice(3).map((post) => <BlogCard key={post.documentId} data={post} />)}
            </div>
          </div>
        </section>
      </div>
      <Help />
    </Layout>
  );
};

export default BlogPage;

export const query = graphql`
  query StoriesPageQuery {
    posts: allStrapiBlog {
      nodes {
        authors {
          first_name
          last_name
        }
        categories {
          slug
          name
        }
        medium {
          url
        }
        publishedAt
        documentId
        subtitle
        title
        slug
        excerpt
      }
    }
  }
`;
