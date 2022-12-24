import React from "react";
import styled from "styled-components";
import Sections from "../components/Sections/Sections";

function Home() {
  return (
    <Container>
      <Sections
        title={"Model S"}
        description={"Order Online for Touchless Delivery"}
        backgroundImage={"./images/model-s.jpg"}
        leftButton={"Custom Oredr"}
        RightButtons={"EXISTING INVENTORY"}
      />
      <Sections
        title={"Model 3"}
        description={"Order Online for Touchless Delivery"}
        backgroundImage={"./images/model-3.jpg"}
        leftButton={"Custom Oredr"}
        RightButtons={"EXISTING INVENTORY"}
      />
      <Sections
        title={"Model X"}
        description={"Order Online for Touchless Delivery"}
        backgroundImage={"./images/model-x.jpg"}
        leftButton={"Custom Oredr"}
        RightButtons={"EXISTING INVENTORY"}
      />
      <Sections
        title={"Model Y"}
        description={"Order Online for Touchless Delivery"}
        backgroundImage={"./images/model-y.jpg"}
        leftButton={"Custom Oredr"}
        RightButtons={"EXISTING INVENTORY"}
      />
      <Sections
        title={"Lowest Cost Solar Panels in America"}
        description={"Money Back Gaurantee"}
        backgroundImage={"./images/solar-panel.jpg"}
        leftButton={"Order now"}
        RightButtons={"Learn more"}
      />{" "}
      <Sections
        title={"Accessories"}
        description={""}
        backgroundImage={"./images/accessories.jpg"}
        leftButton={"Shop now"}
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
