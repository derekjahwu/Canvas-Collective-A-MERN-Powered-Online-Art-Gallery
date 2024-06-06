import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import PaintingForm from '../components/PaintingForm'
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
                <Button variant='primary' size="md" href="/gallery">View Gallery</Button>
                <hr />
            </Container>
            <PaintingForm />
        </div>
    )
}

export default Index