import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const NavbarContainer = styled.nav`
  background: linear-gradient(89.2deg, rgb(191, 241, 236) 22.3%, rgb(109, 192, 236) 84.1%);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  padding: 0.5rem 1rem;
  border: none; /* Remove border */
  box-shadow: none; /* Remove box-shadow */
`;

const Logo = styled.img`
  margin-left: 1rem;
  height: 50px;
`;

const NavbarHeader = styled.div`
  display: flex;
  align-items: center;
`;

const NavbarToggler = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  display: none;

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    display: block;
  }

  .navbar-toggler-icon {
    display: block;
    width: 25px;
    height: 2px;
    background-color: #333;
    margin: 5px 0;
  }
`;

const NavbarCollapse = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
    width: 100%;
    text-align: center;
  }
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const NavItem = styled.li`
  margin: 0 1rem;

  @media (max-width: 768px) {
    margin: 0.5rem 0;
  }
`;

const NavAnchor = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  font-size: 1.2rem; /* Increase font size */
  font-weight: bold;
  padding: 0.5rem 1rem; /* Add padding for better clickability */
  transition: color 0.3s, background-color 0.3s;

  &.active {
    color: #004494;
  }

  &:hover {
    color: #004494;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const customer = localStorage.getItem("cToken");
  const delivery = localStorage.getItem("dToken");

  // CUSTOMER LOGOUT
  const customerLogout = () => {
    localStorage.removeItem("cToken");
    localStorage.removeItem("cID");
    localStorage.removeItem("cName");
    window.location.href = "/";
  };

  // DELIVERY LOGOUT
  const deliveryLogout = () => {
    localStorage.removeItem("dToken");
    localStorage.removeItem("dID");
    window.location.href = "/";
  };

  return (
    <NavbarContainer>
      <NavbarHeader>
        <Link to="/">
          <Logo src={"default/logo.png"} alt={"Spin Cycles"} />
        </Link>
        <NavbarToggler onClick={toggleNavbar}>
          <div className="navbar-toggler-icon"></div>
          <div className="navbar-toggler-icon"></div>
          <div className="navbar-toggler-icon"></div>
        </NavbarToggler>
      </NavbarHeader>
      <NavbarCollapse isOpen={isOpen}>
        <NavList>
          <NavItem>
            <NavAnchor to="/" activeClassName="active" onClick={toggleNavbar}>
              Home
            </NavAnchor>
          </NavItem>
          <NavItem>
            <NavAnchor to="/services" activeClassName="active" onClick={toggleNavbar}>
              Services
            </NavAnchor>
          </NavItem>
          <NavItem>
            <NavAnchor to="/order" activeClassName="active" onClick={toggleNavbar}>
              Order
            </NavAnchor>
          </NavItem>
          <NavItem>
            <NavAnchor to="/map" activeClassName="active" onClick={toggleNavbar}>
              Maps
            </NavAnchor>
          </NavItem>
          {!customer ? (
            <NavItem>
              <NavAnchor to="/login" activeClassName="active" onClick={toggleNavbar}>
                Sign In
              </NavAnchor>
            </NavItem>
          ) : (
            <>
              <NavItem>
                <NavAnchor to="/customer" activeClassName="active" onClick={toggleNavbar}>
                  Dashboard
                </NavAnchor>
              </NavItem>
              <NavItem onClick={customerLogout}>
                <NavAnchor to="#" activeClassName="active" onClick={toggleNavbar}>
                  Sign Out
                </NavAnchor>
              </NavItem>
            </>
          )}
          {delivery && (
            <>
              <NavItem>
                <NavAnchor to="/delivery" activeClassName="active" onClick={toggleNavbar}>
                  Dashboard
                </NavAnchor>
              </NavItem>
              <NavItem onClick={deliveryLogout}>
                <NavAnchor to="#" activeClassName="active" onClick={toggleNavbar}>
                  Sign Out
                </NavAnchor>
              </NavItem>
            </>
          )}
        </NavList>
      </NavbarCollapse>
    </NavbarContainer>
  );
};

export default Navbar;
