import React, { useState } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"

import { Button, TextField, Box } from "@material-ui/core"
import Loader from "react-loader-spinner"

const simpleTextStyle = {
  marginBottom: 25,
}

const ContactPage = () => {
  const [notification, setNotification] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const [successfulSend, setSuccessfulSend] = useState(false)
  const handleChange = setFunc => {
    return event => setFunc(event.target.value)
  }

  const onSubmit = async e => {
    setLoading(true)
    e.preventDefault()

    window.grecaptcha.ready(_ => {
      window.grecaptcha
        .execute("6Lf2m9kaAAAAABc1AV7SqXAxZcz7t3wO0zhxDxCT", {
          action: "contact",
        })
        .then(token => {
          const data = JSON.stringify({
            name,
            email,
            subject,
            message,
            "g-recaptcha-response": token,
          })
          return fetch(
            "https://getform.io/f/0238e897-27ec-4736-a46d-49d5af01a7a0",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: data,
            }
          )
        })
        .then(res => {
          console.log(res)
          if (res.status === 200) {
            setSuccessfulSend(true)
            onClear()
          }
          setLoading(false)
          setMessage(res.statusText)
        })
        .catch(e => {
          setLoading(false)
          console.log(e)
          setNotification(e)
        })
    })
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
      {loading ? (
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Loader type="Puff" color="#fca344" height={300} width={100} />
        </Box>
      ) : successfulSend ? (
        <div>
          <p>Your message has been successfully sent.</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              style={{
                backgroundColor: "rebeccapurple",
                color: "white",
                width: "200px",
              }}
            >
              Read More About Michael
            </Button>
          </Link>
        </div>
      ) : (
        <div>
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
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
        </div>
      )}
      {notification && <span>{notification}</span>}
    </Layout>
  )
}

export default ContactPage
