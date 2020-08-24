import React from "react";

import Bio from "../components/bio"
import Layout from "../components/layout";
import SEO from "../components/seo";

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Sori's Blog"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts"/>
        <Bio/>
      </Layout>
    )
  }
}

export default IndexPage