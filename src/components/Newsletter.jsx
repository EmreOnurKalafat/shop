import { Send } from "@material-ui/icons";
import styled from "styled-components";
import { device } from "../device";

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 50px;
  margin-bottom: 20px;
  @media ${device.mobileM} {
    font-size: 70px;
  }
`;
const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  text-align: center;
  @media ${device.mobileM} {
  }
`;
const InputContainer = styled.div`
  width: 30%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: center;

  border: 1px solid lightgray;
  @media ${device.mobileL} {
    width: 40%;
    justify-content: space-between;
  }
`;
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 0px;
  @media ${device.mobileL} {
    padding-left: 20px;
  }
`;
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: red;
  color: white;
  cursor: pointer;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <Desc></Desc>
      <InputContainer>
        <Input placeholder="Your e-mail" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
