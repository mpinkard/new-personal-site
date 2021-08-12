import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Box } from "@material-ui/core"

import Layout from "../components/layout"
import Seo from "../components/seo"
import About from "../components/about.mdx"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="about-container">
      <Box className="me-image-container">
        <Box>
          <StaticImage
            className="mobile-image"
            src="../images/me_outdoors.png"
            height={400}
            width={400}
            quality={100}
            placeholder="blurred"
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Michael in Strathcona Provincial Park, British Columbia"
          />
          <StaticImage
            className="desktop-image"
            src="../images/me_outdoors.png"
            quality={100}
            height={544}
            width={408}
            placeholder="blurred"
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Michael in Strathcona Provincial Park, British Columbia"
          />
        </Box>
      </Box>
      <Box className="about-markdown">
        <About />
      </Box>
    </div>
  </Layout>
)

export default IndexPage
