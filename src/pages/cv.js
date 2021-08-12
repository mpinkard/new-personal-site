import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Box } from "@material-ui/core"
import { StaticImage } from "gatsby-plugin-image"

const CV = () => {
  return (
    <Layout>
      <Seo title="CV" />
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",
          paddingBottom: "1rem",
        }}
      >
        <StaticImage
          src="../images/Tech_CV_retina.png"
          quality={100}
          height={829}
          width={610}
          placeholder="blurred"
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="My CV"
          style={{ borderStyle: `solid`, borderWidth: `5px` }}
        />
      </Box>
    </Layout>
  )
}
export default CV
