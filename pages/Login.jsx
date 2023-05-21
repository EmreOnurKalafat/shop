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
  width: 20%;
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
  width: 75%;
  margin-top: 10px;
  padding: 7px;
`;
const Link = styled.a`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;
const Button = styled.button`
  margin: 20px 30%;
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

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />

          <Input placeholder="password" />

          <Button>LOGIN</Button>

          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
