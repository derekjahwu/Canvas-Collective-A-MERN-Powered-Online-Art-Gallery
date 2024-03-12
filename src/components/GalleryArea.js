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
        return <PaintingCard  title={painting.title} artist={painting.artist} date={painting.date} link={painting.link} key={painting._id} idNum={painting._id} />
    };

      useEffect(() => {
        axios.get('https://us-west-2.aws.data.mongodb-api.com/app/art-gallery-vbfmj/endpoint/gallery')
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