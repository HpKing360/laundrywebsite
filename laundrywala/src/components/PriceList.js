import React from "react";
import { Container, Table } from "reactstrap";
import styled from "styled-components";

const Section = styled.section`
  background: linear-gradient(89.2deg, rgb(191, 241, 236) 22.3%, rgb(109, 192, 236) 84.1%);
  padding: 20px 0;
  min-height: 50vh;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  color: #007bff;
  font-weight: bold;
  text-transform: uppercase;
`;

const PriceTable = styled(Table)`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }

  th {
    background-color: #007bff;
    color: #fff;
    font-weight: bold;
    text-transform: uppercase;
  }

  td,
  th {
    padding: 1.5rem;
    text-align: center;
    font-size: 1.1rem;
  }

  tbody tr:nth-child(odd) {
    background-color: #f9f9f9;
  }

  tbody tr:hover {
    background-color: #f0f0f0;
  }
`;

const PriceList = () => (
  <Section>
    <Container>
      <Title>Price List</Title>
      <PriceTable bordered hover>
        <thead>
          <tr>
            <th>Service</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Regular Laundry</td>
            <td>₹40-60 per piece (extra ₹30 for steam charge)</td>
          </tr>
          <tr>
            <td>Wash and Fold</td>
            <td>₹25 per piece</td>
          </tr>
          <tr>
            <td>Wash and Iron Fold</td>
            <td>₹45 per piece</td>
          </tr>
          <tr>
            <td>Pickup and Delivery</td>
            <td>₹49</td>
          </tr>
          <tr>
            <td>Dry Cleaning (Shirts)</td>
            <td>₹70</td>
          </tr>
          <tr>
            <td>Dry Cleaning (Pants)</td>
            <td>₹90</td>
          </tr>
          <tr>
            <td>24-Hour Service</td>
            <td>50% extra on regular wash price</td>
          </tr>
        </tbody>
      </PriceTable>
    </Container>
  </Section>
);

export default PriceList;
