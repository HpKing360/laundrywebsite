import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, CardBody, CardTitle, Button, CardText, Badge } from 'reactstrap';
import styled from 'styled-components';
import backgroundImage from '../images/1718895639011.jpg';

const Section = styled.section`
  background-image: url(${backgroundImage});
  padding: 50px 0;
`;

const CompanyCard = styled(Card)`
  background-color: white;
  border: none;
  border-radius: 15px;
  overflow: hidden;
  margin-bottom: 20px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  position: relative;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
`;

const CompanyCardBody = styled(CardBody)`
  text-align: center;
  padding-top: 20px;
`;

const CompanyName = styled(CardTitle)`
  color: #333;
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 20px; /* Ensure enough space from the tag */
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

const Rating = styled.div`
  color: #ffbf00;
  font-size: 1.2rem;
  margin: 5px 0;
`;

const Tag = styled(Badge)`
  background-color: ${props => (props.type === 'best' ? '#ffbf00' : '#ff4d4d')}; /* Yellow for Best, Red for Popular */
  color: #fff;
  font-size: 0.9rem;
  padding: 5px 10px;
  border-radius: 5px;
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 1;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

const OtherLaundryWebsites = () => {
  const navigate = useNavigate();

  const companies = [
    {
      name: 'Tumble Dry (Online/Offline)',
      description: 'Wash & Fold: ₹80/kg with packing. Providing services within 48 hrs. Wash & Steam: ₹120 per kg.',
      location: 'Bellandur, Bangalore',
      link: 'https://maps.app.goo.gl/zgtchEyzugZBU32UA',
      rating: 4.5,
      tag: 'best'
    },
    {
      name: 'LaundroKart.com (Online/Offline)',
      description: 'Wash & Fold: ₹75/kg. Pickup & Drop: ₹50. Wash & Iron: ₹99/kg.',
      location: 'Doddakannelli, Bangalore',
      link: 'https://maps.app.goo.gl/g5ns7mWq2tbrGTEh8',
      rating: 4.7,
      tag: 'popular'
    },
    {
      name: 'Clean Genie Express Laundry (Offline)',
      description: 'Wash & Fold: Minimum 3kg for ₹169. Additional ₹46/kg for more than 3kg. Wash & Iron: ₹169 for 3kg. Ironing: ₹10 per cloth. Dry cleaning: Shirt/Pant ₹85, Blazer ₹200, Others ₹149.',
      location: 'Whitefield, Bangalore',
      link: 'https://maps.app.goo.gl/gHpYnQ5TvV15CYsX8',
      rating: 4.3,
      tag: ''
    },
    {
      name: 'Coin Laundromart',
      description: '0-6kg: ₹260, 6-12kg: ₹500',
      location: 'Kasavanahalli Village, Munnekollal, Bangalore',
      link: 'https://maps.app.goo.gl/9Khm2Xk2ZPXMnMEq5',
      rating: 4.0,
      tag: ''
    },
    {
      name: 'One Wash Laundry',
      description: 'Ironing, Wash & Fold, Delivery, Dry Cleaning, Laundry Pickup',
      location: 'Aswath Nagar, Marathahalli, Bangalore',
      link: 'https://maps.app.goo.gl/xcJ7eNb5NW1gr9Zh7',
      rating: 4.4,
      tag: ''
    },
    {
      name: 'A1 Laundry Service',
      description: 'Provide some related information here.',
      location: 'Trinity school road, Marathahalli, Bangalore',
      link: 'https://maps.app.goo.gl/zVkMGHFDEAwqhzpf6',
      rating: 3.8,
      tag: ''
    },
    {
      name: 'Instawash Laundry',
      description: 'Using online services for laundry.',
      location: 'Marathahalli, Bangalore',
      link: 'https://maps.app.goo.gl/Hz7ZKY3RTk6MEFU99',
      rating: 4.2,
      tag: ''
    }
  ];

  const navigateToDetails = (company) => {
    navigate('/company-details', { state: { company } });
  };

  return (
    <Section>
      <Container>
        <h2 className="text-center text-white mb-4">Other Laundry Websites</h2>
        <Row>
          {companies.map((company, index) => (
            <Col md={6} lg={4} key={index}>
              <CompanyCard>
                {company.tag && <Tag type={company.tag}>{company.tag === 'best' ? 'Best' : 'Popular'}</Tag>}
                <CompanyCardBody>
                  <CompanyName>{company.name}</CompanyName>
                  <CardText>{company.location}</CardText>
                  <Rating>⭐ {company.rating}</Rating>
                  <FurtherDetailsButton onClick={() => navigateToDetails(company)}>
                    Further Details
                  </FurtherDetailsButton>
                </CompanyCardBody>
              </CompanyCard>
            </Col>
          ))}
        </Row>
      </Container>
    </Section>
  );
};

export default OtherLaundryWebsites;
