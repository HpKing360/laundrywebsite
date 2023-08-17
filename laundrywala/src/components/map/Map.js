import React from "react";
import { Card, CardBody, CardTitle, Col, Container, Row } from "reactstrap";

const Map = () => {
  return (
    <>
      <section className="mb-5 py-5" id="google_map">
        <Container>
          <div className="d-flex justify-content-center mt-5">
            <h2 className="text-title head-title">Google Map</h2>
          </div>
          <Row>
            <Col md={4} className="d-flex justify-content-center mt-4">
              <Card style={{ width: "20rem" }}>
                <iframe
                  title="Jamal khan"
                  src="https://maps.google.com/maps?amp;hl=en&amp;q=Jamal khan, chittagong&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe>
                <CardBody>
                  <CardTitle tag="h5" className="text-danger">
                    Jamal khan Brance
                  </CardTitle>
                </CardBody>
              </Card>
            </Col>
            <Col md={4} className="d-flex justify-content-center mt-4">
              <Card style={{ width: "20rem" }}>
                <iframe
                  title="Jamal khan"
                  src="https://maps.google.com/maps?amp;hl=en&amp;q=Agrabad, chittagong&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe>
                <CardBody>
                  <CardTitle tag="h5" className="text-danger">
                    Agrabad Brance
                  </CardTitle>
                </CardBody>
              </Card>
            </Col>
            <Col md={4} className="d-flex justify-content-center mt-4">
              <Card style={{ width: "20rem" }}>
                <iframe
                  title="Jamal khan"
                  src="https://maps.google.com/maps?amp;hl=en&amp;q=Patharghata, chittagong&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe>
                <CardBody>
                  <CardTitle tag="h5" className="text-danger">
                    Patharghata Brance
                  </CardTitle>
                </CardBody>
              </Card>
            </Col>
            <Col md={4} className="d-flex justify-content-center mt-4">
              <Card style={{ width: "20rem" }}>
                <iframe
                  title="Jamal khan"
                  src="https://maps.google.com/maps?amp;hl=en&amp;q=Chawkbazar, chittagong&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe>
                <CardBody>
                  <CardTitle tag="h5" className="text-danger">
                    Chawkbazar Brance
                  </CardTitle>
                </CardBody>
              </Card>
            </Col>
            <Col md={4} className="d-flex justify-content-center mt-4">
              <Card style={{ width: "20rem" }}>
                <iframe
                  title="Jamal khan"
                  src="https://maps.google.com/maps?amp;hl=en&amp;q=gec, chittagong&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe>
                <CardBody>
                  <CardTitle tag="h5" className="text-danger">
                    GEC Brance
                  </CardTitle>
                </CardBody>
              </Card>
            </Col>
            <Col md={4} className="d-flex justify-content-center mt-4">
              <Card style={{ width: "20rem" }}>
                <iframe
                  title="Bahaddarhat"
                  src="https://maps.google.com/maps?amp;hl=en&amp;q=Bahaddarhat, chittagong&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe>
                <CardBody>
                  <CardTitle tag="h5" className="text-danger">
                    Bahaddarhat Brance
                  </CardTitle>
                </CardBody>
              </Card>
            </Col>
            <Col md={4} className="d-flex justify-content-center mt-4">
              <Card style={{ width: "20rem" }}>
                <iframe
                  title="Jamal khan"
                  src="https://maps.google.com/maps?amp;hl=en&amp;q=Dewanhat, chittagong&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe>
                <CardBody>
                  <CardTitle tag="h5" className="text-danger">
                    Dewanhat Brance
                  </CardTitle>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Map;
