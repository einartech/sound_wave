import React from "react";
import styled from "styled-components";
import girlImage from "../../assets/images/landing-page-girl.png";

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
  width: 300px;
  height: 300px;
  background-color: #bc3a801a;
  top: 100px;
  left: 50px;
`;

const Circle2 = styled(Circle)`
  width: 500px;
  height: 500px;
  background-color: #3457b21a;
  top: 500px;
  right: 100px;
`;

const Circle3 = styled(Circle)`
  width: 300px;
  height: 300px;
  background-color: #3457b21a;
  bottom: 50px;
  left: 200px;
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
  }

  h1 {
    font-size: 2.8rem;
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

const Main = () => {
  return (
    <GirlSection>
      <Circle1 />
      <Circle2 />
      <Circle3 />
      <LeftSection>
        <img src={girlImage} alt="Girl listening to music" />
      </LeftSection>
      <RightSection>
        <h1>Feel The Music</h1>
        <p>Stream over 20 thousand songs with one click</p>
        <ButtonFocus>Join Now</ButtonFocus>
      </RightSection>
    </GirlSection>
  );
};

export default Main;

/*
import React from "react";
import style from "./Main.module.css";
import H2Title from "../TitleH2/h2Title"
import PlainText from "../PlainText/PlainText";
import Icons from "../Icons/Icons";
import iconsImage from "../../assets/images/microphone.svg";
import moreIcon from "../../assets/images/more.svg";
import AlbumsIcon from "../../assets/images/albums.svg";

function Main() {
  return (
    <div className={style["main-container"]}>
      <section className={style["left-section"]}></section>


        <section className={style["right-section"]}>
        <H2Title text = "text"/>
        <PlainText text = "text"/>
        <Icons
        img={iconsImage}
        text= "Charts"
        alt= "microphone icon"
        width= "100px"
        height= "100px"
        />
         <Icons
        img={AlbumsIcon}
        text= "Albums"
        alt= "Albums icon"
        width= "100px"
        height= "100px"
        />
          <Icons
        img={moreIcon}
        text= "More"
        alt= "more icon"
        width= "100px"
        height= "100px"
        />
       
      </section>
    </div>
  );
}

export default Main;
*/