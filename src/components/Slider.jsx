import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import { styled } from "styled-components";
import { sliderItems } from "../data";
import { device } from "../device";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  @media ${device.tablet} {
    height: auto;
  }
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fefefe;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.8;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  align-items: center;
  background-color: #${(props) => props.bg};
  @media ${device.tablet} {
    height: auto;
    flex: 1 1 auto;
    flex-direction: row;
  }
`;
const ImageContainer = styled.div`
  height: 100%;
  flex: 1;
`;
const Image = styled.img`
  height: 40vh;
  @media ${device.tablet} {
    height: 60vh;
  }
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 75px;
  text-align: end;
`;

const Title = styled.h1`
  font-size: 32px;
  @media ${device.tablet} {
    font-size: 60px;
  }
`;
const Descripon = styled.p`
  margin: 20px 0px;
  font-size: small;
  font-weight: 500;
  letter-spacing: 3px;
  text-align: start;
  @media ${device.tablet} {
    margin: 50px 0px;
    font-size: medium;
  }
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined></ArrowLeftOutlined>
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImageContainer>
              <Image src={item.img}></Image>
            </ImageContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Descripon>{item.desc}</Descripon>
              <Button>Satın Al</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined></ArrowRightOutlined>
      </Arrow>
    </Container>
  );
};

export default Slider;
