import styled from "styled-components";
import {
  Facebook,
  Instagram,
  Twitter,
  Pinterest,
  Room,
  Phone,
  MailOutline,
} from "@material-ui/icons";

const Container = styled.div`
  display: flex;
`;

const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcons = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 20px;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const Payment = styled.img`
  width: 50%;
`;
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>MUR-DER</Logo>
        <Desc>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident
          tenetur beatae consectetur totam. Asperiores earum fugiat soluta,
          quas, reprehenderit laborum deserunt voluptatum optio commodi tempora
          consequuntur quisquam unde natus nobis.
        </Desc>
        <SocialContainer>
          <SocialIcons color="3B5999">
            <Facebook></Facebook>
          </SocialIcons>
          <SocialIcons color="E4405F">
            <Instagram></Instagram>
          </SocialIcons>
          <SocialIcons color="55ACEE">
            <Twitter></Twitter>
          </SocialIcons>
          <SocialIcons color="E60023">
            <Pinterest></Pinterest>
          </SocialIcons>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: 20 }} />
          Bursa
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: 20 }} />
          090909090909
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: 20 }} />
          contact@murder.com
        </ContactItem>
        <Payment src=" https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
