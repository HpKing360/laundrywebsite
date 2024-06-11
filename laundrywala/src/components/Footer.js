import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const iconStyle = {
    fontSize: "1.5rem",
    color: "#fff",
    width: "40px",
    height: "40px",
    lineHeight: "40px",
    textAlign: "center",
    borderRadius: "50%",
    display: "inline-block",
    margin: "0 10px",
    transition: "opacity 0.3s",
  };

  const facebookStyle = { ...iconStyle, backgroundColor: "#3b5998" };
  const youtubeStyle = { ...iconStyle, backgroundColor: "#ff0000" };
  const instagramStyle = { ...iconStyle, backgroundColor: "#e1306c" };

  return (
    <footer id="Footer" style={{ backgroundColor: "#333", color: "#fff", padding: "30px 0" }}>
      <Container>
        <Row className="py-3">
          <Col md={6} className="py-3">
            <h4 className="text-title">LAUNDRYWALA Online Laundry Service</h4><br></br>
            <p>
              Email:{" "}
              <a href="mailto:laundrywala.support@gmail.com" style={{ color: "#bbb" }}>
                laundrywala.support@gmail.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a href="tel:+919234567890" style={{ color: "#bbb" }}>
                +91 9234567890
              </a>
            </p>
            <p>
            <a href="https://www.google.com/maps/place/Your+Location+Here" target="_blank" rel="noopener noreferrer" style={{ color: "#bbb" }}>
                <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: "5px" }} />
                Find Us on Google Maps
              </a>
            </p>
          </Col>
          <Col md={3} className="py-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li className="py-2">
                <Link to="/get-help" style={{ color: "#bbb" }}>Get Help</Link>
              </li>
              <li className="py-2">
                <Link to="/privacy-policy" style={{ color: "#bbb" }}>Privacy Policy</Link>
              </li>
              <li className="py-2">
                <Link to="/cookie-policy" style={{ color: "#bbb" }}>Cookie Policy</Link>
              </li>
              <li className="py-2">
                <Link to="/about-us" style={{ color: "#bbb" }}>About Us</Link>
              </li>
              <li className="py-2">
                <Link to="/contact-us" style={{ color: "#bbb" }}>Contact Us</Link>
              </li>
            </ul>
          </Col>
          <Col md={3} className="py-3">
            <h5>Follow Us On</h5>
            <ul className="list-unstyled social-icons" style={{ display: "flex", paddingLeft: 0 }}>
              <li>
                <a href="https://www.facebook.com" target="_blank" rel="noreferrer" style={facebookStyle}>
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com" target="_blank" rel="noreferrer" style={youtubeStyle}>
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com" target="_blank" rel="noreferrer" style={instagramStyle}>
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
            </ul>
            <h5>Login</h5>
            <ul className="list-unstyled">
              <li className="py-2">
                <a href="http://localhost:2000/" target="_blank" rel="noreferrer" style={{ color: "#bbb" }}>
                  Admin Login
                </a>
              </li>
              <li className="py-2">
                <Link to="/delivery-login" style={{ color: "#bbb" }}>Delivery Login</Link>
              </li>
            </ul>
          </Col>
        </Row>
        <div className="footer-bottom d-flex justify-content-center" style={{ borderTop: "1px solid #444", paddingTop: "10px", marginTop: "20px" }}>
          <p className="text-secondary" style={{ color: "#bbb" }}>
            Copyright &copy; Developed by{" "}
            <a href="" target="_blank" rel="noreferrer" style={{ color: "#bbb" }}>
              HPAA
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
