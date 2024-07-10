import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavMenu from 'react-bootstrap/Navbar';
import Hero from './Hero';
import image from '../images/the_old_bridge_hero.jpg'
import { Link } from "react-router-dom";


/**
 * @component 
 * @returns {JSX.Element} This returns the rendered Navbar component
 */

const Navbar = () => {

    return (
      <Container className="nav-container" fluid>
        <NavMenu expand="md" className="bg-body-tertiary">
        <Container>
          <NavMenu.Brand href="/"><Link className="nav-link" to="/">Canvas Collective</Link></NavMenu.Brand>
          <NavMenu.Toggle aria-controls="basic-navbar-nav" />
          <NavMenu.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                  <Link className="nav-link" to="/">Home</Link>
                  <Link className="nav-link" to="/gallery">Gallery</Link>
            </Nav>
          </NavMenu.Collapse>
        </Container>
        </NavMenu>
        <Hero image={image} />
      </Container>
    )
}

export default Navbar