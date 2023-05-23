import styled from "styled-components";
import { device } from "../src/device";
import Navbar from "../src/components/Navbar";
import Announcement from "../src/components/Announcement";
import Products from "../src/components/Products";
import Newsletter from "../src/components/Newsletter";
import Footer from "../src/components/Footer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.h1`
  text-align: center;
  @media ${device.tablet} {
    text-align: left;
    margin-left: 20px;
  }
`;
const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media ${device.laptop} {
    flex-direction: row;
  }
`;
const Filter = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 0px;
  @media ${device.tablet} {
    text-align: left;
    flex-direction: row;
    margin: 20px;
  }
`;

const FilterText = styled.span`
  margin-top: 20px;
  font-style: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  margin-top: 10px;
  padding: 10px;
  margin-right: 0px;
  font-weight: 600;
  @media ${device.tablet} {
    margin-right: 20px;
  }
`;
const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Deri</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Renk
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Hayvan Türü
            </Option>
            <Option>Koyun</Option>
            <Option>Keçi</Option>
            <Option>Kuzu</Option>
            <Option>Dana</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Türü
            </Option>
            <Option>Full Grain / tüm tanecikli deri</Option>
            <Option>Top Grain / üst yüzeye yakın tanecikli deri</Option>
            <Option>Genuine Deri / Yarma Deri</Option>
            <Option>Bonded / Salpa Deri</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option disabled selected>
              Sıralama
            </Option>
            <Option>Yeniden Eskiye</Option>
            <Option>Eskiden Yeniye</Option>
            <Option>Azalan Fiyata</Option>
            <Option>Artan Fiyata</Option>
            <Option>En çok satan</Option>
            <Option>En iyi Yorum Alan</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
