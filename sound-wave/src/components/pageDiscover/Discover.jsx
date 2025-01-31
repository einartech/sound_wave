import React from "react";
import styled from "styled-components";
import Header from "../header/Header";
import cover from "../../assets/images/covers.jpg";
import Icons from "../Icons/Icons";
import H2Title from "../title2/h2Title";
import PlainText from "../PlainText/PlainText";
import iconsMic from "../../assets/images/microphone.svg";
import iconsAlbum from "../../assets/images/albums.svg";
import iconsMore from "../../assets/images/more.svg";
import Footer from "../Footer/Footer";


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

const LeftSection = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-right: 1em;
  width: 50%;

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

  img {
    height: 20rem;
    width: 20rem;
    z-index: 0;
  }

  @media (max-width: 768px) {
    justify-content: flex-start;
    align-items: flex-start;
    height: 50vh;
    padding-left: 1em;
    margin-bottom: 200px;
  }

  /* p {
    font-size: 1.2rem;
    margin-bottom: 50rem;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    } */
  }
`;

const Discover = () => {
  return (
    <>
    <Header />
    <GirlSection>
      <LeftSection>
        <H2Title text="Discover new music" />
        <Icons
          img={iconsMic}
          text="Charts"
          alt="microphone icon"
        />
        <Icons
          img={iconsAlbum}
          text="Albums"
          alt="albums icon"
        />
        <Icons
          img={iconsMore}
          text="More"
          alt="more icon"
        />
        <PlainText text="By joining you can benefit by listening to the latest albums released." />
      </LeftSection>
      <RightSection>
        <img src={cover} alt="image of different album covers" />
      </RightSection>
    </GirlSection>
    <Footer />
    </>
  );
};

export default Discover;
