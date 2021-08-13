/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from "react"
import { ThemeProvider, createTheme } from "@material-ui/core/styles"
import { red } from "@material-ui/core/colors"

const theme = createTheme({
  palette: {
    primary: {
      main: "#663399",
    },
    secondary: {
      main: "#fca344",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "white",
    },
  },
})

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider theme={theme}>{element}</ThemeProvider>
}
