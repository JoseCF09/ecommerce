import React from "react";
import { useNavigate } from "react-router-dom";
import routes from "../utilities/routes";

const Product = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(routes.detailproduct(item?._id))}
      className="flex flex-col group cursor-pointer p-2"
    >
      <div className="relative h-[250px] overflow-hidden">
        <img
          className="absolute group-hover:scale-110 ease-in-out duration-1000"
          src={item?.image}
        />
        <div className="absolute top-0 left-0 space-y-4">
          {item?.discount > 0 && (
            <div className="h-16 w-16 rounded-full bg-red-500 flex items-center justify-center">
              <span className="text-lg text-white font-medium">-13%</span>
            </div>
          )}

          {item?.count == 0 && (
            <div className="h-16 w-16 rounded-full bg-black flex items-center justify-center">
              <span className="text-sm text-white font-medium text-center">
                SIN STOCK
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col">
        <h3 className="font-medium flex-1 text-center text-black text-lg hover:text-gray-500">
          {item?.name}
        </h3>
        <div className="flex items-center justify-center space-x-4">
          {item?.discount > 0 && (
            <span className="text-gray-500 text-lg line-through">
              {`CLP ${item?.priceBase}`}
            </span>
          )}
          <span className="text-red-500 text-lg font-medium">{`CLP ${item?.price}`}</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
