import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Submit from '../components/Submit'
import '../styles/style.css'

const Index = () => {
    return (
        <div className="main-container">
            <Container className="mt-3">
                <hr />
                <h1>Add a Painting</h1>
                <Button variant='primary' size="md" href="/gallery">View Gallery</Button>
                <hr />
            </Container>
            <Submit />
        </div>
    )
}

export default Index