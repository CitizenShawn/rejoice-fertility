/** @jsx jsx */
import { jsx } from 'theme-ui';
import * as React from 'react';
import { Link } from 'gatsby';
import parseDate from '../../helpers/parseDate';

const IntroSection = ({ posts }) => {
  if (!posts || posts.length < 1) {
    return null;
  }
  return (
    <section className="content">
      <div
        sx={{
          maxWidth: '1400px',
          margin: 'auto',
          px: '2rem',
        }}
      >
        <h2
          sx={{
            variant: 'text.xl',
            fontWeight: '600',
          }}
        >
          Recent blog posts
        </h2>
        <div
          sx={{
            display: 'grid',
            gridTemplateAreas: [
              `
              "one"
              "two"
              "three"`,
              null,
              null,
              `"one two"
                                "one three"`,
            ],
            pt: '1rem',
            gap: '1.5rem',
          }}
        >
          <div sx={{ gridArea: 'one' }}>
            <Link to={`/blog/${posts[0].slug}`} sx={{ display: 'flex', flexDirection: 'column' }}>
              <div className="lazy">
                <img
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                  src={posts[0].medium.url.proxy}
                  srcSet={`
                          ${posts[0].medium.url.proxy}?rs:fill/w:100 100w,
                          ${posts[0].medium.url.proxy}?rs:fill/w:400 400w,
                          ${posts[0].medium.url.proxy}?rs:fill/w:600 600w,
                          ${posts[0].medium.url.proxy}?rs:fill/w:1024 1024w,
                          ${posts[0].medium.url.proxy}?rs:fill/w:1280 1280w,
                          ${posts[0].medium.url.proxy}?rs:fill/w:1280 1280w
                          `}
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  alt=""
                />
              </div>
              <div
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                  mt: '1rem',
                }}
              >
                <p>
                  {posts[0].users[0]?.display_name && <span>{posts[0].users[0].display_name}</span>}
                  <span>{parseDate(posts[0].publishedAt)}</span>
                </p>
                <h2
                  sx={{
                    mb: '1rem',
                    color: '#343753',
                    variant: 'text.lg',
                    fontWeight: '600',
                  }}
                >
                  {posts[0].title}
                </h2>
                <p
                  sx={{
                    color: '#4D4F60',
                    variant: 'text.sm',
                  }}
                >
                  {posts[0].excerpt}
                </p>
              </div>
            </Link>
          </div>
          <div
            sx={{
              gridArea: 'two',
            }}
          >
            <Link to={`/blog/${posts[1].slug}`} sx={{ display: 'flex', flexWrap: 'wrap' }}>
              <div
                sx={{
                  flex: ['1 0 100%', '1 0 50%'],
                  maxWidth: ['100%', '50%'],
                  img: {
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  },
                }}
                className="lazy"
              >
                <img
                  src={posts[1].medium.url.proxy}
                  alt=""
                  srcSet={`
                          ${posts[1].medium.url.proxy}?rs:fill/w:100 100w,
                          ${posts[1].medium.url.proxy}?rs:fill/w:400 400w,
                          ${posts[1].medium.url.proxy}?rs:fill/w:600 600w,
                          ${posts[1].medium.url.proxy}?rs:fill/w:1024 1024w,
                          ${posts[1].medium.url.proxy}?rs:fill/w:1280 1280w,
                          ${posts[1].medium.url.proxy}?rs:fill/w:1280 1280w
                          `}
                  sizes="(max-width: 1280px) 100vw, 1280px"
                />
              </div>

              <div
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  flex: ['1 0 100%', '1 0 50%'],
                  maxWidth: ['100%', '50%'],
                  px: [0, '1.5rem'],
                }}
              >
                <p
                  sx={{
                    display: 'flex',
                    gap: '0.75rem',
                    mt: ['1rem', 0],
                  }}
                >
                  <span
                    sx={{
                      color: '#343753',
                    }}
                  >
                    {posts[1].users[0]?.display_name && posts[1].users[0].display_name}
                  </span>
                  <span>{parseDate(posts[1].publishedAt)}</span>
                </p>
                <h2
                  sx={{
                    color: '#343753',
                    variant: 'text.lg',
                    fontWeight: '600',
                  }}
                >
                  {posts[1].title}
                </h2>
                <p
                  sx={{
                    color: '#4D4F60',
                    variant: 'text.sm',
                  }}
                >
                  {posts[1].excerpt}
                </p>
              </div>
            </Link>
          </div>
          <div
            sx={{
              gridArea: 'three',
            }}
          >
            <Link to={`/blog/${posts[2].slug}`} sx={{ display: 'flex', flexWrap: 'wrap' }}>
              <div
                sx={{
                  flex: ['1 0 100%', '1 0 50%'],
                  maxWidth: ['100%', '50%'],
                  img: {
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  },
                }}
                className="lazy"
              >
                <img
                  src={posts[2].medium.url.proxy}
                  srcSet={`
                          ${posts[2].medium.url.proxy}?rs:fill/w:100 100w,
                          ${posts[2].medium.url.proxy}?rs:fill/w:400 400w,
                          ${posts[2].medium.url.proxy}?rs:fill/w:600 600w,
                          ${posts[2].medium.url.proxy}?rs:fill/w:1024 1024w,
                          ${posts[2].medium.url.proxy}?rs:fill/w:1280 1280w,
                          ${posts[2].medium.url.proxy}?rs:fill/w:1280 1280w
                          `}
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  alt=""
                />
              </div>

              <div
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  px: [0, '1.5rem'],
                  flex: ['1 0 100%', '1 0 50%'],
                  maxWidth: ['100%', '50%'],
                }}
              >
                <p
                  sx={{
                    display: 'flex',
                    gap: '0.75rem',
                    mt: ['1rem', 0],
                  }}
                >
                  <span
                    sx={{
                      color: '#343753',
                    }}
                  >
                    {posts[2].users[0]?.display_name && posts[2].users[0].display_name}
                  </span>
                  <span>{parseDate(posts[2].publishedAt)}</span>
                </p>
                <h2
                  sx={{
                    color: '#343753',
                    variant: 'text.lg',
                    fontWeight: '600',
                  }}
                >
                  {posts[2].title}
                </h2>
                <p
                  sx={{
                    color: '#4D4F60',
                    variant: 'text.sm',
                  }}
                >
                  {posts[2].excerpt}
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
