import React from "react"
// import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { Helmet } from "react-helmet" // for title desc in short SEO

export default ({ data }) => {
  return (
    <Layout headerTitle="хуй">
      <Helmet>
        <meta charSet="utf-8" />
        <title>IP PROJECT DOC</title>
      </Helmet>
      <div>222222222</div>
    </Layout>
  )
}

// export const query = graphql`
//   query {
//     allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
//       totalCount
//       edges {
//         node {
//           id
//           frontmatter {
//             title
//             date(formatString: "DD MMMM, YYYY")
//           }
//           fields {
//             slug
//           }
//           excerpt
//         }
//       }
//     }
//   }
// `
