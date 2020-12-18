import { Button, Col, Row } from "antd";
import React from "react";
import styled from "styled-components";

const H1 = styled.h1`
  color: white;
  font-size: 4rem;
  padding: 4rem;
`;
const COL = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledButton = styled(Button)`
  background: none;
  height: 2.5rem;
  border: 2px solid white;
  color: white;
  &:hover {
    border: 2px solid white;
    color: black;
  }
`;
const Banner = () => {
  return (
    <Row>
      <COL offset={2} />
      <COL
        xs={24}
        sm={24}
        md={13}
        lg={13}
        xl={13}
        span={13}
        style={{ backgroundColor: "#2d132c" }}
      >
        <H1>
          Find out more <br /> about how we work.
        </H1>
      </COL>
      <COL
        xs={24}
        sm={24}
        md={7}
        lg={7}
        xl={7}
        span={7}
        style={{ backgroundColor: "#2d132c" }}
      >
        <StyledButton>
          <p style={{ fontSize: "1rem" }}>How We Work</p>
        </StyledButton>
      </COL>
      <COL offset={2} />
    </Row>
  );
};
export default Banner;
