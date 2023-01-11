import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setOpenModal } from "../redux/features/cartSlice";
import routes from "../utilities/routes";

const items = [
  { key: 100, title: "Inicio", to: routes.home },
  { key: 101, title: "Tienda", to: routes.store },
];

const Navbar = () => {
  const { products } = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const { openModal } = useSelector((state) => state.cart);

  return (
    <div className="bg-white w-full shadow-lg">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* MENU HAMBURGUESA */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button className="items-center justify-center p-2">
              <GiHamburgerMenu size={25} />
            </button>
          </div>

          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <div className="block lg:hidden h-8 w-auto text-2xl font-medium">
                TD
              </div>
              <div className="hidden lg:block h-8 w-auto text-2xl font-medium">
                Tecnodum
              </div>
            </div>

            <div className="hidden sm:block sm:ml-6 space-x-4">
              {items.map((item) => (
                <Link
                  key={item.key}
                  to={item.to}
                  className="text-base font-medium hover:text-[#FD0031] duration-200"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Opciones de usuarios logueados */}
          <div className="absolute text-white inset-y-0 right-0 flex items-center space-x-4 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Link
              to={routes.signin}
              className="text-black hover:text-gray-500 duration-200"
            >
              <AiOutlineUser size={25} />
            </Link>

            <div
              onClick={() => dispatch(setOpenModal(true))}
              className="text-black hover:text-gray-500 duration-200 flex space-x-2 items-center"
            >
              <BsCart3 size={25} />
              <div className="rounded-full bg-red-500 h-5 w-5 text-lg text-white font-medium flex items-center justify-center">
                {products.length}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
