import Image from 'react-bootstrap/Image';

/**
 * @component 
 * @returns {JSX.Element} This returns the rendered Hero component
 */

const Hero = (props) => {
    return (
        <Image src={props.image} className="hero" fluid />

    )
}

export default Hero