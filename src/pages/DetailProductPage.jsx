import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addProduct } from "../redux/features/cartSlice";
import { useGetProductQuery } from "../services/productService";

const DetailProductPage = () => {
  const { id } = useParams();
  const { data } = useGetProductQuery(id);
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();

  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-16 flex flex-col items-center">
      <div className="flex">
        <div className="flex flex-1">
          <img src={data?.image} />
        </div>

        <div className="flex flex-1 flex-col pl-10 space-y-8">
          <h2 className="text-4xl font-medium">{data?.name}</h2>

          <div className="flex space-x-4">
            {data?.discount > 0 && (
              <span className="text-gray-500 text-lg line-through">
                {`CLP ${data?.priceBase}`}
              </span>
            )}
            <span className="text-red-500 text-lg font-medium">{`CLP ${data?.price}`}</span>
          </div>

          <p>{data?.description}</p>

          <div className="flex">
            <button
              onClick={() => count > 1 && setCount(count - 1)}
              className="h-10 w-10 border-2 border-gray-500 rounded-tl-md rounded-bl-md"
            >
              -
            </button>
            <input
              type="number"
              className="border-2 border-gray-500 border-l-0 border-r-0 text-center w-20"
              value={count}
            />
            <button
              onClick={() => setCount(count + 1)}
              className="h-10 w-10 border-2 border-gray-500 rounded-tr-md rounded-br-md"
            >
              +
            </button>
          </div>

          <button
            onClick={() =>
              data && dispatch(addProduct({ data: { ...data, number: count } }))
            }
            className="px-10 py-5 text-white text-xl font-medium bg-[#E84E48] hover:bg-[#D44742] ease-in-out duration-200"
          >
            AÑADIR AL CARRITO
          </button>

          <div className="flex flex-col">
            <div className="flex space-x-2">
              <h4 className="font-medium">Categoría:</h4>
              <span>{data?.category}</span>
            </div>
          </div>
        </div>
      </div>

      <h4 className="text-2xl font-bold py-10">DESCRIPCIÓN</h4>

      <div className="max-w-5xl w-full divide-y-2 flex flex-col">
        {data?.details.map((detail) => (
          <div className="flex py-4 px-4 text-gray-500">
            <p className="flex flex-1 font-bold text-lg">{`${
              detail.title == "" ? "Marca" : detail.title
            }:`}</p>
            <p className="flex flex-1 text-lg">IO Esports</p>
          </div>
        ))}

        <div></div>
      </div>
    </div>
  );
};

export default DetailProductPage;
