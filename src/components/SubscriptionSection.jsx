import React from "react";

const SubscriptionSection = () => {
  return (
    <div className="bg-[#ED594B]">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col items-center text-white space-y-10">
          <h4 className="font-semibold text-2xl lg:text-4xl lg:font-bold">
            Suscribete
          </h4>
          <p className="text-center max-w-2xl">
            Registrate en nuestro boletín y mantente informado de todas nuestras
            novedades y ofertas especiales que tenemos todas las semanas. Puedes
            desuscribirte cuando quieras.
          </p>

          <div className="flex w-full items-center space-x-6 max-w-xl">
            <input
              type="text"
              className="rounded-lg bg-transparent border-2 border-opacity-40 border-gray-300  py-2 px-4 flex-1 placeholder-white"
              placeholder="Escribe tu correo electrónico"
            />

            <button className="bg-[#C70801] px-4 py-2 rounded-lg font-medium text-base hover:bg-[#880A05] ease-in-out duration-200">
              SUSCRIBIRME
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionSection;
