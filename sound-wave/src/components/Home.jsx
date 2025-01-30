import React from "react";
import styled from "styled-components";
import girlImage from "../assets/images/landing-page-girl.png";


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

const Circle3 = styled(Circle)`
  width: 500px;
  height: 500px;
  background-color: #3457b21a;
  bottom: -150px;
  right: -150px;

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
    bottom: 0;
    right:-20px;
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
    text-align: left;
    height: 50vh;
    padding-left: 1em;
    margin-bottom:200px;
  }

  h1 {
    font-size: 2.5rem;
    font-weight: 500;
    margin-bottom: 10px;

    @media (max-width: 768px) {
      font-size: 2rem;
      span {
        display: block;
      }
    }
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      font-size: 1rem;
      span {
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
    width: 100px;
    padding: 5px 10px;
    font-size: 0.8rem;
  }
`;

const Home = () => {
  return (
    <GirlSection>
      <Circle1 />
      <Circle2 />
      <Circle3 />
      <LeftSection>
        <img src={girlImage} alt="Girl listening to music" />
      </LeftSection>
      <RightSection>
        <h1>Feel The <span>Music</span></h1>
        <p>Stream over 20 thousand songs<span>with one click</span></p>
        <ButtonFocus>Join Now</ButtonFocus>
      </RightSection>
    </GirlSection>
  );
};

export default Home;
