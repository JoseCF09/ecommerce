import React from "react";
import ListProduct from "../components/ListProduct";
import { useGetProductsQuery } from "../services/productService";

const StorePage = () => {
  const { data } = useGetProductsQuery();

  return (
    <div className="max-w-7xl w-full mx-auto px-4 md:px-6 lg:px-8 flex flex-col space-y-2 py-10">
      <h4 className="font-semibold text-2xl lg:text-4xl lg:font-bold">
        PRODUCTOS
      </h4>
      {data && <ListProduct data={data} />}
    </div>
  );
};

export default StorePage;
