import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("./img/bg1.jpg") center no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.8);
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;
const Input = styled.input`
  display: flex;
  width: 50%;
  margin-top: 10px;
  padding: 7px;
`;
const Agreement = styled.span`
  width: 60%;
  display: flex;
  flex-direction: column;
  margin: 10px 0px 10px 0px;
  font-size: 12px;
`;
const Button = styled.button`
  margin: 0% 30%;
  text-align: center;
  justify-content: center;
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  border: none;
  padding: 10px 30px;
  background-color: red;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confrim password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the<b>PRICAY POLICY</b>
          </Agreement>
          <Button>Create Account</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
