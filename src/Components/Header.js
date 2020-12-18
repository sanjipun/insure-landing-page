import { Button, Col, Row } from "antd";
import React from "react";
import styled from "styled-components";
import { HeaderList } from "../Files/HeaderList";

const DivWrapper = styled.div`
  background-color: white;
  color: #1a1a2e;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const H1 = styled.h1`
  padding: 0 10px;
  font-family: Orbitron;
`;
const P = styled.p`
  cursor: pointer;
  padding: 1rem;
  font-size: 1rem;
  background-color:${({ plan }) => (plan ? "#2d132c" : null)}
  color: #525252;
  &:hover {
    color: #212121;
  }
`;
const StyledButton = styled(Button)`
  background: none;
  height: 3rem;
  border: 2px solid black;
  color: black;
  &:hover {
    border: 2px solid #2d132c;
    color: white;
    background-color: #2d132c;
  }
`;
const Header = () => {
  return (
    <Row>
      <Col offset={2} />
      <Col span={20}>
        <DivWrapper>
          <H1>Insure</H1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            {HeaderList.map((item) => {
              return (
                <div key={item.title}>
                  <P plan={item.plan}>
                    {item.plan ? (
                      <StyledButton>{item.title}</StyledButton>
                    ) : (
                      item.title
                    )}
                  </P>
                </div>
              );
            })}
          </div>
        </DivWrapper>
      </Col>
      <Col offset={2} />
    </Row>
  );
};
export default Header;
