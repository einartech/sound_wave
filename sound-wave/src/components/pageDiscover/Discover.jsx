/* import React from "react";
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



const DiscoverSection = styled.section`
  display: flex;
  height: 50rem;
  color: white;
  overflow: hidden;
  justify-content: center;
  align-items:center;
  /*margin-top: 15rem; 
  /*margin-bottom: 15rem; 
  /*margin-left: 1rem;
  /*margin-right: 1rem; 

 @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    min-height: 100vh;
    height: auto;
    /*justify-content: center; 
    align-items: center;
    /*margin: 3rem 
  }
`;

  const LeftSection = styled.div`
  display: flex;
  justify-content: left;
  flex-direction: column; 
  align-items: flex-start; 
  /* width: 50%;
  padding: 1rem; 
 

  @media (max-width: 768px) {
  /* align-items: center;
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
  /* margin-top: -2rem;

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
    /* padding-left: 1em;
    margin-bottom: 1rem;
  }
`;

const Discover = () => {
  return (
    <>
    <Header />
    <DiscoverSection>
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
    </DiscoverSection>
    <Footer />
    </>
  );
};

export default Discover;
 */

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
    </DiscoverSection>
    <Footer />
    </>
  );
};

export default Discover;

/*import React from "react";
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

const DiscoverSection = styled.section`
  display: flex;
  height: 50rem;
  color: white;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    min-height: 100vh;
    align-items: center;
    text-align: center;
    gap: 1rem;
    padding: 1rem;
  }
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 50%;
  padding: 2rem; 

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
    text-align: center;
    height: auto;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const RightSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;

  img {
    width: auto; /* Maintain aspect ratio 
    max-width: 100%;
    max-height: 100%; /* Prevent stretching 
  };

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    height: auto;

    img {
      max-height: 50vh; /* Prevents the image from taking too much space 
    }
  }
`;

const Discover = () => {
  return (
    <>
      <Header />
      <DiscoverSection>
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
      </DiscoverSection>
      <Footer />
    </>
  );
};

export default Discover;*/
