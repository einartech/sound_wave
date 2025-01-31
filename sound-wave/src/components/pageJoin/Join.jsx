import React from "react";
import styled from "styled-components";
import girlImage from "../../assets/images/landing-page-girl.png";
import Form from "../Form/Form"
import Header from "../header/Header";
import Footer from "../Footer/Footer";

const TitleSection = styled.section`
  display: flex;
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
  width: 350px;
  height: 350px;
  background-color: #bc3a801a;
  left: 130px;
  bottom: 100px;

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
    left: 20px;
  }
`;

const Circle2 = styled(Circle)`
  width: 350px;
  height: 350px;
  background-color: #3457b21a;
  top: 60px;
  left: 500px;

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
  align-items: flex-end;
  justify-content: right;
  margin-right: 4.5em;

  img {
    max-width: 350px;
    bottom: 0;
    z-index: 0;

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;

  @media (max-width: 768px) {
    justify-content: flex-start;
    align-items: flex-start;
    height: 50vh;
    padding-left: 1em;
    margin-bottom: 200px;
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

const ButtonFocus = styled.button`
  width: 120px;
  padding: 8px 16px;
  font-size: 0.9rem;
  color: white;
  background-color: #2796ff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #2180d8;
  }
`;

const Join = () => {
  return (
    <>
      <Header />
      <TitleSection>
        <Circle1 />
        <Circle2 />
        <h1>JOIN THE FUN</h1>
      </LeftSection>
      <RightSection>
        <Form />
      </RightSection>
    </GirlSection>
  );
};

export default Join;
