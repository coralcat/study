import React from "react";

import Bio from "../components/bio"
import Layout from "../components/layout";
import SEO from "../components/seo";
import SearchPosts from "../components/searchPosts";
import {Link} from "gatsby";
import Button from "../components/button";

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Sori's Blog"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts"/>
        <Bio/>
        <Link to="/blog">
          <Button marginTop="85px">Go Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage