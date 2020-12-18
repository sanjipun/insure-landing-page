import { Col, Divider, Row } from "antd";
import React from "react";
import styled from "styled-components";
import "../styles.css";

const ICON = styled.i`
  font-size: 2rem;
  padding: 0.5rem;
  color: #525252;
  cursor: pointer;
  transition: all 0.2s ease-out;
  &:hover {
    color: #212121;
  }
`;
const COL = styled(Col)`
  display: block;
  justify-content: center;
  align-items: center;
`;
const Footer = () => {
  return (
    <Row
      style={{ marginTop: "5rem", backgroundColor: "#ececec", padding: "5rem" }}
    >
      <Col offset={2} />
      <Col
        span={20}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <h1 style={{ fontFamily: "Orbitron" }}>Insure</h1>
        <div>
          <ICON className="fab fa-facebook-square"></ICON>
          <ICON className="fab fa-twitter-square"></ICON>
          <ICON className="fab fa-pinterest-square"></ICON>
          <ICON className="fab fa-instagram-square"></ICON>
        </div>
      </Col>

      <Col offset={2} />
      <Divider
        style={{ backgroundColor: "black", border: "2px solid black" }}
      />
      <Col offset={2} />
      <COL span={5} xs={24} sm={12} md={5} lg={5} xl={5}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <h1>Our Company</h1>
        </div>
        <div style={{ textAlign: "center" }}>
          <h3>How we work?</h3>
          <h3>Why Insure?</h3>
          <h3>View Plans</h3>
          <h3>Reviews</h3>
        </div>
      </COL>
      <COL span={5} xs={24} sm={12} md={5} lg={5} xl={5}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <h1>Help Me</h1>
        </div>
        <div
          style={{
            textAlign: "center"
          }}
        >
          <h3>FAQ</h3>
          <h3>Terms of Use</h3>
          <h3>Privacy Policies</h3>
          <h3>Cookies</h3>
        </div>
      </COL>
      <COL span={5} xs={24} sm={12} md={5} lg={5} xl={5}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center"
          }}
        >
          <h1>Contact</h1>
        </div>
        <div
          style={{
            textAlign: "center"
          }}
        >
          <h3>Sales</h3>
          <h3>Support</h3>
          <h3>Live Chat</h3>
        </div>
      </COL>
      <COL span={5} xs={24} sm={12} md={5} lg={5} xl={5}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <h1>Others</h1>
        </div>
        <div
          style={{
            textAlign: "center"
          }}
        >
          <h3>Careers</h3>
          <h3>Press</h3>
          <h3>Licenses</h3>
        </div>
      </COL>
      <Col offset={2} />
    </Row>
  );
};
export default Footer;
