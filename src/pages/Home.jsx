import { Container, Row, Col, Carousel, Card, Button } from 'react-bootstrap';

function Home() {
  return (
    <Container className="my-4">
      <Row>
        <Col>
        <div className="carousel-container">
          <Carousel className="mb-5">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/users-group-community.jpg"
                alt="Diverse community"
                style={{ height: '920px', objectFit: 'cover' }}
              />
              <Carousel.Caption className="bg-dark bg-opacity-50 rounded p-3">
                <h3>Community Learning</h3>
                <p>Join our diverse community of learners and educators.</p>
              </Carousel.Caption>
            </Carousel.Item>
            
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/diverse-students-collaboration.png"
                alt="Students collaborating"
                style={{ height: '920px', objectFit: 'cover' }}
              />
              <Carousel.Caption className="bg-dark bg-opacity-50 rounded p-3">
                <h3>Collaborative Environment</h3>
                <p>Work together with students from around the world.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/modern-classroom-study.png"
                alt="Modern classroom"
                style={{ height: '920px', objectFit: 'cover' }}
              />
              <Carousel.Caption className="bg-dark bg-opacity-50 rounded p-3">
                <h3>Modern Classrooms</h3>
                <p>Experience learning in our state-of-the-art facilities.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/pxfuel.jpg"
                alt="Jab We Met 2007"
                style={{ height: '920px', objectFit: 'cover' }}
              />
              <Carousel.Caption className="bg-dark bg-opacity-50 rounded p-3">
                <h3>Jab We Met 2007</h3>
                <p>Jab We Met" (2007) is a Bollywood romantic drama about a free-spirited girl and a heartbroken businessman whose lives change after a chance train journey together.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/kareena50386807.jpg"
                alt="Kareena Kapoor"
                style={{ height: '920px', objectFit: 'cover' }}
              />
              <Carousel.Caption className="bg-dark bg-opacity-50 rounded p-3">
                <h3>Jab We Met 2007</h3>
                <p>Imtiaz Ali is a renowned Bollywood filmmaker known for his soulful storytelling and hit romantic dramas like Jab We Met (2007).</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        </Col>
      </Row>
      
      <Row>
        <Col md={4} className="mb-4">
          <Card className="h-100">
            <Card.Img 
              variant="top" 
              src="/images/Artificial-Intelligence-Remote-App321.png"
              alt="AI Remote App"
              style={{ height: '250px', objectFit: 'cover' }}
            />
            <Card.Body className="d-flex flex-column">
              <Card.Title>AI Learning Platform</Card.Title>
              <Card.Text>
                Our artificial intelligence platform provides personalized learning experiences for every student.
              </Card.Text>
              <div className="mt-auto">
                <Button className="btn btn-info">Contact Us</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="h-100">
            <Card.Img 
              variant="top" 
              src="/images/Food-Delivery-App321.png"
              alt="Food Delivery App"
              style={{ height: '250px', objectFit: 'cover' }}
            />
            <Card.Body className="d-flex flex-column">
              <Card.Title>Nutrition Programs</Card.Title>
              <Card.Text>
                We offer meal delivery services to ensure students maintain healthy eating habits while learning.
              </Card.Text>
              <div className="mt-auto">
                <Button className="btn btn-success">Contact Us</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="h-100">
            <Card.Img 
              variant="top" 
              src="/images/Nicole-wolf381.png"
              alt="Professional Educator"
              style={{ height: '250px', objectFit: 'cover' }}
            />
            <Card.Body className="d-flex flex-column">
              <Card.Title>Expert Instructors</Card.Title>
              <Card.Text>
                Learn from industry professionals with years of experience in their respective fields.
              </Card.Text>
              <div className="mt-auto">
                <Button className="btn btn-warning">Contact Us</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;