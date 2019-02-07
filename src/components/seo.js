import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import favicon from '../../static/assets/favicon.png'

function SEO({ description, lang, meta, keywords, title }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description
        const titleAttr = title || data.site.siteMetadata.title
        return (
          <Helmet
            htmlAttributes={{
              lang,
              title: titleAttr,
            }}
            title={titleAttr}
            titleTemplate={`%s`}
            link={[
              { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` },
            ]}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                property: `og:title`,
                content: titleAttr,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                name: `twitter:card`,
                content: `summary`,
              },
              {
                name: `twitter:creator`,
                content: data.site.siteMetadata.author,
              },
              {
                name: `twitter:title`,
                content: titleAttr,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
              {
                name: `instagram:card`,
                content: `summary`,
              },
              {
                name: `instagram:creator`,
                content: data.site.siteMetadata.author,
              },
              {
                name: `instagram:title`,
                content: titleAttr,
              },
              {
                name: `instagram:description`,
                content: metaDescription,
              },
              {
                name: `facebook:card`,
                content: `summary`,
              },
              {
                name: `facebook:creator`,
                content: data.site.siteMetadata.author,
              },
              {
                name: `facebook:title`,
                content: titleAttr,
              },
              {
                name: `facebook:description`,
                content: metaDescription,
              },
            ]
              .concat(
                keywords.length > 0
                  ? {
                      name: `keywords`,
                      content: keywords.join(`, `),
                    }
                  : []
              )
              .concat(meta)}
          />
        )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
