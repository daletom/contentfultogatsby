import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const Home = ({ data }) => {
  return (
  <div class="p-4"> 
    <div class="flex flex-wrap">
    {data.allContentfulBlogPost.edges.map(({ node }) => (
      <div class="p-4 lg:w-1/3 md:w-1/2 sm:w-full">
      {/* <Link to={node.slug}> */}
      <GatsbyImage image={node.heroImage.gatsbyImage} />
        <p class="text-2xl p-2">{node.title}</p>
      </div>
    ))}
    </div>
    </div>
    )
}

export default Home

export const query = graphql`
query {
  allContentfulBlogPost {
    edges {
      node {
        title
        slug
        description {
          description
        }
        heroImage {
          gatsbyImage(width: 500)
        }
      }
    }
  }
}
`