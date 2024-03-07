import PaintingCard from '../components/PaintingCard.js'
import Container from 'react-bootstrap/Container';
import React, {useState, useEffect} from 'react';
import Row from 'react-bootstrap/Row';
import axios from 'axios';

const GalleryArea = () => {
    const [collection, setCollection] = useState([])

    let loadPaintings = (data) => {
        return data.map(createPainting)
    };

    let createPainting = (painting) => {
        return <PaintingCard  key={painting.key} title={painting.title} artist={painting.artist} date={painting.date} link={painting.link} />
    };

    let reload = () => {
        axios.get('http://localhost:3000/gallery')
        .then(res => {
            setCollection(res.data)
        })
        .catch(error => console.log(error.message))
    }

      useEffect(() => {
        axios.get('http://localhost:3000/gallery')
        .then(res => {
            setCollection(res.data)
        })
        .catch(error => console.log(error.message))
      }, []);
    

    return (
        <Container id="paintings">
            <Row>
                {loadPaintings(collection)}
            </Row>
        </Container>
    )
}




export default GalleryArea