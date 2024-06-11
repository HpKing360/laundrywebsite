import React, { useState } from "react";
import { Card, CardBody, CardTitle, Col, Container, Row } from "reactstrap";
import "./Map.css"; // Import CSS for styling

const Map = () => {
  // Define an array of nearby laundry services
  const nearbyLaundryServices = [
    { name: "Clean Clothes Laundry", location: "Koramangala, Bangalore" },
    { name: "Fresh Wash Laundry", location: "Indiranagar, Bangalore" },
    { name: "Pure Clean Laundry", location: "Marathahalli, Bangalore" },
    { name: "Crystal Clear Laundry", location: "JP Nagar, Bangalore" },
    { name: "Spotless Laundry", location: "Whitefield, Bangalore" },
    { name: "Sunshine Laundry", location: "HSR Layout, Bangalore" },
  ];

  return (
    <section className="mb-5 py-5" id="google_map">
      <Container>
        <div className="d-flex justify-content-center mt-5">
          <h2 className="text-title head-title">Nearby Laundry Services</h2>
        </div>
        <Row>
          {nearbyLaundryServices.map((service, index) => (
            <Col md={4} className="d-flex justify-content-center mt-4" key={index}>
              <Card className="laundry-card" style={{ width: "20rem" }}>
                <CardBody>
                  <CardTitle tag="h5" className="text-danger">
                    {service.name}
                  </CardTitle>
                  <p className="location">{service.location}</p>
                  <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(service.location)}`} target="_blank" rel="noopener noreferrer">View on Map</a>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Map;
