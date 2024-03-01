import PaintingCard from '../components/PaintingCard.js'
import Container from 'react-bootstrap/Container';
import React from 'react';
import Row from 'react-bootstrap/Row';

const GalleryArea = () => {

    
    let paintings = []

    class Painting {
        constructor(artwork, artist, date, link) {
            this.artwork = artwork;
            this.artist = artist;
            this.date = date;
            this.link = link
        }
    }

    let dentist = new Painting("Dentist in his Office", "Dr. Dentist DDS", "2020", "http://ioglstaging.wpengine.com/wp-content/uploads/2023/06/josh-prentice-hero.png")
    paintings.push(dentist)

    let dentist1 = new Painting("Dentist in his Office2", "Dr. Dentist DDS", "2020", "http://ioglstaging.wpengine.com/wp-content/uploads/2023/12/io-tradeshow-products-all.png")
    paintings.push(dentist1)

    let createPainting = (painting) => {
        return <PaintingCard artwork={painting.artwork} artist={painting.artist} date={painting.date} link={painting.link} />
    }

    let loadPaintings = (data) => {
        return data.map(createPainting)
    }

    return (
        <Container id="paintings">
            <Row>
                {loadPaintings(paintings)}
            </Row>
        </Container>
    )
}




export default GalleryArea