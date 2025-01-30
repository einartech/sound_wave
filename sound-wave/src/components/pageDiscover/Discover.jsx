import React from "react";
import styled from "styled-components";
import cover from "../../assets/images/covers.jpg";
import Icons from "../Icons/Icons";
import H2Title from "../Title/Title";
import PlainText from "../PlainText/PlainText";
import iconsMic from "../../assets/images/microphone.svg";
import iconsAlbum from "../../assets/images/albums.svg";
import iconsMore from "../../assets/images/more.svg";


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
  justify-content: space-evenly;
  margin-right: 4.5em;
  /* height: 50%; */
  width: 50%;

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

const Discover = () => {
  return (
    <GirlSection>
      <LeftSection>
        <div>
        <H2Title text="text" />
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
        <PlainText text="text" />
        </div>
      </LeftSection>
      <RightSection>
        <img src={cover} alt="Girl listening to music" />

        <ButtonFocus>Join Now</ButtonFocus>
      </RightSection>
    </GirlSection>
  );
};

export default Discover;
