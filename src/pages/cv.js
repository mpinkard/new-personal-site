import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import PDFObject from "pdfobject"
import pdfImg from "../images/Tech_CV.pdf"
import { Box } from "@material-ui/core"

const CV = () => (
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
      <div
        className="pdf-div"
        ref={element => {
          if (element) {
            PDFObject.embed(pdfImg, element, {
              view: "FitH",
              height: "829px",
              width: "610px",
            })
          }
        }}
      />
    </Box>
  </Layout>
)

export default CV
