import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ProductService = createApi({
  reducerPath: "productService",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  endpoints: (builder) => ({
    getCombos: builder.query({
      query: () => "/product/combos",
    }),
    getFeatured: builder.query({
      query: () => "/product/featured",
    }),

    getProduct: builder.query({
      query: (id) => `/product/${id}`,
    }),
    getProducts: builder.query({
      query: (id) => `/product`,
    }),
  }),
});

export const {
  useGetCombosQuery,
  useGetFeaturedQuery,
  useGetProductQuery,
  useGetProductsQuery,
} = ProductService;
