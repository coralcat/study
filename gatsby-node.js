const path = require(`path`)
const {createFilePath} = require(`gatsby-source-filesystem`)

exports.createPages = async ({graphql, actions, reporter}) => {
  const {createPage} = actions

  const blogPostTemplate = path.resolve(`./src/templates/blog-post.js`)
  const tagTemplate = path.resolve(`./src/templates/tags.js`)

  const result = await graphql(`
      {
        postsRemark: allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 2000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                tags
              }
            }
          }
        }
        tagsGroup: allMarkdownRemark(limit: 2000) {
          group(field: frontmatter___tags) {
            fieldValue
          }
        }
      }
    `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
  }

  const posts = result.data.postsRemark.edges

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: `/blog${post.node.fields.slug}`,
      component: blogPostTemplate,
      context: {
        slug: post.node.fields.slug,
        previous,
        next
      },
    })
  })
}

exports.onCreateNode = ({node, getNode, actions}) => {
  const {createNodeField} = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({node, getNode})
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
