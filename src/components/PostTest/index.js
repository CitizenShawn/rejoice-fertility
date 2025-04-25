/** @jsx jsx */
import * as React from 'react';
import { jsx } from 'theme-ui';
import { Link } from 'gatsby';
import { isBrowser } from '../../helpers/isBrowser';
import parseTiptapContent from '../../helpers/parseTiptapContent';
import Help from '@components/Common/Help';

const PostTest = ({ datam, nextPost, previousPost }) => {
  const src = datam.medium?.url?.proxy;
  console.log("In PostTest");
  console.log("I can read the description of data_html: ", typeof datam.description_html.internal.content);
  const description = datam.description_html.data.internal.content;
  return (
    <>
      <main sx={{ maxWidth: '900px', mx: 'auto', padding: '1rem' }}>
        <div
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            pt: '4rem',
            pb: '3rem',
          }}
        >
          {datam.categories && (
            <div sx={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              {datam.categories.map((category) => {
                return (
                  <Link
                    to={`/blog/category/${category.slug}`}
                    sx={{
                      display: 'flex',
                      gap: '0.5rem',
                      mb: '1rem',
                      alignItems: 'center',
                      fontWeight: 600,
                      variant: 'text.xs',
                      background: '#343753',
                      padding: '0.375rem 0.75rem',
                      color: '#fff',
                      borderRadius: '9999px',
                      '&:hover': { color: '#47E4E0' },
                    }}
                  >
                    {category.name}
                  </Link>
                );
              })}
            </div>
          )}
          <h1
            sx={{
              variant: 'text.xxl',
              fontWeight: '600',
              color: '#343753',
              pb: '1rem',
              textAlign: 'center',
              margin: 'auto',
            }}
          >
            {datam.title}
          </h1>
          <p
            sx={{
              color: '#4D4F60',
              variant: 'text.normal',
              fontWeight: 400,
              textAlign: 'center',
            }}
          >
            {datam.excerpt}
          </p>
        </div>
        <div
          sx={{
            position: 'relative',
            overflow: 'hidden',
            // height: '100%',
            objectFit: 'cover',
            width: '100%',
          }}
        >
          <div aria-hidden="true" sx={{ width: '100%', pb: '56.25%' }} className="lazy"></div>
          <picture>
            <source
              srcSet={`${src}?rs:fill/w:100 100w,
                ${src}?rs:fill/w:400 400w,
                ${src}?rs:fill/w:600 600w,
                ${src}?rs:fill/w:1024 1024w,
                ${src}?rs:fill/w:1280 1280w,
                ${src}?rs:fill/w:1280 1280w`}
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
            <img
              sizes="(max-width: 1280px) 100vw, 1280px"
              srcSet={`${src}?rs:fill/w:100 100w,
                ${src}?rs:fill/w:400 400w,
                ${src}?rs:fill/w:600 600w,
                ${src}?rs:fill/w:1024 1024w,
                ${src}?rs:fill/w:1280 1280w,
                ${src}?rs:fill/w:1280 1280w`}
              src={src}
              alt=""
              loading="lazy"
              sx={{
                position: 'absolute',
                top: '0px',
                left: '0px',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: '50% 50%',
                opacity: 1,
                transition: 'opacity 500ms ease 0s',
              }}
            />
          </picture>
          <noscript>
            <picture>
              <source
                srcSet={`${src}?rs:fill/w:100 100w,
                  ${src}?rs:fill/w:400 400w,
                  ${src}?rs:fill/w:600 600w,
                  ${src}?rs:fill/w:1024 1024w,
                  ${src}?rs:fill/w:1280 1280w,
                  ${src}?rs:fill/w:1280 1280w`}
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
              <img
                loading="lazy"
                sizes="(max-width: 1280px) 100vw, 1280px"
                srcSet={`${src}?rs:fill/w:100 100w,
                  ${src}?rs:fill/w:400 400w,
                  ${src}?rs:fill/w:600 600w,
                  ${src}?rs:fill/w:1024 1024w,
                  ${src}?rs:fill/w:1280 1280w,
                  ${src}?rs:fill/w:1280 1280w`}
                src={src}
                alt=""
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  opacity: 1,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
              />
            </picture>
          </noscript>
        </div>
        <div
          className="parsed"
          sx={{
            lineHeight: '1.15',
            maxWidth: '720px',
            margin: 'auto',
            py: '3rem',
          }}
        >
          {isBrowser && parseTiptapContent("description")}
        </div>
      </main>
      <div>
        <Help />
      </div>
    </>
  );
};

export default PostTest;