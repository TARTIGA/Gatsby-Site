import React from "react"
// import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import {
  AppBar,
  Toolbar,
  IconButton,
  MenuIcon,
  Typography,
  Button,
} from "@material-ui/core"
import { Helmet } from "react-helmet" // for title desc in short SEO

export default ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>IP PROJECT DOC</title>
      </Helmet>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">News</Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
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
