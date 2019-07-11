import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default () => (
  <div>
    <Layout>
      <Link style={{ display: `block` }} to="/contact/">
        Contact
      </Link>
      <Link style={{ display: `block` }} to="/about/">
        About
      </Link>
      <Link style={{ display: `block` }} to="/about-css-modules/">
        {" "}
        about-css-modules
      </Link>
      <div>
        <img src="https://source.unsplash.com/random/400x200" alt="" />
      </div>
    </Layout>
  </div>
)
