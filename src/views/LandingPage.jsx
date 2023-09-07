import { useState, useEffect } from "react";
import styled from "styled-components";
import { TableWithInfiniteScroll, FreeSearch, DropdownFilter } from "../components";
import { getAllCategories, getProductsByCriteria } from "../queries";

export const LandingPage = () => {
  const [productsToDisplay, setProductsToDisplay] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [freeSearchTect, setFreeSearchText] = useState("");
  const { data: availableCategories } = getAllCategories();

  const {
    data: productsData,
    isFetching,
    refetch,
  } = getProductsByCriteria({
    category: selectedCategory,
    searchText: freeSearchTect,
  });

  useEffect(() => {
    if (productsData?.pages[0]?.products) setProductsToDisplay(productsData?.pages[0]?.products);
  }, [productsData, setProductsToDisplay]);

  useEffect(() => {
    refetch({ refetchPage: (page, index) => index === 0 });
  }, [refetch, freeSearchTect, selectedCategory]);

  const onHandleTextSearch = (searchText) => {
    setFreeSearchText(searchText);
  };

  const onHandleFilterByCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div style={{ paddingTop: 20, paddingLeft: 15 }}>
      <StyledWrapper>
        <FreeSearch
          id={"free-text-search"}
          label={"Search..."}
          handleTesxtSearch={onHandleTextSearch}
          style={{ height: 50 }}
        />
        <DropdownFilter
          id={"category-select"}
          label={"Select category"}
          helperText={"Select category to filter"}
          optionsList={availableCategories}
          handleSelectedOptionChange={onHandleFilterByCategory}
        />
      </StyledWrapper>
      <TableWithInfiniteScroll data={productsToDisplay} isLoading={isFetching} />
    </div>
  );
};

const StyledWrapper = styled.div`
  width: 500px;
  display: flex; /* or inline-flex */
  flex-direction: row;
  justify-content: space-evenly;
`;
