const _ = require('lodash')
// const slash = require('slash')
// const Promise = require('bluebird')
const path = require('path')
const fs = require('fs')

// WEBPACK CONFIG
exports.onCreateWebpackConfig = ({ /*stage,*/ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
      alias: {
        '@Root': path.resolve(__dirname, 'src/'),
        '@Apps': path.resolve(__dirname, 'src/apps'),
        '@Assets': path.resolve(__dirname, 'src/assets'),
        '@Avatars': path.resolve(__dirname, 'src/assets/avatars'),
        '@Flags': path.resolve(__dirname, 'src/assets/flags'),
        '@Flats': path.resolve(__dirname, 'src/assets/flats'),
        '@Fonts': path.resolve(__dirname, 'src/assets/fonts'),
        '@Icons': path.resolve(__dirname, 'src/assets/icons'),
        '@Images': path.resolve(__dirname, 'src/assets/images'),
        '@Svgs': path.resolve(__dirname, 'src/assets/svgs'),
        '@Components': path.resolve(__dirname, 'src/components'),
        '@Blocks': path.resolve(__dirname, 'src/components/blocks'),
        '@Elements': path.resolve(__dirname, 'src/components/elements'),
        '@Layouts': path.resolve(__dirname, 'src/components/layouts'),
        '@Mixins': path.resolve(__dirname, 'src/components/mixins'),
        '@Sections': path.resolve(__dirname, 'src/components/sections'),
        '@Templates': path.resolve(__dirname, 'src/components/templates'),
        '@Configurations': path.resolve(__dirname, 'src/configurations'),
        '@Constants': path.resolve(__dirname, 'src/configurations/constants'),
        '@Tests': path.resolve(__dirname, 'src/configurations/tests'),
        '@Themes': path.resolve(__dirname, 'src/configurations/themes'),
        '@Translations': path.resolve(__dirname, 'src/configurations/translations'),
        '@Types': path.resolve(__dirname, 'src/configurations/types'),
        '@Contexts': path.resolve(__dirname, 'src/contexts'),
        '@Graphql': path.resolve(__dirname, 'src/graphql'),
        '@Mutations': path.resolve(__dirname, 'src/graphql/mutations'),
        '@Queries': path.resolve(__dirname, 'src/graphql/queries'),
        '@Subscriptions': path.resolve(__dirname, 'src/graphql/subscriptions'),
        '@Hooks': path.resolve(__dirname, 'src/hooks'),
        '@Pages': path.resolve(__dirname, 'src/pages'),
        '@Utilities': path.resolve(__dirname, 'src/utilities'),
      }
    },
  })
}

const EXCLUDED_PAGES = [
  '/cs/@admin/',
]

// onCreatePage API
exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions
  deletePage(page)

  if (!EXCLUDED_PAGES.includes(page.path)) {
    createPage({
      ...page,
      context: {
        ...page.context,
      },
    })
    console.info('page build: ', page.path)
  } else {
    console.warn('page omit: ', page.path)
  }
}