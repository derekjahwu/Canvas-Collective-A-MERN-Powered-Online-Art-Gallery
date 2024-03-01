import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import React, {useState} from 'react';
import EditModal from './EditModal';

const PaintingCard = (props) => {
  const [modalShow, setModalShow] = React.useState(false);


    return (
    <Card style={{ width: '18rem' }} className="m-2 p-0" >
      <Card.Img variant="top" src={props.link} />
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
        <Card.Title className="art-title">{props.artwork}</Card.Title>
          <Card.Title className="art-title"><i>{props.artist}</i></Card.Title>
        </ListGroup.Item>
        <ListGroup.Item>Date: {props.date}</ListGroup.Item>
        <ListGroup.Item>
          <Card.Link href={props.link}>View Image</Card.Link>
        </ListGroup.Item>
        <ListGroup.Item>
          <Button  className="btn" variant='primary' onClick={() => setModalShow(true)} size="md" href="#">Edit</Button>
          <EditModal show={modalShow} link={props.link} onHide={() => setModalShow(false)} />

          <Button  className="btn" variant="danger" size="md" href="#">Delete</Button>
        </ListGroup.Item>
      </ListGroup>
      
    </Card>
    )
}

export default PaintingCard