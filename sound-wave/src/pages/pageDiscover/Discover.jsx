import React from "react";
import styled from "styled-components";
import Header from "../../components/header/Header";
import cover from "../../assets/images/covers.jpg";
import Features from "../../components/features/Features";
import H2Title from "../../components/title2/h2Title";
import PlainText from "../../components/plainText/PlainText";
import iconsMic from "../../assets/images/microphone.svg";
import iconsAlbum from "../../assets/images/albums.svg";
import iconsMore from "../../assets/images/more.svg";
import Footer from "../../components/footer/Footer";



const DiscoverSection = styled.section`
  display: flex;
  color: white;
  overflow: hidden;
  justify-content: center;
  align-items: stretch;
  margin-top: 9rem;


 @media (max-width: 768px) {
    display: contents;
    flex-direction: column;
    text-align: center;
    min-height: 100vh;
    height: auto;
    align-items: center;
  }
`;

  const LeftSection = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: flex-start; 
  padding: 1rem; 
  
 

  @media (max-width: 768px) {
  text-align: left;
  margin: 0.2rem;
  width: 100%;
  margin-right: -1em;
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
    margin-bottom: 1rem;
  }
`;

const Discover = () => {
  return (
    <>
    <Header />
    <DiscoverSection>
    <LeftSection>
      <H2Title text="Discover new music" />11
      <IconsContainer>
      <Features img={iconsMic} text="Charts" alt="microphone icon" />
      <Features img={iconsAlbum} text="Albums" alt="albums icon" />
      <Features img={iconsMore} text="More" alt="more icon" />
      </IconsContainer>
      <PlainText text="By joining you can benefit by listening to the latest albums released." />
      </LeftSection>
      <RightSection>
        <img src={cover} alt="image of different album covers" />
      </RightSection>
    </DiscoverSection>
    <Footer />
    </>
  );
};

export default Discover;
