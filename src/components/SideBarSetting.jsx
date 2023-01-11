import React from "react";
import { useSelector } from "react-redux";
import { NavLink, Outlet, Routes } from "react-router-dom";
import routes from "../utilities/routes";

const items = [
  {
    title: "Escritorio",
    to: routes.account,
    rol: ["Cliente", "Administrador"],
  },
  {
    title: "Pedidos",
    to: routes.orders,
    rol: ["Cliente", "Administrador"],
  },
  {
    title: "Detalles de la cuenta",
    to: routes.editAccount,
    rol: ["Cliente", "Administrador"],
  },
  {
    title: "Productos",
    to: routes.products,
    rol: ["Administrador"],
  },
];

const SideBarSetting = () => {
  const { rol } = useSelector((state) => state.auth);

  return (
    <div className="max-w-7xl mx-auto w-full">
      <div className="flex divide-x-2 my-10 flex-col md:flex-row">
        <div className="w-full h-full flex flex-col px-5 divide-y-2 md:w-[500px] md:min-h-[550px]">
          <h3 className="text-xl font-medium px-5 py-5">MI CUENTA</h3>

          <div className="flex flex-col py-5">
            {items.map((item) => (
              <NavLink
                end
                to={item.to}
                className={({ isActive }) =>
                  `px-5 py-2 font-medium text-gray-600 ${
                    isActive ? "bg-[#F1F1F1]" : "hover:bg-[#F1F1F1]"
                  }`
                }
              >
                {item.title}
              </NavLink>
            ))}
            <div className="px-5 py-2 font-medium text-gray-600 hover:bg-[#F1F1F1] cursor-pointer">
              Cerrar sesión
            </div>
          </div>
        </div>

        <Outlet />
      </div>
    </div>
  );
};

export default SideBarSetting;
