import PaintingCard from '../components/PaintingCard.js'
import Container from 'react-bootstrap/Container';
import React, {useState, useEffect} from 'react';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';

/**
 * @component
 * @returns {ReactNode} The rendered Gallery area with painting card components
 */
const GalleryArea = () => {
    const [collection, setCollection] = useState([])
    const [show, setLoading] = useState("block")

    /**
     * @function getPaintings This function asynchronously submits a get request to the Express server to the /paintings to retrieve data to be the collection state
     */
    const getPaintings = async () => {
        await axios.get('https://express-paintings-server.onrender.com/api/paintings')
        .then(res => {
            setLoading("none")
            setCollection(res.data)
        })
        .catch(error => console.log(error.message))
    }

    /**
     * This variable represents the returned components from the mapped collection array
     * @param {Object} painting This json Object is pulled by submitting a GET request to the MongoDB database
     */
    let paintings = collection.map(painting => 
        <PaintingCard  class="card" title={painting.title} artist={painting.artist} date={painting.date} link={painting.link} key={painting._id} _id={painting._id} />
    )

    /**
     * This Effect is used to run the asynchronous function getPaintings after the DOM renders
     */
      useEffect(() => {
        getPaintings()
      }, []);

    return (
        <Container id="paintings" >
            <Container id="spinner">
                <Spinner style={{display:show}} animation="border"  />
            </Container>
            <Row>
                {paintings}
            </Row>
        </Container>
    )
}

export default GalleryArea