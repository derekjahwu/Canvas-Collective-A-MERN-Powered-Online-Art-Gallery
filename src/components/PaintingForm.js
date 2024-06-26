import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import axios from 'axios'
import React, {useState} from 'react'
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
import '../styles/style.css'

let Submit = () => {
const [title, setTitle] = useState('')
const [artist, setArtist] = useState('')
const [date, setDate] = useState('')
const [link, setLink] = useState('')
const [show, setShow] = useState(false)
const [btn, setBtn] = useState("Submit")
const [spinnerDisplay, setspinnerDisplay] = useState("none")
const [spinnerStatus, setspinnerStatus] = useState(false)

/**
 * @component
 * @returns {JSX.Element} This returns the rendered PaintingForm component
 */

const handleTitleChange = (e) => {
    setTitle(e.target.value)
  }
  const handleArtistChange = (e) => {
    setArtist(e.target.value)
  }
  const handleDateChange = (e) => {
    setDate(e.target.value)
  }
  const handleLinkChange = (e) => {
    setLink(e.target.value)
  }

  /**
   * @function postPainting This asynchronously handles sending the POST request to the express server
   */
  const postPainting = async () => {
      await axios.post(`https://express-paintings-server.onrender.com/api/paintings`,{
      title: title,
      artist: artist,
      date: date,
      link: link,
      })
  }

  /**
   * @function handleSubmit This function handles the fulfilled post request of the new Painting and resets the form fields
   * @param {Event} e This prevents the default form action to refresh on submission
   *  
   */
    const handleSubmit = (e) => {
        e.preventDefault();
        setBtn(" ...Uploading")
        setspinnerDisplay("inline-block")
        setspinnerStatus(true)

        postPainting()
        .then(() => {
          setTitle('')
          setArtist('')
          setDate('')
          setLink('')
          setShow(true)
          setBtn("Submit")
          setspinnerDisplay("none")
          setspinnerStatus(false)

          setTimeout(() => {
            setShow(false)
          }, 3000)
        })
        .catch(error => console.log(error))
    }

    return (
            <Container fluid="sm" className="form">
                <Form className="d-grid mt-2" onSubmit={handleSubmit} method="POST"> 
                    <Form.Group className="mb-3">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" onChange={handleTitleChange} value={title} required />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Artist</Form.Label>
                        <Form.Control type="text" onChange={handleArtistChange} value={artist} required />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Year</Form.Label>
                        <Form.Control type="number" onChange={handleDateChange} value={date} required />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Link to View</Form.Label>
                        <Form.Control type="url" onChange={handleLinkChange} value={link} required />
                    </Form.Group>
                    <Button className="mt-2" type="submit" size="lg" gap={4} disabled={spinnerStatus} >
                    <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" style={{display:spinnerDisplay}}/>{btn}
                    </Button>
                </Form>
                <Alert show={show} variant='primary'>
                  <Alert.Heading>Painting Has Been Added</Alert.Heading>
                </Alert>
            </Container>
        
    )
}

export default Submit