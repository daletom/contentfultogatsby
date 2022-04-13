import * as React from "react"
import "../styles/global.css"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const Home = ({ data }) => {
  return (
  <div class="p-4"> 
    <div class="flex flex-wrap article" className="article">
    {data.allContentfulBlogPost.edges.map(({ node }) => (
      <div class="p-4 lg:w-1/3 md:w-1/2 sm:w-full gallery" className="gallery">
      {/* <Link to={node.slug}> */}
      <GatsbyImage image={node.heroImage.gatsbyImage} />
        <p class="text-2xl p-2 gallery-text" className="gallery-text">{node.title}</p>
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
          gatsbyImage(width: 495, height: 274)
        }
      }
    }
  }
}
`