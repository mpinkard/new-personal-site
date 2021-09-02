import React from "react"
import { Link } from "gatsby"

const lastStyle = { display: `inline-block` }
const linkStyle = { display: `inline-block`, marginRight: "1rem" }

const ListLink = props => (
  <li style={props.last ? lastStyle : linkStyle}>
    <Link to={props.to} style={{ color: "white", textDecoration: "none" }}>
      {props.children}
    </Link>
  </li>
)

const Menu = () => (
  <ul style={{ listStyle: `none`, float: `right` }}>
    <ListLink to="/">Home</ListLink>
    <ListLink to="/contact/">Contact</ListLink>
    <ListLink to="/cv/" last>
      CV
    </ListLink>
  </ul>
)

export default Menu
