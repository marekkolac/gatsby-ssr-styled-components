import React from 'react'
import { Helmet } from 'react-helmet'
import { useIntl } from 'gatsby-plugin-intl'

// @constants
import { BASE_URL } from '@Constants/globals'

// @types
import { Pages } from '@Configurations/types'

import image from '@Images/favicon.png'

interface IProps {
  page: Pages
  article?: boolean
  author?: string
}

const SEO: React.FC<IProps> = ({
 page,
 article,
 author,
}) => {
  const { locale, formatMessage: translate } = useIntl()

  let urlLocale: string
  if (locale !== 'en') urlLocale = locale
  const URL = urlLocale ? `${BASE_URL}/${urlLocale}${translate({ id: `pages.${page}.seo.url` })}` : `${BASE_URL}${translate({ id: `pages.${page}.seo.url` })}`

  return (
    <>
      <Helmet title={`${translate({ id: `pages.${page}.seo.title` })} | APPLICATION`} defer={false}>
        <html lang={locale} prefix="og: http://ogp.me/ns#" />
        <meta name="description" content={translate({ id: `pages.${page}.seo.description` })} />
        <meta name="image" content={image} />
        <meta property="og:url" content={URL} />
        {article && <meta property="og:type" content="article" />}
        <meta property="og:title" content={translate({ id: `pages.${page}.seo.title` })} />
        <meta property="og:description" content={translate({ id: `pages.${page}.seo.description` })} />
        <meta property="og:image" content={image} />
        <meta name="twitter:card" content="summary_large_image" />
        {author && <meta name="twitter:creator" content={author} />}
        <meta name="twitter:title" content={translate({ id: `pages.${page}.seo.title` })} />
        <meta name="twitter:description" content={translate({ id: `pages.${page}.seo.description` })} />
        <meta name="twitter:image" content={image} />
      </Helmet>
    </>
  )
}

export default SEO