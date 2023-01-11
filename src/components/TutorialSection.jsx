import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { BsBoxSeam } from "react-icons/bs";
import { BiUserVoice } from "react-icons/bi";

const TutorialSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="flex flex-col items-center text-black space-y-10">
        <div className="flex flex-col space-y-4 items-center">
          <h4 className="font-semibold text-2xl lg:text-4xl lg:font-bold">
            ¿CÓMO COMPRAR?
          </h4>
          <p className="text-center max-w-2xl">
            Sólo tienes que hacer 3 pasos para tener tu pedido en tus manos.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center w-full py-5 lg:py-16">
          <div className="w-[90%] lg:w-1/3 flex space-x-6 h-24 px-4">
            <h4 className="text-5xl lg:text-7xl font-bold text-[#E84E48]">
              01.
            </h4>
            <div className="flex flex-1 flex-col">
              <h4 className="text-lg font-bold">PÍDELO</h4>
              <p className="">Realiza tu pedido por Whatsapp al 917 467 606</p>
            </div>
          </div>

          <div className="w-[90%] lg:w-1/3 flex space-x-6 h-24 px-4">
            <h4 className="text-5xl lg:text-7xl font-bold text-[#E84E48]">
              02.
            </h4>
            <div className="flex flex-1 flex-col">
              <h4 className="text-lg font-bold">RECÍBELO</h4>
              <p className="">Recíbelo en la comodidad de tu casa =)</p>
            </div>
          </div>

          <div className="w-[90%] lg:w-1/3 flex space-x-6 h-24 px-4">
            <h4 className="text-5xl lg:text-7xl font-bold text-[#E84E48]">
              03.
            </h4>
            <div className="flex flex-1 flex-col">
              <h4 className="text-lg font-bold">PÁGALO</h4>
              <p className="">Págalo contraentrega, depende de cobertura</p>
            </div>
          </div>
        </div>

        <div className="flex flex-row flex-wrap w-full">
          <div className="w-1/2 lg:w-1/4 flex space-x-6 px-4 py-6">
            <a className="text-5xl font-bold text-[#E84E48]">
              <TbTruckDelivery />
            </a>
            <div className="flex flex-col">
              <h4 className="text-lg font-bold">DELIVERY GRATIS</h4>
              <p className="">En productos seleccionados</p>
            </div>
          </div>

          <div className="w-1/2 lg:w-1/4 flex space-x-6 px-4 py-6">
            <a className="text-5xl font-bold text-[#E84E48]">
              <AiOutlineSafetyCertificate />
            </a>
            <div className="flex flex-1 flex-col">
              <h4 className="text-lg font-bold">CONFIABLE Y SEGURO</h4>
              <p className="">99% de comentaraios positivos en facebook</p>
            </div>
          </div>

          <div className="w-1/2 lg:w-1/4 flex space-x-6 px-4 py-6">
            <a className="text-5xl font-bold text-[#E84E48]">
              <BsBoxSeam />
            </a>
            <div className="flex flex-1 flex-col">
              <h4 className="text-lg font-bold">GARANTÍA VIP</h4>
              <p className="">Hasta 12 meses de garantía según el producto</p>
            </div>
          </div>

          <div className="w-1/2 lg:w-1/4 flex space-x-6 px-4 py-6">
            <a className="text-5xl font-bold text-[#E84E48]">
              <BiUserVoice />
            </a>
            <div className="flex flex-1 flex-col">
              <h4 className="text-lg font-bold">ASISTENCIA</h4>
              <p className="">Soporte inmediato vía Facebook o Whatsapp</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorialSection;
