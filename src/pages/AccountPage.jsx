import React, { useState } from "react";
import { CgFileDocument } from "react-icons/cg";
import { VscAccount, VscSettingsGear } from "react-icons/vsc";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { useSelector } from "react-redux";

const AccountPage = () => {
  const { email } = useSelector((state) => state.auth);

  return (
    <div className="text-black px-4 sm:px-6 lg:px-8 flex flex-col space-y-2 w-full justify-center">
      <p>
        Hola <span className="font-medium">{email}</span>
      </p>

      <p>
        Desde el escritorio de tu cuenta puedes ver tus pedidos recientes,
        gestionar tus direcciones de envío y facturación y editar tu contraseña
        y los detalles de tu cuenta.
      </p>

      <div className="grid grid-cols-2 gap-5 py-8">
        <div className="h-[150px] border-2 border-gray-300 rounded-md flex flex-col group cursor-pointer shadow-md">
          <div className="group-hover:bg-[#F7F7F7] w-full h-full items-center justify-center space-y-2 flex flex-col ease-in-out duration-200">
            <CgFileDocument
              size={45}
              className="text-gray-400 group-hover:text-red-500 ease-in-out duration-200"
            />
            <span className="font-medium">PEDIDOS</span>
          </div>
        </div>

        <div className="h-[150px] border-2 border-gray-300 rounded-md flex flex-col group cursor-pointer shadow-md">
          <div className="group-hover:bg-[#F7F7F7] w-full h-full items-center justify-center space-y-2 flex flex-col ease-in-out duration-200">
            <VscAccount
              size={45}
              className="text-gray-400 group-hover:text-red-500 ease-in-out duration-200"
            />
            <span className="font-medium">DETALLES DE LA CUENTA</span>
          </div>
        </div>

        <div className="h-[150px] border-2 border-gray-300 rounded-md flex flex-col group cursor-pointer shadow-md">
          <div className="group-hover:bg-[#F7F7F7] w-full h-full items-center justify-center space-y-2 flex flex-col ease-in-out duration-200">
            <VscSettingsGear
              size={45}
              className="text-gray-400 group-hover:text-red-500 ease-in-out duration-200"
            />
            <span className="font-medium">MIS MEDIOS DE PAGO</span>
          </div>
        </div>

        <div className="h-[150px] border-2 border-gray-300 rounded-md flex flex-col group cursor-pointer shadow-md">
          <div className="group-hover:bg-[#F7F7F7] w-full h-full items-center justify-center space-y-2 flex flex-col ease-in-out duration-200">
            <RiLogoutBoxRLine
              size={45}
              className="text-gray-400 group-hover:text-red-500 ease-in-out duration-200"
            />
            <span className="font-medium">SALIR</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
