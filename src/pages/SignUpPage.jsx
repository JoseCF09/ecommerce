import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import routes from "../utilities/routes";
import axios from "axios";
import BaseModal from "../components/BaseModal";

const SignUpPage = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const [errorModal, setErrorModal] = useState(false);

  const signUp = async () => {
    const response = await axios.post(
      "http://localhost:3000/auth/signup",
      user
    );

    if (response.data.msg) {
      setUser({ email: "", password: "" });
      setErrorModal(true);
    }

    navigate(routes.signin);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div className="flex py-16 space-x-0 md:space-x-10 flex-col divide-y-2 md:divide-y-0 md:divide-x-2 md:flex-row">
        <div className="flex flex-1 flex-col space-y-10 md:mt-10 mb-10">
          <h2 className="text-xl font-bold">REGISTRARSE</h2>

          <div className="flex flex-col space-y-2">
            <span>Nombre de usuario o correo electrónico</span>
            <input
              type="email"
              name="email"
              onChange={(e) =>
                setUser({ ...user, [e.target.name]: e.target.value })
              }
              value={user.email}
              className="px-5 py-3 border-2 border-gray-300 rounded-md"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <span>Contraseña</span>
            <input
              type="password"
              name="password"
              onChange={(e) =>
                setUser({ ...user, [e.target.name]: e.target.value })
              }
              value={user.password}
              className="px-5 py-3 border-2 border-gray-300 rounded-md"
            />
          </div>

          <p className=" text-sm">
            Sus datos personales se utilizarán para respaldar su experiencia en
            este sitio web, para administrar el acceso a su cuenta y para otros
            fines descritos en nuestro política de privacidad.
          </p>

          <button
            onClick={signUp}
            className="px-10 py-4 text-white text-SM font-medium bg-[#E84E48] hover:bg-[#D44742] ease-in-out duration-200"
          >
            REGISTRARSE
          </button>
        </div>

        <div className="flex flex-1 flex-col justify-center items-center space-y-5 pt-10">
          <h2 className="text-xl font-bold">INGRESAR</h2>

          <p className="px-10 text-center">
            Si ya tiene un usuario y contraseña, puede acceder a su cuenta para
            ver el estado de su pedido, revisar su historial de pedidos y mucho
            más.
          </p>

          <Link
            to={routes.signin}
            className="px-5 py-2 font-medium bg-[#F7F7F7] hover:bg-[#EFEFEF] ease-in-out duration-200"
          >
            ACCEDER
          </Link>
        </div>
      </div>

      <BaseModal title="Error" changeStatus={setErrorModal} status={errorModal}>
        <div className="px-5 py-5">
          <p className="text-lg">
            El correo electronico ya se encuentra en uso
          </p>
        </div>
      </BaseModal>
    </div>
  );
};

export default SignUpPage;
