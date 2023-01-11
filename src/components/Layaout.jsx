import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { setOpenModal } from "../redux/features/cartSlice";
import routes from "../utilities/routes";
import BaseModal from "./BaseModal";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layaout = () => {
  const { openModal, products, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="bg-white w-full">
      <div className="flex flex-col flex-1">
        <Navbar />
        <Outlet />
        <Footer />
      </div>

      <BaseModal
        title="Carrito"
        status={openModal}
        changeStatus={(state) => dispatch(setOpenModal(state))}
      >
        <div className="md:w-[550px] flex flex-col divide-y-2">
          {/* ITEMS*/}
          <div className="flex flex-col pb-5">
            {products.map((product) => (
              <div className="group cursor-pointer">
                <div className="group-hover:bg-[#F7F7F7] px-5 py-3">
                  <div className="flex items-center space-x-4">
                    <img className="h-[80px]" src={product.image} />

                    <div className="flex flex-col space-y-4">
                      <p>{product.name}</p>

                      <div className="flex">
                        <p className="text-lg flex space-x-2">
                          <span className="text-gray-500">{`${product.number} x`}</span>
                          <span className="text-red-500 font-medium">
                            {`CLP ${product.price}`}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex px-5 py-5">
            <div className="flex flex-1">
              <span className="font-medium text-xl">SUBTOTAL:</span>
            </div>
            <div className="flex flex-1">
              <span className="font-medium text-xl text-right w-full text-red-500">
                {`CLP ${total}`}
              </span>
            </div>
          </div>

          <button
            onClick={() => {
              dispatch(setOpenModal(false));
              navigate(routes.cart);
            }}
            className="px-5 py-2 font-medium bg-[#F7F7F7] hover:bg-[#EFEFEF] ease-in-out duration-200"
          >
            VER CARRITO
          </button>

          <button className="px-10 py-4 text-white text-sm font-medium bg-[#E84E48] hover:bg-[#D44742] ease-in-out duration-200">
            FINALIZAR COMPRA
          </button>
        </div>
      </BaseModal>
    </div>
  );
};

export default Layaout;
