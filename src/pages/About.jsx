import { Container, Row, Col, Image } from 'react-bootstrap';

function About() {
  return (
    <Container className="my-4">
      <Row>
        <Col md={6}>
          <h2 className="mb-4 contact-heading">About Us</h2>
          <p className="contact-heading2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.
            Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus
            rhoncus ut eleifend nibh porttitor. Ut consectetur nulla quis eros consectetur
            sodales.
          </p>
          <p className='contact-heading2'>
            Duis ultricies pharetra magna. Donec accumsan malesuada orci. Donec sit amet
            eros non nisl sagittis vestibulum. Aenean fermentum, elit eget tincidunt
            condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui.
          </p>
        </Col>
        <Col md={6}>
          <Image
            src="/images/about-us_7731.jpg" alt="About Us"
            fluid
            rounded
          />
        </Col>
      </Row>
    </Container>
  );
}

export default About;