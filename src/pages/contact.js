import React, { useState } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

import { Button, TextField, Box, TextareaAutosize } from "@material-ui/core"

const formStyle = {
  display: "flex",
  flexDirection: "column",
}

const simpleTextStyle = {
  marginBottom: 25,
}

const messageTextStyle = {
  marginBottom: 25,
}

const ContactPage = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const handleChange = setFunc => {
    return event => setFunc(event.target.value)
  }
  const onSubmit = () => {
    console.log(name, email, subject, message)
  }
  const onClear = () => {
    setName("")
    setEmail("")
    setSubject("")
    setMessage("")
  }

  return (
    <Layout>
      <Seo title="Contact" />
      <h1>Contact Me</h1>
      <Box style={{ display: "flex", flexDirection: "row" }}>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            marginRight: 50,
            flex: "1 1 0px",
          }}
        >
          <TextField
            id="name"
            label="Name"
            value={name}
            onChange={handleChange(setName)}
            variant="outlined"
            style={simpleTextStyle}
          />
          <TextField
            id="email"
            label="E-mail"
            value={email}
            onChange={handleChange(setEmail)}
            variant="outlined"
            style={simpleTextStyle}
          />

          <TextField
            id="subject"
            label="Subject"
            value={subject}
            onChange={handleChange(setSubject)}
            variant="outlined"
            style={simpleTextStyle}
          />
        </Box>
        <TextField
          id="message"
          label="Message"
          multiline
          rows={9}
          maxRows={20}
          value={message}
          onChange={handleChange(setMessage)}
          variant="outlined"
          style={{ flex: "1 1 0px" }}
        />
      </Box>
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <Button
          variant="contained"
          style={{
            backgroundColor: "rebeccapurple",
            color: "white",
            maxWidth: "150px",
          }}
          onClick={onSubmit}
        >
          Submit
        </Button>
        <Button
          variant="contained"
          style={{ backgroundColor: "#fca344", maxWidth: "150px" }}
          onClick={onClear}
        >
          Clear
        </Button>
      </Box>
    </Layout>
  )
}

export default ContactPage
