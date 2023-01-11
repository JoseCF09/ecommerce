import React from "react";

const Category = ({
  title = "Prueba",
  count = "14",
  img = "https://www.compugo.pe/wp-content/uploads/2021/05/audifonos-1_400x-300x300.jpg",
}) => {
  return (
    <div className="h-52 w-full  rounded-md relative overflow-hidden group cursor-pointer">
      <img
        className="absolute object-cover group-hover:scale-110 ease-in-out duration-300"
        src={img}
      />

      <div className="absolute top-0 bottom-0 right-0 left-0 flex items-end">
        <div className="p-3">
          <h4 className="text-white font-semibold text-xl">
            {title.toLocaleUpperCase()}
          </h4>
          <div className="overflow-hidden max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 ease-in-out duration-300">
            <p className="text-white font-regular text-sm">{`${count} productos`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
