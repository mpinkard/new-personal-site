import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Box } from "@material-ui/core"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import CV_PDF from "../images/Tech_CV.pdf"

const CV = () => {
  return (
    <Layout>
      <Seo title="CV" />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",
          paddingBottom: "0.5em",
        }}
      >
        <div style={{ width: "610px" }}>
          <a href={CV_PDF} download>
            Download Michael's CV directly
          </a>
        </div>
      </div>
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
