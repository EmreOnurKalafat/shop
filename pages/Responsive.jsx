import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";
import { device } from "../src/device";

const Container = styled.div`
  width: 100%;
  height: 10vh;
  background-color: gray;
  display: flex;
  align-items: stretch;
  align-content: space-around;
  @media ${device.desktopL} {
    font-size: 34px;
  }
  @media ${device.mobileL} {
    height: auto;
  }
  @media ${device.mobileM} {
    height: auto;
  }
  @media ${device.mobileS} {
    height: auto;
  }
`;

const Wrapper = styled.div`
  background-color: white;
  padding: 10px 20px;
  display: flex;
  flex: 1;
  justify-content: space-between;
  text-align: center;
  align-content: center;
  align-items: center;
  @media ${device.mobileS} {
    visibility: hidden;
    display: none;
  }
  @media ${device.mobileM} {
    visibility: hidden;
    display: none;
  }
  @media ${device.mobileL} {
    visibility: hidden;
    display: none;
  }
  @media ${device.tablet} {
    visibility: visible;
    display: flex;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  @media ${device.tablet} {
    font-size: 12px;
  }
  @media ${device.desktopL} {
    font-size: 24px;
  }
`;

const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  font-size: 16px;
  color: red;

  @media ${device.mobileS} {
    margin: 0;
    padding: 0.5rem;
  }
  @media ${device.tablet} {
    padding: 0.01rem;
    margin-left: 10px;
    font-size: 12px;
  }
  @media ${device.desktopL} {
    font-size: 34px;
  }
`;

const Input = styled.input`
  border: none;
  @media ${device.tablet} {
    font-size: 16px;
  }
  @media ${device.desktopL} {
    font-size: 34px;
  }
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  text-align: center;
  justify-content: flex-end;
  align-items: center;
  font-weight: 500;

  :last-child {
    font-size: 10px;
    @media ${device.tablet} {
      font-size: 8px;
      font-weight: 100;
    }
    @media ${device.laptop} {
      font-size: 8px;
    }
    @media ${device.desktopL} {
      font-size: 20px;
      font-weight: 600;
    }
  }
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  color: black;
  @media ${device.tablet} {
    font-size: 12px;
    margin-left: 10px;
  }
  @media ${device.laptop} {
    font-size: 12px;
    margin-left: 8px;
  }
  @media ${device.desktopL} {
    font-size: 28px;
    margin-left: 20px;
  }
  :first-child {
    font-size: 20px;
    @media ${device.desktopL} {
      font-size: 40px;
      font-weight: 800;
    }
  }
`;

const WrapperMobile = styled.div`
  background-color: white;
  padding: 10px 20px;
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media ${device.tablet} {
    visibility: hidden;
    display: none;
  }
`;
const OpenButon = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;

  justify-content: space-around;
  flex-flow: column nowrap;
  div {
    width: 2rem;
    height: 0.25rem;
    border-radius: 10px;
    background-color: ${({ open }) => (open ? "#000000" : "#FF0000")};
    transform-origin: 1px;
    transition: all 0.3s ease-in-out;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) =>
        open ? "translateX(-100%)" : "translateX(0)"};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const MobileLogo = styled.h1`
  display: flex;
`;
const MobileCard = styled.div`
  display: flex;

  :first-child {
    font-size: 24px;
    font-weight: lighter;
  }
`;
const MobileMenu = styled.div`
  display: ${({ open }) => (open ? "flex" : "none")};
  visibility: ${({ open }) => (open ? "visible" : "hide")};
  flex-grow: 1;
  flex-direction: column;
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.1);
`;
const Title = styled.h1`
  display: flex;
  flex-direction: column;
  text-align: center;
  flex: 1;
`;
const List = styled.ul`
  flex: 1;
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`;
const ListItem = styled.li`
  display: flex;
  text-align: center;
  justify-content: center;
  cursor: pointer;
  :hover {
    color: red;
  }
`;
const Responsive = () => {
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input></Input>
            <Search color="inherit" fontSize="inherit"></Search>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>MUR-DER</Logo>
        </Center>
        <Right>
          <MenuItem>ÜRÜNLER</MenuItem>
          <MenuItem>HAKKINDA</MenuItem>
          <MenuItem>İLETİŞİM</MenuItem>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>

          <MenuItem>
            <Badge badgeContent={10} color="error" fontSize="inherit">
              <ShoppingCartOutlined color="black" fontSize="inherit" />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
      <WrapperMobile>
        <OpenButon open={open} onClick={() => setOpen(!open)}>
          <div />
          <div />
          <div />
        </OpenButon>
        <MobileLogo>MUR-DER</MobileLogo>
        <MobileCard>
          <Badge badgeContent={10} color="error" fontSize="inherit">
            <ShoppingCartOutlined color="black" fontSize="inherit" />
          </Badge>
        </MobileCard>
        <MobileMenu open={open} onClick={() => setOpen(!open)}>
          <Title>MENU</Title>
          <List>
            <ListItem>SIGN IN</ListItem>
            <ListItem>REGISTER</ListItem>
            <ListItem>ÜRÜNLER</ListItem>
            <ListItem>HAKKINDA</ListItem>
            <ListItem>İLETİŞİM</ListItem>
            <ListItem>
              <Language>EN</Language>
            </ListItem>
            <ListItem>
              <SearchContainer>
                <Input></Input>
                <Search color="inherit" fontSize="inherit"></Search>
              </SearchContainer>
            </ListItem>
          </List>
        </MobileMenu>
      </WrapperMobile>
    </Container>
  );
};

export default Responsive;
