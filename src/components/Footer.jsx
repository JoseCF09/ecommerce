import React from "react";
import { BsHeadset } from "react-icons/bs";
import { AiOutlineWhatsApp, AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white w-full">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 flex flex-col divide-y-2 divide-grey-300">
        <div className="flex flex-col md:flex-row lg:justify-between w-full pt-16 pb-10 space-y-10 md:space-y-0">
          <div className="flex flex-col space-y-4 pr-10">
            <div className="flex space-x-8">
              <BsHeadset size={65} />

              <div className="flex flex-col">
                <span className="text-gray-500 font-regular">
                  ¿Tienes alguna pregunta? Llámanos
                </span>
                <span className="font-semibold text-2xl">+56 962 957 230</span>
              </div>
            </div>

            <div className="flex flex-col">
              <p className="font-regular text-gray-500">
                Las Lilas 1625, Tome, Tomé, Bio Bio
              </p>
            </div>
            <div className="flex space-x-2 text-gray-500">
              <a href="#">
                <FaFacebookF size={25} />
              </a>
              <a href="#">
                <AiOutlineWhatsApp size={25} />
              </a>
              <a href="#">
                <AiOutlineInstagram size={25} />
              </a>
            </div>
          </div>

          <div className="flex flex-col space-y-10 md:space-y-0 md:flex-row md:space-x-16">
            <div className="flex flex-col space-y-2">
              <h3 className="font-semibold text-lg">ACERCA DE COMPUGO</h3>
              <Link className="text-gray-500 text-sm">Nosotros</Link>
              <Link className="text-gray-500 text-sm">Directorio</Link>
              <Link className="text-gray-500 text-sm">
                Politica de privacidad
              </Link>
            </div>

            <div className="flex flex-col space-y-2">
              <h3 className="font-semibold text-lg">SERVICIO AL CLIENTE</h3>
              <Link className="text-gray-500 text-sm">
                Preguntas frecuentes
              </Link>
              <Link className="text-gray-500 text-sm">Seguir mi pedido</Link>
              <Link className="text-gray-500 text-sm">
                Términos y condiciones
              </Link>
              <Link className="text-gray-500 text-sm">Contáctanos</Link>
            </div>
          </div>
        </div>

        <div className="py-5 text-gray-500 text-center">
          Tecnodum © STORE 2022 Jovani Mauricio Sánchez Otey
        </div>
      </div>
    </footer>
  );
};

export default Footer;
