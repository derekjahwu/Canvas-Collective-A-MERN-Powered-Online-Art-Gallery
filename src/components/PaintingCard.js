import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import React, {useState} from 'react';
import EditModal from './EditModal';
import axios from 'axios';

/**
 * 
 * @param {Object} props - The component props passed from GalleryArea
 * @param {string} props._id - The key used to determine which painting will be deleted
 * @param {string} props.title - The title of the painting
 * @param {string} props.artist - The artist of the painting
 * @param {string} props.date - The date the painting was made
 * @param {string} props.link - A link to view the painting in a the browser
 * @returns {JSX.Element} - This returns the rendered PaintingCard component
 */
const PaintingCard = (props) => {
  const [modalShow, setModalShow] = useState(false);

  /**
   * @function deletePainting This function asynchronously handles sending the delete request of a painting
   */
  const deletePainting = async () => {
    await axios.delete(`https://express-paintings-server.onrender.com/api/paintings/${props._id}`)
    .then(() => window.location.replace('/gallery'))
    .catch(err => {
      console.log(err)
    });
  }

    return (
    <Card style={{ width: '18rem' }} className="m-2 p-0" >
      <Card.Img variant="top" src={props.link} />
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
        <Card.Title className="art-title"><i>{props.artist}</i></Card.Title>
        <Card.Title className="art-title">{props.title}</Card.Title>
        </ListGroup.Item>
        <ListGroup.Item>{props.date} </ListGroup.Item>
        <ListGroup.Item>
          <Card.Link href={props.link} target="_blank">View Image</Card.Link>
        </ListGroup.Item>
        <ListGroup.Item>
          <Button  className="btn" variant='primary' onClick={() => setModalShow(true)} size="md" href="#">Edit</Button>
          <EditModal show={modalShow} title={props.title} artist={props.artist} date={props.date} link={props.link} _id={props._id} onHide={() => setModalShow(false)} />
          <Button  className="btn delete" variant="danger" size="md" href="#" onClick={deletePainting}>Delete</Button>
        </ListGroup.Item>
      </ListGroup>
    </Card>
    )
}



export default PaintingCard