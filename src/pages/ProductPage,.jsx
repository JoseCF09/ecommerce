import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BaseModal from "../components/BaseModal";
import {
  addDetail,
  addProduct,
  deleteDetail,
  setSelectProduct,
  updateDetail,
} from "../redux/features/productAdminSlice";
import axios from "axios";

const ProductPage = () => {
  const [modalProduct, setModalProduct] = useState(true);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.productAdmin);

  const setValue = (name, value) => {
    dispatch(setSelectProduct({ name, value }));
  };

  const newProduct = async () => {
    const response = await axios.post(
      "http://localhost:3000/product",
      data.selectProduct
    );

    dispatch(addProduct());
  };

  return (
    <div className="text-black px-4 sm:px-6 lg:px-8 flex flex-col space-y-2 w-full">
      <div className="flex justify-between">
        <h3 className="text-xl font-medium">Productos</h3>

        <div className="">
          <button
            onClick={() => setModalProduct(true)}
            className="bg-blue-500 hover:bg-blue-600 px-10 py-2 text-white text-lg font-medium rounded-lg"
          >
            Crear
          </button>
        </div>
      </div>

      <div className="hidden grid-cols-6 py-4 md:grid">
        <span className="col-span-4 font-medium">PRODUCTO</span>
        <span className="font-medium">PRECIO</span>
        <span className="font-medium">DESCUENTO</span>
      </div>

      {data.products.map((product) => (
        <div className="flex flex-col grid-cols-6 space-y-2 md:grid">
          <div className="col-span-4">
            <div className="pr-5 py-3 flex">
              <div className="flex items-center  space-x-0 md:space-x-10 flex-row">
                <div className="flex flex-col justify-center space-y-8">
                  <p>{product.name}</p>

                  <div className="flex flex-col space-y-4 md:hidden">
                    <div className="flex">
                      <span className="text-gray-500 flex text-sm font-medium items-center flex-1">
                        PRECIO
                      </span>

                      <span className="text-gray-500 flex items-center justify-end flex-1">
                        S/ 123.19
                      </span>
                    </div>

                    <div className="flex">
                      <span className="text-gray-500 flex text-sm font-medium items-center flex-1">
                        DESCUENTO
                      </span>

                      <span className="text-gray-500 flex items-center text-lg font-medium flex-1 justify-end">
                        10%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <span className="text-gray-500 hidden md:flex items-center">
            {`CLP ${product.price}`}
          </span>

          <span className="text-gray-500 hidden md:flex items-center text-lg font-medium">
            {`${product.discount}%`}
          </span>
        </div>
      ))}

      <BaseModal
        title="Crear producto"
        status={modalProduct}
        changeStatus={setModalProduct}
      >
        <div className="md:w-[600px] flex flex-col p-5 space-y-3">
          <div className="flex flex-col space-y-2">
            <span className="text-lg">Nombre</span>
            <input
              name="name"
              onChange={(e) => setValue(e.target.name, e.target.value)}
              className="border-2 rounded-md py-1 px-2 text-lg"
              placeholder="Nombre del producto"
              value={data.selectProduct.name}
            />
          </div>

          <div className="flex flex-col space-y-2">
            <span className="text-lg">Imagen</span>
            <input
              name="image"
              onChange={(e) => setValue(e.target.name, e.target.value)}
              className="border-2 rounded-md py-1 px-2 text-lg"
              placeholder="Nombre del producto"
              value={data.selectProduct.image}
            />
          </div>

          <div className="flex flex-col space-y-2">
            <span className="text-lg">Descripción</span>
            <input
              name="description"
              onChange={(e) => setValue(e.target.name, e.target.value)}
              className="border-2 rounded-md py-1 px-2 text-lg"
              placeholder="Nombre del producto"
              value={data.selectProduct.description}
            />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col space-y-2">
              <span className="text-lg">Precio</span>
              <input
                type="number"
                name="priceBase"
                onChange={(e) =>
                  setValue(e.target.name, parseFloat(e.target.value))
                }
                className="border-2 rounded-md py-1 px-2 text-lg"
                placeholder="Precio del producto"
                value={data.selectProduct.priceBase}
              />
            </div>

            <div className="flex flex-col space-y-2">
              <span className="text-lg">Descuento %</span>
              <input
                type="number"
                name="discount"
                onChange={(e) =>
                  setValue(e.target.name, parseFloat(e.target.value))
                }
                className="border-2 rounded-md py-1 px-2 text-lg"
                placeholder="Descuento del producto"
                value={data.selectProduct.discount}
              />
            </div>

            <div className="flex flex-col space-y-2">
              <span className="text-lg">Cantidad</span>
              <input
                type="number"
                name="count"
                onChange={(e) =>
                  setValue(e.target.name, parseFloat(e.target.value))
                }
                className="border-2 rounded-md py-1 px-2 text-lg"
                placeholder="Descuento del producto"
                value={data.selectProduct.count}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col space-y-2">
              <span className="text-lg">Marca</span>

              <select
                onChange={(e) =>
                  setValue(
                    "brand",
                    e.target[e.target.selectedIndex].getAttribute("name")
                  )
                }
                className="border-2 rounded-md py-1 flex-1 px-2 text-lg"
              >
                <option name="Redragon">Redragon</option>
                <option name="VSG">VSG</option>
                <option name="T-Dagger">T-Dagger</option>
                <option name="Logitech">Logitech</option>
                <option name="Razer">Razer</option>
                <option name="Rivals">Rivals</option>
                <option name="Aula">Aula</option>
              </select>
            </div>

            <div className="flex flex-col space-y-2">
              <span className="text-lg">Categoria</span>

              <select
                onChange={(e) =>
                  setValue(
                    "category",
                    e.target[e.target.selectedIndex].getAttribute("name")
                  )
                }
                className="border-2 rounded-md py-1 flex-1 px-2 text-lg"
              >
                <option name="Teclados">Teclados</option>
                <option name="Ratones">Ratones</option>
                <option name="Audifonos">Audifonos</option>
                <option name="Combos">Combos</option>
                <option name="Accesorios">Accesorios</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            <span className="text-lg">Detalles</span>

            {data.selectProduct.details.map((product, i) => (
              <div className="grid grid-cols-3 gap-4">
                <input
                  name="title"
                  className="border-2 rounded-md py-1 px-2 text-lg"
                  placeholder="Titulo"
                  onChange={(e) =>
                    dispatch(
                      updateDetail({
                        data: { id: i + 1, title: e.target.value },
                      })
                    )
                  }
                />

                <input
                  name="description"
                  className="border-2 rounded-md py-1 px-2 text-lg col-span-2"
                  placeholder="Detalles"
                  onChange={(e) =>
                    dispatch(
                      updateDetail({
                        data: { id: i + 1, description: e.target.value },
                      })
                    )
                  }
                />
              </div>
            ))}

            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => dispatch(addDetail())}
                className="py-2 text-white bg-[#53BB63] rounded-md font-medium hover:bg-[#48A457] ease-in-out duration-200"
              >
                Agregar detalle
              </button>

              <button
                onClick={() => dispatch(deleteDetail())}
                className="py-2 text-white bg-[#E62E4C] rounded-md font-medium hover:bg-[#D92C48] ease-in-out duration-200"
              >
                Eliminar
              </button>
            </div>
          </div>

          <button
            onClick={() => newProduct()}
            className="py-2 text-white text-xl bg-[#54B2DE] rounded-md font-medium hover:bg-[#4DA2CA] ease-in-out duration-200"
          >
            Crear
          </button>
        </div>
      </BaseModal>
    </div>
  );
};

export default ProductPage;
