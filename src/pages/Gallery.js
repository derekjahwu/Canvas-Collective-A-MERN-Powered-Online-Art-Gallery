import Button from 'react-bootstrap/Button';
import GalleryArea from '../components/GalleryArea.js'
import Container from 'react-bootstrap/Container';
import React from 'react'
import { Link } from "react-router-dom";

import '../styles/style.css'

/**
 * @component
 * @returns This returns the JSX for the Gallery page
 */
const Gallery = () => {
    return(
        <div className="main-container">
            <Container className="mt-3">
                <hr />
                <h1>Gallery</h1>
                <Button variant='primary' size="md" href="/">
                    <Link className="nav-link" to="/">Submit a Painting</Link>
                </Button>
                <hr />
            </Container>
            <GalleryArea />
        </div>
    )
}

export default Gallery