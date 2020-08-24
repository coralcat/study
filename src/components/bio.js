import React from "react";
import {StaticQuery, graphql} from "gatsby";
import Image from "gatsby-image"
import styled from "styled-components"

import {rhythm} from "../utils/typography";

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const {author, social} = data.site.siteMetadata
        return (
          <Container>
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 50,
                borderRadius: `100%`
              }}
              imgStyle={{
                borderRadius: `50%`
              }}
            />
            <p>
              Written by <strong>{author}</strong>, a framework built upon the React library.
              {` `}
              <a href={`https://be.net/${social.behance}`}>Portfolio</a>
            </p>
          </Container>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/avatar.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          behance
        }
      }
    }
  }
`

const Container = styled.div`
    display: flex
`

export default Bio