import styled from "styled-components";
import { device } from "../src/device";
import Navbar from "../src/components/Navbar";
import Announcement from "../src/components/Announcement";
import Footer from "../src/components/Footer";
import { Add, Remove } from "@material-ui/icons";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  flex-direction: column;
  @media ${device.tablet} {
    padding: 20px;
    flex-direction: row;
  }
`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;
const TopTexts = styled.div``;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  @media ${device.tablet} {
    flex-direction: row;
  }
`;
const Info = styled.div`
  flex: 3;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  @media ${device.tablet} {
    flex-direction: row;
  }
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  @media ${device.tablet} {
    flex-direction: row;
    justify-content: start;
    text-align: left;
  }
`;
const Image = styled.img`
  width: 200px;
  margin-left: 15%;
  @media ${device.tablet} {
    margin-left: 0%;
  }
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  margin: auto;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  @media ${device.tablet} {
    margin: 0;
  }
`;

const ProductType = styled.span``;
const ProductSort = styled.span``;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
  @media ${device.tablet} {
    height: 60vh;
  }
  @media ${device.laptop} {
    height: 55vh;
  }
  @media ${device.laptopL} {
    height: 40vh;
  }
  @media ${device.desktop} {
    height: 25vh;
  }
`;
const SummaryTitle = styled.h1`
  font-weight: 200;
`;
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  cursor: pointer;
`;
const Cart = ({}) => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>Your Bag</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shooping Bag (2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="./img/pngderi3.png" />
                <Details>
                  <ProductName>
                    <b>Product:</b> KAHVERENGİ DERİ
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 0987654321
                  </ProductId>
                  <ProductColor color="brown"></ProductColor>
                  <ProductType>
                    <b>Type:</b> Kuzu
                  </ProductType>
                  <ProductSort>
                    <b>Sort:</b> Kabartmalı
                  </ProductSort>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$30</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="./img/pngderi4.png" />
                <Details>
                  <ProductName>
                    <b>Product:</b> SİYAH DERİ
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 0987654321
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductType>
                    <b>Type:</b> İnek
                  </ProductType>
                  <ProductSort>
                    <b>Sort:</b> Düz
                  </ProductSort>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$40</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$5.09</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>-$8.10</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$43M</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
