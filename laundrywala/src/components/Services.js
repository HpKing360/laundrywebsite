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

const services = [
  {
    src: require("../images/wash-iron.jpeg"),
    name: "Wash & Iron",
    title:
      "All your regular wear garments will be washed, steam ironed and neatly packed for delivery.",
    link: "/WashAndIron",
  },
  {
    src: require("../images/wash-fold.jpg"),
    name: "Wash & Fold",
    title:
      "Just in case you choose not to use our steam ironing services we will wash and fold them for you.",
    link: "/WashAndFold",
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
background: linear-gradient(45deg, #000850 0%, #000320 100%), radial-gradient(100% 225% at 100% 0%, #FF6928 0%, #000000 100%), linear-gradient(225deg, #FF7A00 0%, #000000 100%), linear-gradient(135deg, #CDFFEB 10%, #CDFFEB 35%, #009F9D 35%, #009F9D 60%, #07456F 60%, #07456F 67%, #0F0A3C 67%, #0F0A3C 100%);
background-blend-mode: screen, overlay, hard-light, normal;
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
  color: #333;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const ServiceText = styled(CardText)`
  color: #666;
  font-size: 1.1rem;
`;

const ServiceButton = styled(Button)`
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: #0056b3;
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

const Service = ({ service }) => (
  <Col md={4} className="d-flex justify-content-center mt-4">
    <ServiceCard>
      <ServiceImage src={service.src} top />
      <ServiceOverlay className="service-overlay">{service.name}</ServiceOverlay>
      <ServiceCardBody>
        <ServiceTitle tag="h3">{service.name}</ServiceTitle>
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
          <Service key={index} service={service} />
        ))}
      </Row>
      <div className="d-flex justify-content-center py-4">
        <Link to="/PriceList">
          <ServiceButton>Price List</ServiceButton>
        </Link>
      </div>
    </Container>
  </Section>
);

export default Services;
