import { graphql } from "gatsby"
import React from "react"

import Layout from "./layout"
import SEO from "./seo"

export default function Template({
    data, // this prop will be injected by the GraphQL query below.
}) {
    const { markdownRemark } = data // data.markdownRemark holds your chapter data
    const { frontmatter, html } = markdownRemark

    return (
        <Layout>
            <SEO title={frontmatter.title} />

            <div className="chapter">
                <div
                    className="chapter-content"
                    dangerouslySetInnerHTML={{ __html: html }}
                />
            </div>
        </Layout>
    );
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        order
        path
        title
      }
    }
  }
`