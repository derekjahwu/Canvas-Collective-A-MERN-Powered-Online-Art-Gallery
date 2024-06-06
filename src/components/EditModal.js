import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import React, {useState} from 'react'
import axios from 'axios';

/**
 * This is the Component for the Modal when a user clicks Edit for a painting
 * 
 * @component
 * @param {Object} props - The component props of the painting details
 * @param {string} props.title - The title of the painting
 * @param {string} props.artist - The artist of the painting
 * @param {string} props.date - The date the painting was made
 * @param {string} props.link - A link to view the painting in a the browser
 * @returns {JSX.Element} A modal enabling the user to edit painting details
 * 
 */
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

  /**
   * @function updatePainting This function checks the form for new data and updates the state accordingly, then submits a new PUT request to the Express server
   */
  const updatePainting = async () => {
    await axios.put(`https://express-paintings-server.onrender.com/api/paintings/${props._id}`, {
      "title": newTitle === '' ? props.title : newTitle,
      "artist": newArtist === '' ? props.artist : newArtist,
      "date": newDate === '' ? props.date : newDate,
      "link": newLink === '' ? props.link : newLink,
    })
    .then(() => {
      props.onHide()
      window.location.replace('/gallery')
    })
    .catch((err) => {console.log(err)})
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
                        <Form.Label>Year: <b>{props.date}</b></Form.Label>
                        <Form.Control type="number" onChange={handleDateChange} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Link to <a href={props.link} target="_blank" rel="noreferrer">View</a></Form.Label>
                        <Form.Control type="url" onChange={handleLinkChange} />
                    </Form.Group>
                </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => {
          updatePainting()
          }}>Save Changes</Button>
          
      </Modal.Footer>
    </Modal>

    )
}

export default EditModal