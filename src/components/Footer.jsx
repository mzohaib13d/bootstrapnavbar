import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaHeart } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <p className="mb-0">
              Made with <FaHeart className="text-danger mx-1" /> by ZohaibApp Team
            </p>
            <small className="text-muted">&copy; 2025 ZohaibApp. All rights reserved.</small>
          </Col>
          <Col md={6} className="text-md-end mt-2 mt-md-0">
            <a href="#" className="social-link me-3">
              <FaFacebook className="me-1" />
              Facebook
            </a>
            <a href="#" className="social-link me-3">
              <FaTwitter className="me-1" />
              Twitter
            </a>
            <a href="#" className="social-link">
              <FaInstagram className="me-1" />
              Instagram
            </a>
          </Col>
        </Row>
      </Container>
      
      <style jsx>{`
        .social-link {
          color: #f8f9fa !important;
          text-decoration: none;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
        }
        
        .social-link:hover {
          color: #fff !important;
          transform: translateY(-2px);
          text-decoration: none;
        }
        
        .social-link:nth-child(1):hover {
          background-color: rgba(59, 89, 152, 0.2);
        }
        
        .social-link:nth-child(2):hover {
          background-color: rgba(29, 161, 242, 0.2);
        }
        
        .social-link:nth-child(3):hover {
          background-color: rgba(225, 48, 108, 0.2);
        }
      `}</style>
    </footer>
  );
}

export default Footer;