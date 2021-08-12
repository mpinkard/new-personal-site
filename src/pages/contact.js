import React, { useState } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"

import { Button, TextField, Box, useMediaQuery } from "@material-ui/core"
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

  const [nameErrorText, setNameErrorText] = useState("")
  const [emailErrorText, setEmailErrorText] = useState("")
  const [subjectErrorText, setSubjectErrorText] = useState("")
  const [messageErrorText, setMessageErrorText] = useState("")

  const handleChange = (setFunc, errorFunc) => {
    return event => {
      errorFunc("")
      return setFunc(event.target.value)
    }
  }

  const emailValid = () => {
    if (email) {
      const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
      return re.test(email.toLowerCase())
    }
    return false
  }

  const validateData = () => {
    let valid = true
    if (!name) {
      setNameErrorText("Please include your name")
      valid = false
    }
    if (!subject) {
      setSubjectErrorText("Please include a subject")
      valid = false
    }
    if (!message) {
      setMessageErrorText("Please write me a message :)")
      valid = false
    }
    if (!emailValid()) {
      setEmailErrorText("Please include a valid email address")
      valid = false
    }
    return valid
  }

  const onSubmit = async e => {
    e.preventDefault()
    if (validateData()) {
      setLoading(true)

      window.grecaptcha.ready(_ => {
        window.grecaptcha
          .execute(`${process.env.GATSBY_GOOGLE_RECAPTCHA_KEY}`, {
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
  }

  const onClear = () => {
    setName("")
    setNameErrorText("")
    setEmail("")
    setEmailErrorText("")
    setSubject("")
    setSubjectErrorText("")
    setMessage("")
    setMessageErrorText("")
  }

  const Spinner = () => (
    <Box
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <Loader type="Puff" color="#fca344" height={300} width={100} />
    </Box>
  )

  const Success = () => (
    <Box>
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
    </Box>
  )

  const mobile = useMediaQuery("(max-width: 600px)")

  return (
    <Layout>
      <Seo title="Contact" />
      <h1 style={{ whiteSpace: "nowrap" }}>Contact Me</h1>
      {loading ? (
        <Spinner />
      ) : successfulSend ? (
        <Success />
      ) : (
        <Box>
          <Box
            style={
              mobile
                ? { display: "flex", flexDirection: "column" }
                : {
                    display: "flex",
                    flexDirection: "row",
                  }
            }
          >
            <Box
              style={
                mobile
                  ? {
                      display: "flex",
                      flexDirection: "column",
                      flex: "1 1 0px",
                    }
                  : {
                      display: "flex",
                      flexDirection: "column",
                      marginRight: 50,
                      flex: "1 1 0px",
                    }
              }
            >
              <TextField
                id="name"
                label="Name"
                value={name}
                error={!!nameErrorText}
                onChange={handleChange(setName, setNameErrorText)}
                variant="outlined"
                style={simpleTextStyle}
                helperText={nameErrorText}
              />
              <TextField
                id="email"
                label="E-mail"
                value={email}
                error={!!emailErrorText}
                helperText={emailErrorText}
                onChange={handleChange(setEmail, setEmailErrorText)}
                variant="outlined"
                style={simpleTextStyle}
              />

              <TextField
                id="subject"
                label="Subject"
                value={subject}
                error={!!subjectErrorText}
                onChange={handleChange(setSubject, setSubjectErrorText)}
                variant="outlined"
                style={simpleTextStyle}
                helperText={subjectErrorText}
              />
            </Box>
            <TextField
              id="message"
              label="Message"
              multiline
              rows={9}
              value={message}
              error={!!messageErrorText}
              helperText={messageErrorText}
              onChange={handleChange(setMessage, setMessageErrorText)}
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
        </Box>
      )}
      {notification && <span>{notification}</span>}
    </Layout>
  )
}

export default ContactPage
