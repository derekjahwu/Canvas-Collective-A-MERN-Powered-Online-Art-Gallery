import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavMenu from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';


/**
 * @component 
 * @returns {JSX.Element} This returns the rendered Navbar component
 */

const Navbar = () => {
    return (
      <Container className="nav-container" fluid>
        <NavMenu expand="md" className="bg-body-tertiary">
        <Container>
          <NavMenu.Brand href="/">Canvas Collective</NavMenu.Brand>
          <NavMenu.Toggle aria-controls="basic-navbar-nav" />
          <NavMenu.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/gallery">Gallery</Nav.Link>
            </Nav>
          </NavMenu.Collapse>
        </Container>
        </NavMenu>
        <Image className="hero" fluid />
      </Container>
    )
}

export default Navbar