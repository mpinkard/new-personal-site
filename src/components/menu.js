import React from "react"
import { Link } from "gatsby"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to} style={{ color: "white", textDecoration: "none" }}>
      {props.children}
    </Link>
  </li>
)

const Menu = () => (
  <ul style={{ listStyle: `none`, float: `right` }}>
    <ListLink to="/">About</ListLink>
    <ListLink to="/contact/">Contact</ListLink>
    <ListLink to="/cv/">CV</ListLink>
  </ul>
)

export default Menu
