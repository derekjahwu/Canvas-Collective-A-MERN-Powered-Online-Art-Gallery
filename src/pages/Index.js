import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import PaintingForm from '../components/PaintingForm'
import { Link } from "react-router-dom";
import '../styles/style.css'

/**
 * @component
 * @returns This returns the JSX for the Home page
 */
const Index = () => {
    return (
        <div className="main-container">
            <Container className="mt-3">
                <hr />
                <h1>Add a Painting</h1>
                <Button className="btn" size="md" href="/gallery">
                    <Link className="nav-link" to="/gallery">View Gallery</Link>
                </Button>
                <hr />
            </Container>
            <PaintingForm />
        </div>
    )
}

export default Index