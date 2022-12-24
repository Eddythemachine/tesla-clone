import React from "react";
import styled from "styled-components";
import { Slide, Bounce, Fade } from "react-awesome-reveal";

function Sections({
  title,
  description,
  backgroundImage,
  leftButton,
  RightButtons,
}) {
  return (
    <Wrap bgImage={backgroundImage}>
      <ItemText>
        <Slide>
          <h1>{title}</h1>
        </Slide>
        <Fade>
          <p>{description} </p>
        </Fade>
      </ItemText>
      <Buttons>
        <ButtonGroup>
          <Bounce>
            <LeftButton>{leftButton} </LeftButton>
          </Bounce>
          <Bounce>
            {RightButtons && <RightButton>{RightButtons} </RightButton>}
          </Bounce>
        </ButtonGroup>
        <DownArrow src="./images/down-arrow.svg"></DownArrow>
      </Buttons>
    </Wrap>
  );
}

export default Sections;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background: url("./images/model-s.jpg") center center/cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => `url("${props.bgImage}")`} center center/cover;
`;
const ItemText = styled.div`
  padding-top: 15vh;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 720px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
  transition: 0.3s all linear;
  :hover {
    box-shadow: 0px 0px 5px 1px white;
  }
`;

const RightButton = styled(LeftButton)`
  background: white;
  color: black;
  :hover {
    box-shadow: 0px 0px 5px 1px black;
  }
`;

const DownArrow = styled.img`
  margin-top: 20px;
  height: 40px;
  animation: arrowDown infinite 1.5s;
`;

const Buttons = styled.div``;
