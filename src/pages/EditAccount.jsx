import React, { useState } from "react";
import { useSelector } from "react-redux";

const EditAccount = () => {
  const { firstName, lastName, email } = useSelector((state) => state.auth);
  const [user, setUser] = useState({ firstName, lastName, email });

  return (
    <div className="text-black px-4 sm:px-6 lg:px-8 flex flex-col space-y-4 w-full justify-center">
      <div className="flex flex-col space-y-2">
        <span>Nombre</span>
        <input
          type="text"
          name="firstName"
          className="px-5 py-3 border-2 border-gray-300 rounded-md"
          value={user.firstName}
          onChange={(e) =>
            setUser(...user, (user[e.target.name] = e.target.value))
          }
        />
      </div>

      <div className="flex flex-col space-y-2">
        <span>Apellidos</span>
        <input
          type="text"
          name="lastName"
          className="px-5 py-3 border-2 border-gray-300 rounded-md"
          value={user.lastName}
          onChange={(e) =>
            setUser(...user, (user[e.target.name] = e.target.value))
          }
        />
      </div>

      <div className="flex flex-col space-y-2">
        <span>Dirección de correo electrónico</span>
        <input
          type="text"
          name="email"
          className="px-5 py-3 border-2 border-gray-300 rounded-md"
          value={user.email}
          onChange={(e) =>
            setUser(...user, (user[e.target.name] = e.target.value))
          }
        />
      </div>

      <button className="px-10 py-4 text-white text-sm font-medium bg-[#E84E48] hover:bg-[#D44742] ease-in-out duration-200">
        GUARDAR LOS CAMBIOS
      </button>
    </div>
  );
};

export default EditAccount;
