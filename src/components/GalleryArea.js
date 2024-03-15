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
        return <PaintingCard  class="card" title={painting.title} artist={painting.artist} date={painting.date} link={painting.link} key={painting.idNum} idNum={painting.idNum} />
    };

    const getPaintings = async () => {
        await axios.get('https://us-west-2.aws.data.mongodb-api.com/app/art-gallery-vbfmj/endpoint/gallery')
        .then(res => {
            setCollection(res.data)
        })
    }

      useEffect(() => {
        getPaintings()
        .catch(error => console.log(error.message))
      }, []);
    

    return (
        <Container id="paintings">
            {/* <Spinner animation="border" /> */}
            <Row>
                {loadPaintings(collection)}
            </Row>
        </Container>
    )
}




export default GalleryArea