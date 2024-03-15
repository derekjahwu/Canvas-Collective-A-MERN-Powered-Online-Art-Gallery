import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import React, {useState} from 'react';
import EditModal from './EditModal';
import axios from 'axios';

const PaintingCard = (props) => {
  const [modalShow, setModalShow] = useState(false);

  const deletePainting = async () => {
    await axios.delete(`https://us-west-2.aws.data.mongodb-api.com/app/art-gallery-vbfmj/endpoint/painting?idNum=${props.idNum}`)
  }

  const handleDelete = () => {
    deletePainting()
    .then(() => {window.location.replace('/gallery')})
    .catch(err => {
      console.log(err)
    });
  }

    return (
    <Card style={{ width: '18rem' }} className="m-2 p-0" >
      <Card.Img variant="top" src={props.link} />
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
        <Card.Title className="art-title">{props.title}</Card.Title>
          <Card.Title className="art-title"><i>{props.artist}</i></Card.Title>
        </ListGroup.Item>
        <ListGroup.Item>Date: {props.date} </ListGroup.Item>
        <ListGroup.Item>
          <Card.Link href={props.link}>View Image</Card.Link>
        </ListGroup.Item>
        <ListGroup.Item>
          <Button  className="btn" variant='primary' onClick={() => setModalShow(true)} size="md" href="#">Edit</Button>
          <EditModal show={modalShow} title={props.title} artist={props.artist} date={props.date} link={props.link} idNum={props.idNum} handleDelete={handleDelete} onHide={() => setModalShow(false)} />

          <Button  className="btn" variant="danger" size="md" href="#" onClick={() => {handleDelete()}}>Delete</Button>
        </ListGroup.Item>
      </ListGroup>
    </Card>
    )
}

export default PaintingCard