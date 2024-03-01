import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import { useState } from 'react';


const EditModal = (props) => {

    return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
      <Image src={props.link} fluid />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Save Changes</Button>
      </Modal.Footer>
    </Modal>

    )
}

export default EditModal