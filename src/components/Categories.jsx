import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";
import { device } from "../device";
const Container = styled.div`
  display: flex;
  padding: 10px;
  justify-content: space-between;
  @media ${device.tablet} {
    padding: 20px;
  }
`;
const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id}></CategoryItem>
      ))}
    </Container>
  );
};

export default Categories;
