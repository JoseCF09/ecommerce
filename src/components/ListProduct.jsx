import React from "react";
import Product from "./Product";

const ListProduct = ({ data }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4">
      {data.map((item) => (
        <Product item={item} />
      ))}
    </div>
  );
};

export default ListProduct;
