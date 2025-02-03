import React from "react";
import styled from "styled-components";
import girlImage from "../../assets/images/landing-page-girl.png";
import Header from "../header/Header";


const GirlSection = styled.section`
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
  width: 370px;
  height: 370px;
  background-color: #bc3a801a;
  left: 125px;
  bottom: 130px;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
    left: 50px;
  }
`;

const Circle2 = styled(Circle)`
  width: 370px;
  height: 370px;
  background-color: #3457b21a;
  /* top: 60px;*/
  left: 500px;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
    top: 0;
    left: 100px;
  }
`;

const Circle3 = styled(Circle)`
  width: 500px;
  height: 500px;
  background-color: #3457b21a;
  bottom: -150px;
  right: -140px;

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
    bottom: 0;
    margin-bottom: 60px;
    right: -50px;
  }
`;

const LeftSection = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;
  justify-content: right;
  margin-right: 5em;

  img {
    max-width: 350px;
    bottom: 0;
    margin-bottom: 50px;
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
    align-items: left;
    text-align: left;
    margin-left: -50px;
   /* margin-left:-4em;*/
    margin-bottom: 300px;
  }

   h1{
    font-size: 2.5rem;
    font-weight: 500;
    margin-bottom: 10px;
    white-space: nowrap;

    @media (max-width: 768px) {
      font-size: 2rem;
      white-space: normal;

      span {
        display: block;
      }
    }
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 20px;

    @media (min-width: 769px) {
      &::after {
        content: " click";
        display: block;
      }
    }

    @media (max-width: 768px) {
      font-size: 0.9rem;

      &::after {
        content: " with one click";
        display: block;
      }
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

  @media (max-width: 768px) {
    width: 90px;
    padding: 5px 10px;
    font-size: 0.8rem;
  }
`;
const Home = () => {
  return (
    <>
      <Header />
      <GirlSection>
        <Circle1 />
        <Circle2 />
        <Circle3 />
        <LeftSection>
          <img src={girlImage} alt="Girl listening to music" />
        </LeftSection>
        <RightSection>
          <h1>
            Feel The <span>Music</span>
          </h1>
          <p>Stream over 20 thousand songs</p>
          <ButtonFocus>Join Now</ButtonFocus>
        </RightSection>
      </GirlSection>
    </>
  );
};

export default Home;
