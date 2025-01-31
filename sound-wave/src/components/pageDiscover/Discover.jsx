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
  height: 50rem;
  color: white;
  overflow: hidden;
  justify-content: center;


  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    height: 100vh;
    justify-content: center;
    align-items: center;
  }
`;

  const LeftSection = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column; 
  align-items: flex-start; 
  width: 60%;
  padding: 1rem; 

  @media (max-width: 768px) {
  align-items: center;
  text-align: center;
  }
  `;

  const IconsContainer = styled.div`
  display: flex;
  gap: 3rem; 
  `;


const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 39rem;


  img {
    height: 22rem;
    width: 22rem;
    z-index: 0;
    margin: 2em;
  }

  @media (max-width: 768px) {
    justify-content: flex-start;
    align-items: flex-start;
    height: 50vh;
    padding-left: 1em;
    margin-bottom: 200px;
  }

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }
`;

const Discover = () => {
  return (
    <>
    <Header />
    <GirlSection>
    <LeftSection>
      <H2Title text="Discover new music" />

      <IconsContainer>
      <Icons img={iconsMic} text="Charts" alt="microphone icon" />
      <Icons img={iconsAlbum} text="Albums" alt="albums icon" />
      <Icons img={iconsMore} text="More" alt="more icon" />
      </IconsContainer>

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
