import { useState } from "react";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import styled from "styled-components";

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);

  const openNav = () => {
    setBurgerStatus(true);
  };

  const closeNav = () => {
    setBurgerStatus(false);
  };
  return (
    <Container>
      <a>
        <img src="./images/logo.svg" alt="" />
      </a>

      <Menu>
        <a href="./model-s">Model S</a>

        <a href="./model-3">Model 3</a>

        <a href="./model-y">Model Y</a>

        <a href="./model-x">Model X</a>
      </Menu>

      <RightMenu>
        <a href="./shop">Shop</a>
        <a href="./account">Tesla Account</a>
        <CustomMenu onClick={openNav} />
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CustomClose onClick={closeNav}>
          <CloseIcon />
        </CustomClose>
        <li>
          <a href="./in">Existing Inventory</a>
        </li>
        <li>
          <a href="./in">Used Inventory</a>
        </li>
        <li>
          <a href="./in">Trade in</a>
        </li>
        <li>
          <a href="./in">Cyber Truck</a>
        </li>
        <li>
          <a href="./in">Roasdster</a>
        </li>
        <li>
          <a href="./in">Gift Shop</a>
        </li>
        <li>
          <a href="./in">Repairs</a>
        </li>
        <li>
          <a href="./in">Spares</a>
        </li>
        <li>
          <a href="./in">Engine</a>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 999;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
`;
const Menu = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    /* padding: 0 10px; */
    flex-wrap: nowrap;
    margin-right: 10px;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.7);
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 150px 30px;
  text-align: start;
  transition: transform 0.3s linear;
  /* position: relative; */
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};

  li {
    list-style-type: none;
    margin-bottom: 20px;
    border-bottom: 1px solid black;
    a {
      color: #000000;
      text-decoration: none;
      font-size: 16px;
      text-transform: uppercase;
      font-weight: 600;
    }
  }
`;

const CustomClose = styled(CloseIcon)`
  margin-bottom: 20px;
  cursor: pointer;
`;
