import styled from "styled-components";
import Navbar from "../components/Navbar";
import Promotion from "../components/Promotion";
import AllProducts from "../components/AllProducts";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const Container = styled.div``;
const Wrapper = styled.div`
  margin: auto;
  max-width: 1295px;
  width: 90vw;
  padding: 55px 0;
`;

const Title = styled.h1`
  font-weight: 300;
  ${mobile({ fontSize: "24px" })}
`;

const FilterContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px 0;
  ${mobile({ display: "flex", flexWrap: "wrap" })}
`;

const FilterText = styled.span`
  font-size: 16px;
  font-weight: 600;
  margin: auto 0;
  padding-right: 10px;
`;

const Select = styled.select`
  padding: 5px;
  border-radius: 5px;
  margin: 5px;
  disabled: ${(props) => props.disabled};
`;
const Option = styled.option`
  background-color: black;
`;

const Button = styled.button`
  border: none;
  border-radius: 20px;
  padding: 10px;
  color: grey;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    color: black;
    text-decoration: underline;
  }
`;
const ProductList = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };
  const reset = (e) => {
    setSort();
    setFilters({});
  };

  return (
    <Container>
      <Promotion />
      <Navbar />
      <Wrapper>
        {path !== "instock" ? (
          <Title>{path.toUpperCase()} Ayakkabılar</Title>
        ) : (
          <Title>Bütün Ayakkabılar</Title>
        )}
        <FilterContainer>
          <Filter>
            <FilterText>Filtre:</FilterText>
            <Select
              name="category"
              onChange={handleFilters}
              disabled={path.includes("men") && true}
            >
              <Option>men</Option>
              <Option>women</Option>
            </Select>
            <Select
              name="brand"
              onChange={handleFilters}
              disabled={
                path.includes("men") === false && path !== "instock"
                  ? true
                  : false
              }
            >
              <Option>adidas</Option>
              <Option>new balance</Option>
              <Option>nike</Option>
              <Option>puma</Option>
            </Select>
            <Select name="sort" onChange={(e) => setSort(e.target.value)}>
              <Option value="oldest">eski</Option>
              <Option value="newest">yeni</Option>
              <Option value="ascending">artan</Option>
              <Option value="descending">azalan</Option>
              <Option value="lowest">Fiyat pahalıdan ucuza</Option>
              <Option value="highest">Fiyat ucuzdan pahalıya</Option>
            </Select>
            <Button onClick={reset}>Filtreyi Temizle</Button>
          </Filter>
        </FilterContainer>
        <AllProducts path={path} filters={filters} sort={sort} />
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
