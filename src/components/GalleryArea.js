import PaintingCard from '../components/PaintingCard.js'
import Container from 'react-bootstrap/Container';
import React, {useState, useEffect} from 'react';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';

//Render link for express server: https://express-paintings-server.onrender.com/api/paintings

const GalleryArea = () => {
    const [collection, setCollection] = useState([])
    const [show, setShow] = useState("block")

    let loadPaintings = (data) => {
        return data.map(createPainting)
    };

    let createPainting = (painting) => {
        return <PaintingCard  class="card" title={painting.title} artist={painting.artist} date={painting.date} link={painting.link} key={painting._id} _id={painting._id} />
    };

    const getPaintings = async () => {
        await axios.get('https://express-paintings-server.onrender.com/api/paintings')
        .then(res => {
            setShow("none")
            setCollection(res.data)
        })
    }

      useEffect(() => {
        getPaintings()
        .catch(error => console.log(error.message))
      }, []);
    

    return (
        <Container id="paintings" >
            <Container id="spinner">
                <Spinner style={{display:show}} animation="border"  />
            </Container>
            <Row>
                {loadPaintings(collection)}
            </Row>
        </Container>
    )
}




export default GalleryArea