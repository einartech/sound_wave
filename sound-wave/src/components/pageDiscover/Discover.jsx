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
  align-items:center;
  /* margin-top: 15rem; */
  margin-bottom: 15rem;
  margin-left: 1rem;
  margin-right: 1rem;

 @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    min-height: 100vh;
    height: auto;
    /* justify-content: center; */
    align-items: center;
    /* margin: 3rem */
  }
`;

  const LeftSection = styled.div`
  display: flex;
  justify-content: left;
  flex-direction: column; 
  align-items: flex-start; 
  /* width: 50%; */
  padding: 1rem; 

  @media (max-width: 768px) {
  /* align-items: center; */
  text-align: left;
  margin: 0.2rem;
  width: 100%;
  }
  `;

  const IconsContainer = styled.div`
  display: flex;
  gap: 1rem;
  `;


const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: right;
  height: 39rem;
  /* margin-top: -2rem; */

  img {
   width: 100%;
   max-width: 15rem;
   height: auto;
   margin: 1rem;
  }

  @media (max-width: 768px) {
    justify-content: flex-start;
    align-items: center;
    height: auto;
    /* padding-left: 1em; */
    margin-bottom: 1rem;
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
