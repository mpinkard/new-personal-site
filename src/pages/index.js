import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Box } from "@material-ui/core"

import Layout from "../components/layout"
import Seo from "../components/seo"
import About from "../components/about.mdx"

const aboutDiv = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  flexWrap: "wrap",
  width: "100%",
}
const imageContainerStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  flex: "1 0 300px",
}

const markdownContainerStyle = {
  flex: "2 1 250px",
  marginLeft: "25px",
}

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div style={aboutDiv}>
      <Box style={imageContainerStyle}>
        <Box>
          <StaticImage
            src="../images/me_outdoors.jpg"
            width={400}
            height={400}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="A Gatsby astronaut"
            style={{ marginBottom: `1.45rem` }}
          />
        </Box>
      </Box>
      <Box style={markdownContainerStyle}>
        <About />
      </Box>
    </div>
  </Layout>
)

export default IndexPage
