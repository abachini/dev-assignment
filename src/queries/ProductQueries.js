import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { config } from "../constants";

export const getAllCategories = () => {
  const { GET_ALL_CATEGORIES_URL } = config;
  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["allCategories"],
    queryFn: () => axios.get(GET_ALL_CATEGORIES_URL).then((res) => res.data),
  });

  return { isLoading, error, data, isFetching };
};

export const getProductsByCriteria = ({ category, searchText } = {}) => {
  let PRODUCTS_URL = config.BASE_API_URL;
  if (category) PRODUCTS_URL = `${config.GET_PRODUCT_OF_CATEGORY_URL}/${category}`;
  if (searchText) PRODUCTS_URL = `${config.GET_PRODUCTS_BY_SEARCH_TEXT_URL}${searchText}`;

  const { data, error, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status, refetch } = useInfiniteQuery(
    {
      queryKey: ["allProducts"],
      queryFn: () => axios.get(PRODUCTS_URL).then((res) => res.data),
      getNextPageParam: (lastPage) => lastPage.nextCursor,
    },
  );

  return { data, error, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status, refetch };
};
