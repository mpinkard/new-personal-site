/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  useEffect(() => {
    // Add reCaptcha to the header
    const script = document.createElement("script")
    script.src =
      "https://www.google.com/recaptcha/api.js?render=6Lf2m9kaAAAAABc1AV7SqXAxZcz7t3wO0zhxDxCT"
    document.body.appendChild(script)
  }, [])

  return (
    <div
      style={{
        minHeight: "100vh",
        position: "relative",
        //paddingBottom: "2rem",
      }}
    >
      <div
        className="g-recaptcha"
        data-sitekey="6Lf2m9kaAAAAABc1AV7SqXAxZcz7t3wO0zhxDxCT"
        data-size="invisible"
      ></div>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem`,
        }}
      >
        <main>{children}</main>
      </div>
      <footer
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: "2rem",
        }}
      >
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0 1.0875rem`,
          }}
        >
          © Michael Pinkard {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </div>
      </footer>
      <div style={{ display: "block", height: "2rem" }} />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
