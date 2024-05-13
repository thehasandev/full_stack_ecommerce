import React from "react";

import Image from "next/image";
import Computer from "../../public/assets/computer.png";
import Flex from "./Flex";
interface productProps {
  data: any;
}
function Product({ data }: productProps) {
  return (
    <div className="w-[320px] bg-white rounded-md shadow-xl">
      <p className="bg-[#6E2594] w-36 rounded-r-full font-pop font-normal text-white text-xs px-2 py-0.5">
        Save: {`${data.ragulerPrice - data.salePrice}৳`}
      </p>
      <img
        src={`http://localhost:8000${data.image}`}
        alt="computer"
        className="w-full h-[300px] object-cover"
      />
      <div className="p-4">
        <h1 className="font-roboto font-medium text-lg text-primary">
          {data.name}
        </h1>
        <Flex className="justify-between items-center">
          <p className="font-roboto font-medium text-base text-orange mt-4 flex items-center gap-x-4 ">
            {data.salePrice}
            {data.ragulerPrice && (
              <span className="text-sm text-black line-through">
                {data.ragulerPrice}
              </span>
            )}
          </p>
          <button className="font-roboto font-medium text-base text-white bg-orange px-4 py-1 rounded-[4px] mt-4">
            Add to card
          </button>
        </Flex>
      </div>
    </div>
  );
}

export default Product;
