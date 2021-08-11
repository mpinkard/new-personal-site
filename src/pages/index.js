import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Box, useMediaQuery } from "@material-ui/core"

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

const aboutDivMobile = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
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

const desktopImage = {
  borderStyle: `solid`,
  borderWidth: `5px`,
}

const mobileImage = {
  borderStyle: `solid`,
  borderWidth: `5px`,
  marginBottom: `1.45rem`,
}

const IndexPage = () => {
  const mobile = useMediaQuery("(max-width: 768px)")

  return (
    <Layout>
      <Seo title="Home" />
      <div style={mobile ? aboutDivMobile : aboutDiv}>
        <Box
          style={
            mobile
              ? {
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }
              : imageContainerStyle
          }
        >
          <Box>
            {mobile ? (
              <StaticImage
                src="../images/me_outdoors.png"
                height={400}
                width={400}
                quality={100}
                placeholder="blurred"
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="Michael in Strathcona Provincial Park, British Columbia"
                style={mobileImage}
              />
            ) : (
              <StaticImage
                src="../images/me_outdoors.png"
                quality={100}
                placeholder="blurred"
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="Michael in Strathcona Provincial Park, British Columbia"
                style={desktopImage}
              />
            )}
          </Box>
        </Box>
        <Box style={mobile ? { maxWidth: "400px" } : markdownContainerStyle}>
          <About />
        </Box>
      </div>
    </Layout>
  )
}

export default IndexPage
