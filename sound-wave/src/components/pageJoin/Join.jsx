import React from "react";
import styled from "styled-components";
import Form from "../Form/Form";
import Header from "../header/Header";
import Footer from "../footer/Footer";
//import Title from "../Title/Title";
/*
const MainDiv = styled.section`
  display: flex;
 /* flex-direction: row;*//*
  height: 100vh;
  color: white;
  overflow: hidden;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    height: 100vh;
    justify-content: center;
    align-items: center;
  }
`;

const Circle = styled.div`
  position: absolute;
  border-radius: 50%;
  opacity: 0.5;
`;

const Circle1 = styled(Circle)`
  width: 550px;
  height: 550px;
  background-color: #bc3a801a;
  left: -165px;
  bottom: 100px;

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
    left: 20px;
  }
`;

const Circle2 = styled(Circle)`
  width: 450px;
  height: 450px;
  background-color: #3457b21a;
  top: -210px;
  left: 300px;

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
    top: 20px;
    left: 130px;
  }
`;

const LeftSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: right;
  text-align: left;
  align-items: center;
  margin: 100px;
  bottom: 45px;
`;

const RightSection = styled.div`
  flex: 1;
  flex-direction: column;
  position: relative;
  top: 250px;
  justify-content: center;
  text-align: left;

  @media (max-width: 768px) {
    flex-direction:row;
    align-items: flex-bottom;
    height: 50vh;
    padding-left: 1em;
  margin-bottom: 20px;
  }

  h1 {
    font-size: 2.5rem;
    font-weight: 500;
    margin-bottom: 10px;
  
  

    @media (max-width: 768px) {
    font-size: 2rem;

    }
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
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
        <Title text1="Join the " text2="Fun." />  
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
*/


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
  font-weight: 500;
  margin-bottom: 10px;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 2rem;
    white-space: normal;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Highlight = styled.span`
  color: #ff00ff; 
  
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
    padding-left: 0;
    text-align: center;
  }
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 100px;

  @media (max-width: 768px) {
    padding-right: 0;
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
          {/* <Title text1="Join the " text2="fun." /> */}
          <StyledTitle>
            Join The <Highlight>Fun</Highlight>
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
