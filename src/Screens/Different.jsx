import { Col, Row } from "antd";
import React from "react";
import styled from "styled-components";

const COL = styled(Col)`
  display: block;
  justify-content: center;
  align-items: center;
`;
const DIV = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ICON = styled.i`
  font-size: 5rem;
`;
const Different = () => {
  return (
    <Row style={{ marginTop: "10rem" }}>
      <Col offset={3} />
      <COL span={6} xs={24} sm={24} md={8} lg={6} xl={6}>
        <DIV>
          <ICON className="fas fa-bolt"></ICON>
        </DIV>
        <DIV>
          <h1>Snappy Process</h1>
        </DIV>
        <DIV>
          <p style={{ display: "block", padding: "1rem" }}>
            Our application process can be completed in minutes, not hours.
            Don’t get stuck filling in tedious forms.
          </p>
        </DIV>
      </COL>
      <COL span={6} xs={24} sm={24} md={8} lg={6} xl={6}>
        <DIV>
          <ICON className="fas fa-dollar-sign"></ICON>
        </DIV>
        <DIV>
          <h1>Affordable Prices</h1>
        </DIV>
        <DIV>
          <p style={{ display: "block", padding: "1rem" }}>
            We don’t want you worrying about high monthly costs. Our prices may
            be low, but we still offer the best coverage possible.
          </p>
        </DIV>
      </COL>
      <COL span={6} xs={24} sm={24} md={8} lg={6} xl={6}>
        <DIV>
          <ICON className="fas fa-user"></ICON>
        </DIV>
        <DIV>
          <h1>People First</h1>
        </DIV>
        <DIV>
          <p style={{ display: "block", padding: "1rem" }}>
            Our plans aren’t full of conditions and clauses to prevent payouts.
            We make sure you’re covered when you need it.
          </p>
        </DIV>
      </COL>
      <Col offset={3} />
    </Row>
  );
};
export default Different;
