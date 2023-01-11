import React from "react";
import { useDispatch, useSelector } from "react-redux";

const CartPage = () => {
  const { products, total } = useSelector((state) => state.cart);

  return (
    <div className="max-w-7xl w-full mx-auto px-4 md:px-6 lg:px-8">
      <div className="flex flex-col py-10 divide-y-2">
        <div className="hidden grid-cols-7 py-4 md:grid">
          <span className="col-span-4 font-medium">PRODUCTO</span>
          <span className="font-medium">PRECIO</span>
          <span className="font-medium">CANTIDAD</span>
          <span className="font-medium">SUBTOTAL</span>
        </div>

        {products.map((product) => (
          <div className="flex flex-col grid-cols-7 space-y-2 md:grid">
            <div className="col-span-4">
              <div className="pr-5 py-3 flex">
                <div className="flex items-center  space-x-0 md:space-x-10 flex-row">
                  <div className="hidden flex-col h-full md:flex md:justify-center">
                    <button className="font-medium">X</button>
                  </div>

                  <div className="flex space-x-4">
                    <img className="h-[80px]" src={product.image} />

                    <div className="flex flex-col justify-center space-y-8">
                      <div className="flex w-full space-x-10">
                        <p>{product.name}</p>

                        <button className="font-medium md:hidden">X</button>
                      </div>

                      <div className="flex flex-col space-y-4 md:hidden">
                        <div className="flex">
                          <span className="text-gray-500 flex text-sm font-medium items-center flex-1">
                            PRECIO
                          </span>

                          <span className="text-gray-500 flex items-center justify-end flex-1">
                            {`CLP ${product.price}`}
                          </span>
                        </div>

                        <div className="flex">
                          <span className="text-gray-500 flex text-sm font-medium items-center flex-1">
                            CANTIDAD
                          </span>

                          <div className="flex items-center justify-start">
                            <button className="h-10 w-6 border-2 border-gray-300 rounded-tl-md rounded-bl-md">
                              -
                            </button>
                            <input
                              type="text"
                              className="border-2 h-10 border-gray-300 border-l-0 border-r-0 text-center w-10"
                              value={product.number}
                            />
                            <button className="h-10 w-6 border-2 border-gray-300 rounded-tr-md rounded-br-md">
                              +
                            </button>
                          </div>
                        </div>

                        <div className="flex">
                          <span className="text-gray-500 flex text-sm font-medium items-center flex-1">
                            SUBTOTAL
                          </span>

                          <span className="text-red-500 flex items-center text-lg font-medium flex-1 justify-end">
                            {`CLP ${product.price * product.number}`}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <span className="text-gray-500 hidden md:flex items-center">
              {`CLP ${product.price}`}
            </span>

            <div className="hidden md:flex items-center justify-start">
              <button className="h-10 w-6 border-2 border-gray-300 rounded-tl-md rounded-bl-md">
                -
              </button>
              <input
                type="number"
                className="border-2 h-10 border-gray-300 border-l-0 border-r-0 text-center w-10"
                value={product.number}
              />
              <button className="h-10 w-6 border-2 border-gray-300 rounded-tr-md rounded-br-md">
                +
              </button>
            </div>

            <span className="text-red-500 hidden md:flex items-center text-lg font-medium">
              {`CLP ${product.price * product.number}`}
            </span>
          </div>
        ))}

        <div className="flex items-center justify-between px-5 grid-cols-7 py-10 md:px-0 md:grid">
          <p className="col-span-6 text-xl font-medium">TOTAL</p>
          <p className="text-2xl font-medium text-red-500">{`CLP ${total}`}</p>
        </div>

        <button className="px-10 py-4 text-white text-sm font-medium bg-[#E84E48] hover:bg-[#D44742] ease-in-out duration-200">
          FINALIZAR COMPRA
        </button>
      </div>
    </div>
  );
};

export default CartPage;
