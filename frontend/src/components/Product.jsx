import React from "react";

import Image from "./Image";
import Flex from "./Flex";
function Product({ name, salePrice, regulerPrice, src }) {
  return (
    <div className="w-[320px] bg-white rounded-md shadow-xl">
      <p className="bg-[#6E2594] w-36 rounded-r-full font-pop font-normal text-white text-xs px-2 py-0.5">
        Save: {regulerPrice - salePrice}৳
      </p>
      <Image src={`http://localhost:8000${src}`} className="w-full" />
      <div className="p-4">
        <h1 className="font-roboto font-medium text-lg text-primary">{name}</h1>
        <Flex className="justify-between items-center">
          <p className="font-roboto font-medium text-base text-orange mt-4 flex items-center gap-x-4 ">
            {salePrice}৳
            <span className="text-sm text-black line-through">
              {regulerPrice}৳
            </span>
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
