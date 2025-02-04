import React from "react";
import styled from "styled-components";
import Form from "../../components/form/Form";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const MainDiv = styled.section`
  display: flex;
  height: 100vh;
  color: white;
  overflow: hidden;
  position: relative;
  background-color: #181a20;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
  }
`;

const StyledTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 10px;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 3rem;
    white-space: normal;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    left: -1em;
    top: -1em;
  }
`;

const Highlight = styled.span`
  color: #bc3a80;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Circle = styled.div`
  position: absolute;
  border-radius: 50%;
  opacity: 0.3;
`;

const Circle1 = styled(Circle)`
  width: 500px;
  height: 500px;
  background-color: #bc3a801a;
  left: -150px;
  bottom: 50px;

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
    left: 20px;
  }
`;

const Circle2 = styled(Circle)`
  width: 400px;
  height: 400px;
  background-color: #3457b21a;
  top: -180px;
  right: 100px;

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
    top: 10px;
    right: 50px;
  }
`;

const LeftSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 100px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const RightSection = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-right: 25%;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    bottom: 10em;
    width: 100%;
    padding: 1.2em;
  }
`;

const Join = () => {
  return (
    <>
      <Header />
      <MainDiv>
        <Circle1 />
        <Circle2 />
        <LeftSection>
          <StyledTitle>
            Join the <Highlight>fun.</Highlight>
          </StyledTitle>
        </LeftSection>
        <RightSection>
          <Form />
        </RightSection>
      </MainDiv>
      <Footer />
    </>
  );
};

export default Join;
