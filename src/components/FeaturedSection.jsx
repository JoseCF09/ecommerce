import React from "react";
import ListProduct from "./ListProduct";

const FeaturedSection = ({ data }) => {
  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div className="flex flex-col w-full text-black space-y-10">
        <h4 className="font-semibold text-xl lg:text-2xl lg:font-bold">
          PRODUCTOS DESTACADOS
        </h4>

        <ListProduct data={data} />
      </div>
    </div>
  );
};

export default FeaturedSection;
