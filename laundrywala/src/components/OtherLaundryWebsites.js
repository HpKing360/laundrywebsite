import React, { useState } from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import styled from 'styled-components';

const Section = styled.section`
background: #9CECFB;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #0052D4, #65C7F7, #9CECFB);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #0052D4, #65C7F7, #9CECFB); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  padding: 50px 0;
`;

const CompanyCard = styled(Card)`
  background: linear-gradient(89.2deg, rgb(191, 241, 236) 22.3%, rgb(109, 192, 236) 84.1%);
  border: none;
  border-radius: 15px;
  overflow: hidden;
  margin-bottom: 20px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
`;

const CompanyCardBody = styled(CardBody)`
  text-align: center;
`;

const CompanyName = styled(CardTitle)`
  color: #333;
  font-size: 1.5rem;
  font-weight: bold;
`;

const FurtherDetailsButton = styled(Button)`
  background-color: #0056b3;
  border: none;
  font-weight: bold;
  margin-top: 10px;

  &:hover {
    background-color: #004494;
  }
`;

const PremiumModal = styled(Modal)`
  .modal-content {
    background: linear-gradient(109.5deg, rgb(255, 255, 255) 9.4%, rgb(240, 240, 240) 78.4%);
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  }
`;

const ModalHeaderStyled = styled(ModalHeader)`
  border-bottom: none;
  font-size: 1.75rem;
  font-weight: bold;
  color: #333;
`;

const ModalBodyStyled = styled(ModalBody)`
  padding: 2rem;
  color: #666;
  font-size: 1.2rem;
  line-height: 1.5;
`;

const OtherLaundryWebsites = () => {
  const [modal, setModal] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState(null);

  const toggleModal = (company = null) => {
    setSelectedCompany(company);
    setModal(!modal);
  };

  const companies = [
    {
      name: 'Tumble Dry (Online/Offline)',
      description: 'Wash & Fold: ₹80/kg with packing. Providing services within 48 hrs.',
      additional: 'Wash & Steam: ₹120 per kg'
    },
    {
      name: 'LaundroKart.com (Online/Offline)',
      description: 'Wash & Fold: ₹75/kg \n Pickup & Drop: ₹50',
      additional: 'Wash & Iron: ₹99/kg',
    },
    {
      name: 'Clean Genie Express Laundry (Offline)',
      description: 'Wash & Fold: Minimum 3kg for ₹169. Additional ₹46/kg for more than 3kg.',
      additional: 'Wash & Iron: ₹169 for 3kg. Ironing: ₹10 per cloth. Dry cleaning: Shirt/Pant ₹85, Blazer ₹200, Others ₹149. Pickup and drop free.',
    },
    {
      name: 'Coin Laundromart',
      description: '0-6kg: ₹260, 6-12kg: ₹500',
      additional: ''
    },
    {
      name: 'One Wash Laundry',
      description: 'Ironing, Wash & Fold, Delivery, Dry Cleaning, Laundry Pickup',
      additional: ''
    },
    {
      name: 'A1 Laundry Service',
      description: 'Provide some related information here.',
      additional: ''
    },
    {
      name: 'Instawash Laundry',
      description: 'Using online services for laundry.',
      additional: ''
    }
  ];

  return (
    <Section>
      <Container>
        <h2 className="text-center text-white mb-4">Other Laundry Websites</h2>
        <Row>
          {companies.map((company, index) => (
            <Col md={6} lg={4} key={index}>
              <CompanyCard>
                <CompanyCardBody>
                  <CompanyName>{company.name}</CompanyName>
                  <FurtherDetailsButton onClick={() => toggleModal(company)}>
                    Further Details
                  </FurtherDetailsButton>
                </CompanyCardBody>
              </CompanyCard>
            </Col>
          ))}
        </Row>
      </Container>
      {selectedCompany && (
        <PremiumModal isOpen={modal} toggle={toggleModal}>
          <ModalHeaderStyled toggle={toggleModal}>{selectedCompany.name}</ModalHeaderStyled>
          <ModalBodyStyled>
            <p>{selectedCompany.description}</p>
            <p>{selectedCompany.additional}</p>
          </ModalBodyStyled>
        </PremiumModal>
      )}
    </Section>
  );
};

export default OtherLaundryWebsites;
