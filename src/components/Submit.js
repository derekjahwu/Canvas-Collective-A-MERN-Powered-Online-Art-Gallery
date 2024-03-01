import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import '../styles/style.css'

let Submit = () => {
    return (

            
            <Container fluid="sm">
                <Form className="d-grid mt-2" action="" method="POST"> 
                    <Form.Group className="mb-3">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Artist</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Date or Date Range</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Link to View</Form.Label>
                        <Form.Control type="url" />
                    </Form.Group>
                    <Button className="mt-2" variant="primary" type="submit" size="lg" gap={4}>
                        Submit
                    </Button>
                </Form>
            </Container>
        
    )
}

export default Submit