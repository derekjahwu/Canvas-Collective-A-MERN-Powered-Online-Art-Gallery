import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import axios from 'axios'
import React, {useState} from 'react'
import '../styles/style.css'

let Submit = () => {
const [title, setTitle] = useState('')
const [artist, setArtist] = useState('')
const [date, setDate] = useState('')
const [link, setLink] = useState('')

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

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`https://us-west-2.aws.data.mongodb-api.com/app/art-gallery-vbfmj/endpoint/painting`,{
        title: title,
        artist: artist,
        date: date,
        link: link,
        })
        .then(window.location.replace('/gallery'))
        .catch(function (error) {
            console.log(error);
          });
    }

    return (
            <Container fluid="sm">
                <Form className="d-grid mt-2" onSubmit={handleSubmit} method="POST"> 
                    <Form.Group className="mb-3">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" onChange={handleTitleChange} value={title} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Artist</Form.Label>
                        <Form.Control type="text" onChange={handleArtistChange} value={artist} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Date or Date Range</Form.Label>
                        <Form.Control type="text" onChange={handleDateChange} value={date} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Link to View</Form.Label>
                        <Form.Control type="url" onChange={handleLinkChange} value={link} />
                    </Form.Group>
                    <Button className="mt-2" variant="primary" type="submit" size="lg" gap={4}>
                        Submit
                    </Button>
                </Form>
            </Container>
        
    )
}

export default Submit