import Button from 'react-bootstrap/Button';
import GalleryArea from '../components/GalleryArea.js'
import Container from 'react-bootstrap/Container';
import React from 'react'
import '../styles/style.css'

const Gallery = () => {
    return(
        <div className="main-container">
            <Container className="mt-3">
                <hr />
                <h1>Gallery</h1>
                <Button variant='primary' size="md" href="/">Submit a Painting</Button>
                <hr />
            </Container>
            <GalleryArea />
        </div>
    )
}

export default Gallery