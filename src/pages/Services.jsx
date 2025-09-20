import { Container, Row, Col, Card } from 'react-bootstrap';

function Services() {
  const services = [
    {
      title: "Web Development",
      description: "We create responsive and modern websites using the latest technologies.",
      image: "/images/Artificial-Intelligence-Remote-App321.png"
    },
    {
      title: "Mobile Apps",
      description: "We develop cross-platform mobile applications for iOS and Android.",
      image: "/images/Food-Delivery-App321.png"
    },
    {
      title: "UI/UX Design",
      description: "We design intuitive user interfaces that provide great user experiences.",
      image: "/images/Nicole-wolf381.png"
    }
  ];

  return (
    <Container className="my-4">
      <h2 className="text-center mb-5">Our Services</h2>
      <Row>
        {services.map((service, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="h-100">
              <Card.Img 
                variant="top" 
                src={service.image} 
                alt={service.title}
                style={{ height: '250px', objectFit: 'cover' }}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{service.title}</Card.Title>
                <Card.Text className="flex-grow-1">
                  {service.description}
                </Card.Text>
                <a href="#" className="btn btn-primary mt-auto">Contact Us</a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Services;