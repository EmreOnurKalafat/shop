import { styled } from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: red;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: auto;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>Muhteşem İndirimlerimiz varrrr kaçırma....</Container>;
};

export default Announcement;
