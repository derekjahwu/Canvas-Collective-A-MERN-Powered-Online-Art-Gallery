import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import React, {useState} from 'react'
import axios from 'axios';


const EditModal = (props) => {
  const [newTitle, setTitle] = useState('');
  const [newArtist, setArtist] = useState('')
  const [newDate, setDate] = useState('')
  const [newLink, setLink] = useState('')

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

  const updateServer = () => {
    axios.put(`http://localhost:3000/gallery/${props.idnum}`, {
      title: newTitle === '' ? props.title : newTitle,
      artist: newArtist === '' ? props.artist : newArtist,
      date: newDate === '' ? props.date : newDate,
      link: newLink === '' ? props.link : newLink,
      idNum: props.idnum
    })
    .then(window.location.assign('/gallery'))
    .catch(err => {
      console.log(err)
    })
  }

    return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
      <Image src={props.link} fluid />
                <Form className="d-grid mt-2" action="" method="POST"> 
                    <Form.Group className="mb-3">
                        <Form.Label>Title: <b>{props.title}</b></Form.Label>
                        <Form.Control type="text" onChange={handleTitleChange}  />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Artist: <b>{props.artist}</b></Form.Label>
                        <Form.Control type="text" onChange={handleArtistChange}  />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Date or Date Range: <b>{props.date}</b></Form.Label>
                        <Form.Control type="text" onChange={handleDateChange} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Link to <a href={props.link} target="_blank" rel="noreferrer">View</a></Form.Label>
                        <Form.Control type="url" onChange={handleLinkChange} />
                    </Form.Group>
                </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => {
          props.onHide()
          updateServer()
          }}>Save Changes</Button>
      </Modal.Footer>
    </Modal>

    )
}

export default EditModal