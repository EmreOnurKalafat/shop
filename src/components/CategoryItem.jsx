import styled from "styled-components";
import { device } from "../device";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 30vh;
  position: relative;
  @media ${device.mobileM} {
    height: 40vh;
  }
  @media ${device.tablet} {
    height: 70vh;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
const Tittle = styled.h1`
  color: white;
  margin-bottom: 20px;
  font-size: 10px;
  @media ${device.tablet} {
    font-size: 30px;
  }
  @media ${device.laptop} {
    font-size: 40px;
  }
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: grey;
  cursor: pointer;
  font-weight: 600;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img}></Image>
      <Info>
        <Tittle>{item.title}</Tittle>
        <Button>SATIN AL</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
