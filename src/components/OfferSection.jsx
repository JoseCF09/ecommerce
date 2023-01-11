import React from "react";
import CarouselProduct from "./CarouselProduct";

const OfferSection = ({ data }) => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="flex flex-col">
        <div className="flex flex-col space-y-4 items-center">
          <h5 className="text-gray-500 font-normal text-sm">
            HASTA 10% DE DESCUENTO EN
          </h5>
          <h4 className="font-semibold text-2xl lg:text-4xl lg:font-bold">
            NUESTROS COMBOS
          </h4>
          <p className="text-gray-500 font-normal text-sm">
            ¿Listo para la batalla? Prepárate para los combates y ahorra con
            nuestros combos
          </p>
        </div>
        <CarouselProduct data={data} />
      </div>
    </div>
  );
};

export default OfferSection;
