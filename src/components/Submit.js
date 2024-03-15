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
const [btnDisplay, setbtnDisplay] = useState("none")
const [btnStatus, setbtnStatus] = useState(false)

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

  const postPainting = async () => {
      await axios.post(`https://us-west-2.aws.data.mongodb-api.com/app/art-gallery-vbfmj/endpoint/painting`,{
      title: title,
      artist: artist,
      date: date,
      link: link,
      idNum: Date.now().toString()
      })
  }

    const handleSubmit = (e) => {
        e.preventDefault();
        setBtn(" ...Uploading")
        setbtnDisplay("inline-block")
        setbtnStatus(true)

        postPainting()
        .then(() => {
          setTitle('')
          setArtist('')
          setDate('')
          setLink('')
          setShow(true)
          setBtn("Submit")
          setbtnDisplay("none")
          setbtnStatus(false)

          setTimeout(() => {
            setShow(false)
          }, 3000)
        })
        .catch(error => console.log(error))
    }

    return (
            <Container fluid="sm">
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
                        <Form.Label>Date or Date Range</Form.Label>
                        <Form.Control type="text" onChange={handleDateChange} value={date} required />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Link to View</Form.Label>
                        <Form.Control type="url" onChange={handleLinkChange} value={link} required />
                    </Form.Group>
                    <Button className="mt-2" variant="primary" type="submit" size="lg" gap={4} disabled={btnStatus} >
                    <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" style={{display:btnDisplay}}/>{btn}
                    </Button>
                </Form>
                <Alert show={show} variant='primary'>
                  <Alert.Heading>Painting Has Been Added</Alert.Heading>
                </Alert>
            </Container>
        
    )
}

export default Submit