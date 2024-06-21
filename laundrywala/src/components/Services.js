import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";
import styled from "styled-components";

// Import your background image (adjust path as necessary)
import backgroundImage from "../images/1718893442214.jpg";

const services = [
  {
    src: require("../images/wash-iron.jpeg"),
    name: "Wash & Iron",
    title:
      "All your regular wear garments will be washed, steam ironed and neatly packed for delivery.",
    link: "/WashAndIron",
  },
  
  {
    src: require("../images/iron-fold.jpg"),
    name: "Iron & Fold",
    title:
      "Get back your dirty clothes. Your clothes we will ironed and pressed to look the best for you.",
    link: "/IronAndFold",
  },
  {
    src: require("../images/dry-cleaning.webp"),
    name: "Dry Cleaning",
    title:
      "All your sensitive and special garments will be individually treated for any stains and dry cleaned.",
    link: "/DryCleaning",
  },
  {
    src: require("../images/emergency.jpg"),
    name: "Emergency Service",
    title:
      "You can use our emergency service to receive services easily and quickly in our machines using very safe. ",
    link: "/EmergencyService",
  },
  {
    src: require("../images/wash-fold.jpg"),
    name: "Wash & Steam",
    title:
      "Our services combine modern technology with eco-friendly practices to deliver impeccably clean, fresh, and well-pressed laundry.",
    link: "/WashAndSteam",
  },
];

const Section = styled.section`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  padding: 50px 0;
`;

const ServiceCard = styled(Card)`
  background-color: #fff;
  border: none;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  position: relative;
  cursor: pointer;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }
  &:hover .service-overlay {
    opacity: 1;
  }
`;

const ServiceCardBody = styled(CardBody)`
  padding: 2rem;
  text-align: center;
`;

const ServiceTitle = styled(CardTitle)`
  color: ${({ selected }) => (selected ? "black" : "white")};
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const ServiceText = styled(CardText)`
  color: #666;
  font-size: 1.1rem;
`;

const ServiceButton = styled(Button)`
  background: linear-gradient(45deg, #007bff, #0056b3);
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  padding: 10px 20px;
  margin: 20px auto 0;
  display: block;
  cursor: pointer;
  transition: background 0.3s ease-in-out;

  &:hover {
    background: linear-gradient(45deg, #0056b3, #007bff);
  }
`;

const ServiceImage = styled(CardImg)`
  height: 200px;
  object-fit: cover;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

const ServiceOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 200px;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2));
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.2rem;
  font-weight: bold;
`;

const ServiceComponent = ({ service }) => (
  <Col md={4} className="d-flex justify-content-center mt-4">
    <ServiceCard>
      <ServiceImage src={service.src} top />
      <ServiceOverlay className="service-overlay">{service.name}</ServiceOverlay>
      <ServiceCardBody>
        <ServiceTitle tag="h3" selected={false}>{service.name}</ServiceTitle>
        <ServiceText>{service.title}</ServiceText>
        <Link to={service.link}>
          <ServiceButton color="primary">Select Service</ServiceButton>
        </Link>
      </ServiceCardBody>
    </ServiceCard>
  </Col>
);

const Services = () => (
  <Section id="services">
    <Container>
      <div className="d-flex justify-content-center py-3">
        <h2 className="text-title head-title">Our Services</h2>
      </div>
      <Row>
        {services.map((service, index) => (
          <ServiceComponent key={index} service={service} />
        ))}
      </Row>
      
    </Container>
  </Section>
);

export default Services;
