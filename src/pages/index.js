import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TableOfContents from "../components/tableOfContents"

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  return (
    <Layout>
      <SEO title="Table of Contents" />

      <TableOfContents chapters={edges} />
    </Layout>
  )
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___order] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          headings {
            depth
            value
          }
          frontmatter {
            order
            path
            title
          }
        }
      }
    }
  }
`
