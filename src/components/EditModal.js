import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import React, {useState} from 'react'


const EditModal = (props) => {
  const [title, setTitle] = useState(props.title)
  const [artist, setArtist] = useState(props.artist)
  const [date, setDate] = useState(props.date)
  const [link, setLink] = useState(props.link)

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

    return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
      <Image src={props.img} fluid />
                <Form className="d-grid mt-2" action="" method="POST"> 
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
                </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Save Changes</Button>
      </Modal.Footer>
    </Modal>

    )
}

export default EditModal