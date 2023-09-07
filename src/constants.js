const BASE_API_URL = "https://dummyjson.com/products";
const GET_ALL_CATEGORIES_URL = `${BASE_API_URL}/categories`;
const GET_PRODUCT_OF_CATEGORY_URL = `${BASE_API_URL}/category`;
const GET_PRODUCTS_BY_SEARCH_TEXT_URL = `${BASE_API_URL}/search?q=`;

export const config = Object.freeze({
  BASE_API_URL,
  GET_ALL_CATEGORIES_URL,
  GET_PRODUCT_OF_CATEGORY_URL,
  GET_PRODUCTS_BY_SEARCH_TEXT_URL,
});
