import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import BaseModal from "../components/BaseModal";
import { signIn } from "../redux/features/authSlice";
import routes from "../utilities/routes";

const SignInPage = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errorModal, setErrorModal] = useState(false);

  const signInClick = async () => {
    const response = await axios.post(
      "http://localhost:3000/auth/signin",
      user
    );

    if (response.data.msg) {
      setErrorModal(true);
      return;
    }

    dispatch(signIn(response.data));
    navigate(routes.account);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div className="flex py-16 space-x-0 md:space-x-10 flex-col divide-y-2 md:divide-y-0 md:divide-x-2 md:flex-row">
        <div className="flex flex-1 flex-col space-y-10 md:mt-10 mb-10">
          <h2 className="text-xl font-bold">ACCEDER</h2>

          <div className="flex flex-col space-y-2">
            <span>Nombre de usuario o correo electrónico</span>
            <input
              type="email"
              name="email"
              className="px-5 py-3 border-2 border-gray-300 rounded-md"
              value={user.email}
              onChange={(e) =>
                setUser({ ...user, [e.target.name]: e.target.value })
              }
            />
          </div>

          <div className="flex flex-col space-y-2">
            <span>Contraseña</span>
            <input
              type="password"
              name="password"
              className="px-5 py-3 border-2 border-gray-300 rounded-md"
              value={user.password}
              onChange={(e) =>
                setUser({ ...user, [e.target.name]: e.target.value })
              }
            />
          </div>

          <button
            onClick={signInClick}
            className="px-10 py-4 text-white text-sm font-medium bg-[#E84E48] hover:bg-[#D44742] ease-in-out duration-200"
          >
            INGRESAR
          </button>
        </div>

        <div className="flex flex-1 flex-col justify-center items-center space-y-5 pt-10">
          <h2 className="text-xl font-bold">REGISTRARSE</h2>

          <p className="px-10 text-center">
            Registrarse le permite acceder al estado e historial de su pedido.
            Simplemente complete los campos a continuación y crearemos una nueva
            cuenta para usted en un abrir y cerrar de ojos. Solo le pediremos la
            información necesaria para que el proceso de compra sea más rápido y
            sencillo.
          </p>

          <Link
            to={routes.signup}
            className="px-5 py-2 font-medium bg-[#F7F7F7] hover:bg-[#EFEFEF] ease-in-out duration-200"
          >
            REGISTRARSE
          </Link>
        </div>
      </div>

      <BaseModal title="Error" changeStatus={setErrorModal} status={errorModal}>
        <div className="px-5 py-5">
          <p className="text-lg">El correo o contraseña es incorrecta</p>
        </div>
      </BaseModal>
    </div>
  );
};

export default SignInPage;
