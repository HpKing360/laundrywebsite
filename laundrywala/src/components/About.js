import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandsHelping, faClock, faRecycle } from "@fortawesome/free-solid-svg-icons";

const Section = styled.section`
  padding: 80px 0;
  background: radial-gradient(100% 225% at 100% 0%, #FF0000 0%, #000000 100%), linear-gradient(236deg, #00C2FF 0%, #000000 100%), linear-gradient(135deg, #CDFFEB 0%, #CDFFEB 36%, #009F9D 36%, #009F9D 60%, #07456F 60%, #07456F 67%, #0F0A3C 67%, #0F0A3C 100%);
background-blend-mode: overlay, hard-light, normal;
  position: relative;
  overflow: hidden;
`;

const Box = styled.div`
  background-color: #fff;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s, transform 0.3s;

  &:hover {
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
    transform: translateY(-5px);
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: #000;
  text-align: center;
  margin-bottom: 50px;
  position: relative;
  z-index: 1;

  &::after {
    content: "";
    width: 100px;
    height: 4px;
    background-color: #0056b3;
    display: block;
    margin: 20px auto 0;
    border-radius: 2px;
  }
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #555;
  margin-bottom: 20px;
`;

const Bubble = styled.div`
  position: absolute;
  border-radius: 50%;
  background-color: rgba(0, 86, 179, 0.2);
  z-index: 0;

  &:nth-child(1) {
    width: 200px;
    height: 200px;
    top: 10%;
    left: 20%;
  }

  &:nth-child(2) {
    width: 150px;
    height: 150px;
    top: 30%;
    right: 15%;
  }

  &:nth-child(3) {
    width: 100px;
    height: 100px;
    bottom: 20%;
    left: 25%;
  }

  &:nth-child(4) {
    width: 250px;
    height: 250px;
    bottom: 10%;
    right: 10%;
  }
`;

const Highlight = styled.span`
  color: #0056b3;
  font-weight: bold;
`;

const ContactButton = styled.button`
  background-color: #0056b3;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  transition: background-color 0.3s;
  cursor: pointer;
  margin-top: 30px;

  &:hover {
    background-color: #004494;
  }
`;

const IconBox = styled.div`
  text-align: center;
  margin: 20px 0;
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 3rem;
  color: #0056b3;
  margin-bottom: 10px;
`;

const About = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <Section id="about-us">
      <Bubble />
      <Bubble />
      <Bubble />
      <Bubble />
      <Container>
        <Box onMouseEnter={handleHover} onMouseLeave={handleHover} isHovered={isHovered}>
          <Title>About Us</Title>
          <Row>
            <Col md={12}>
              <div>
                <Paragraph>
                  <Highlight>LaundryWala</Highlight> is an Online Laundry Platform with the latest technology in washing, dry cleaning, and laundry. Our services combine our expertise and experience acquired over a period of time to provide you with clean laundry in the shortest possible turnaround time. We have partnered with the top laundry experts of the country and provide you with free Pick-up and Delivery for your dirty laundry. With our Website, Mobile App, or Hotline Number, you can just schedule an order and we will take it from there!
                </Paragraph>
                <Paragraph>
                  Our mission is to make laundry convenient and hassle-free for our customers. Whether you're a busy professional, a student, or a homemaker, <Highlight>LaundryWala</Highlight> is here to take care of your laundry needs. We use state-of-the-art equipment and environmentally friendly practices to ensure the best results for your clothes while minimizing our impact on the environment.
                </Paragraph>
                <Paragraph>
                  At <Highlight>LaundryWala</Highlight>, we are committed to providing exceptional service and customer satisfaction. Our friendly staff is always ready to assist you with any queries or special requests. With our easy-to-use platform, you can schedule your laundry pickup and delivery at your convenience, track the status of your order, and pay securely online.
                </Paragraph>
                <Row>
                  <Col md={4}>
                    <IconBox>
                      <Icon icon={faHandsHelping} />
                      <Paragraph><Highlight>Reliable Services</Highlight> - We offer top-notch laundry services with a focus on customer satisfaction.</Paragraph>
                    </IconBox>
                  </Col>
                  <Col md={4}>
                    <IconBox>
                      <Icon icon={faClock} />
                      <Paragraph><Highlight>Timely Delivery</Highlight> - We ensure quick turnaround times for all your laundry needs.</Paragraph>
                    </IconBox>
                  </Col>
                  <Col md={4}>
                    <IconBox>
                      <Icon icon={faRecycle} />
                      <Paragraph><Highlight>Eco-Friendly</Highlight> - Our processes are environmentally friendly, ensuring a greener planet.</Paragraph>
                    </IconBox>
                  </Col>
                </Row>
                <div className="text-center">
                  <ContactButton>Contact Us</ContactButton>
                </div>
              </div>
            </Col>
          </Row>
        </Box>
      </Container>
    </Section>
  );
};

export default About
