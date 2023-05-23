import styled from "styled-components";
import Navbar from "../src/components/Navbar";
import Announcement from "../src/components/Announcement";
import Newsletter from "../src/components/Newsletter";
import Footer from "../src/components/Footer";
import { Add, Remove } from "@material-ui/icons";
import { device } from "../src/device";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  height: auto;
  @media ${device.mobileL} {
    padding: 20px;
  }
  @media ${device.tablet} {
    padding: 50px;
  }
  @media ${device.laptop} {
    flex-direction: row;
  }
`;
const ImgContainer = styled.div`
  flex: 1;
  margin: auto;
  @media ${device.laptop} {
    margin: 0;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 50vh;
  object-fit: cover;
  @media ${device.tablet} {
    height: 80vh;
  }
  @media ${device.laptopL} {
    height: 90vh;
  }
`;
const InfoContainer = styled.div`
  display: flex;
  flex: 1;
  padding: 0px 1px;
  flex-direction: column;
  text-align: center;
  @media ${device.mobileL} {
    padding: 0px 30px;
  }
  @media ${device.tablet} {
    padding: 0px 50px;
    text-align: left;
  }
  @media ${device.laptopL} {
    display: inline;
    flex-direction: row;
  }
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex: 1;
  justify-content: space-between;
  flex-direction: column;
`;
const Filter = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  flex-direction: column;
  margin: 20px 0px 10px 0px;
  &:nth-child(1) {
    flex-direction: row;
    padding: 0px 40px;
  }
  @media ${device.tablet} {
    &:nth-child(1) {
      flex-direction: row;
      padding: 0px 0px;
    }
    flex-direction: row;
  }
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
  display: flex;
  flex: 4;
`;
const FilterColor = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  border-radius: 100%;
  background-color: ${(props) => props.color};
  margin-left: 10px;
  cursor: pointer;
`;
const FilterType = styled.select`
  display: flex;
  flex: 3;
  padding: 10px;
  text-align: center;
`;
const FilterTypeOption = styled.option`
  font-size: 14px;
  left: 0;
`;
const FilterSort = styled.select`
  display: flex;
  flex: 3;
  padding: 10px;
  text-align: center;
`;
const FilterSortOption = styled.option`
  font-size: 14px;
  left: 0;
`;
const AddContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  @media ${device.tablet} {
    flex-direction: row;
  }
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-weight: 700;
  flex: 5;
  margin-right: 0%;
  @media ${device.tablet} {
    margin-right: 10%;
  }
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const Button = styled.button`
  padding: 15px;
  border: 2px solid rgba(255, 0, 0, 1);
  background-color: white;
  font-weight: 500;
  cursor: pointer;
  transition: 0.5s ease;
  flex: 1;
  margin-top: 10px;

  &:hover {
    background-color: rgba(255, 0, 0, 0.9);
    color: white;
    border: 2px solid rgba(255, 0, 0, 0.1);
  }
  @media ${device.tablet} {
    margin-top: 0px;
  }
`;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src="/img/pngderi4.png"></Image>
        </ImgContainer>
        <InfoContainer>
          <Title>Kahverrengi Deri</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            natus provident nobis porro. Facilis sit expedita, temporibus
            nostrum quos repudiandae sequi hic enim esse corporis ullam nulla
            delectus ad soluta?Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Eaque praesentium facilis cupiditate quos aperiam
            quasi odio animi, a hic, itaque odit voluptate. Non, ducimus est sed
            maiores minima possimus deserunt?
          </Desc>
          <Price>$20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Hayvan Türü</FilterTitle>
              <FilterType>
                <FilterTypeOption>Koyun</FilterTypeOption>
                <FilterTypeOption>Keçi</FilterTypeOption>
                <FilterTypeOption>Kuzu</FilterTypeOption>
                <FilterTypeOption>Dana</FilterTypeOption>
              </FilterType>
            </Filter>
            <Filter>
              <FilterTitle>Deri Türü</FilterTitle>
              <FilterSort>
                <FilterSortOption>
                  Full Grain / tüm tanecikli deri
                </FilterSortOption>
                <FilterSortOption>
                  Top Grain / üst yüzeye yakın tanecikli deri
                </FilterSortOption>
                <FilterSortOption>Genuine Deri / Yarma Deri</FilterSortOption>
                <FilterSortOption>Bonded / Salpa Deri</FilterSortOption>
              </FilterSort>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>Sepete Ekle</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
