import { Button, Col, Divider, Row } from "antd";
import React from "react";
import styled from "styled-components";
import img from "../Assets/image-intro-mobile.jpg";

const IMG = styled.img`
  height: 35rem;
  width: auto;
  margin-top: 5rem;
`;
const H1 = styled.h1`
  color: white;
  font-size: 4rem;
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
const Landing = () => {
  return (
    <Row
      style={{
        maxHeight: "35rem",
        margin: 0,
        padding: "1rem",
        backgroundColor: "#2d132c"
      }}
    >
      <Col offset={2} />
      <Col span={12} xs={24} sm={24} md={12} lg={12} xl={12}>
        <IMG src={img} alt="insure" />
      </Col>
      <Col span={8} xs={24} sm={24} md={8} lg={8} xl={8}>
        <Divider />
        <H1>Humanizing your insurance.</H1>
        <p style={{ color: "white", fontSize: "1rem" }}>
          Get your life insurance coverage easier and faster. We blend our
          expertise and technology to help you find the plan that’s right for
          you. Ensure you and your loved ones are protected.
        </p>
        <Divider />
        <StyledButton>
          <p style={{ fontSize: "1rem" }}>View Plans</p>
        </StyledButton>
      </Col>
      <Col offset={2} />
    </Row>
  );
};
export default Landing;
