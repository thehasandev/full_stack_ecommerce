import Image from "./Image";

import Flex from "./Flex";
function ProductCategoris({ name, src }) {
  return (
    <div className="w-44 bg-white shadow-md py-4 rounded-md">
      <Flex className="justify-center">
        <Image src={`http://localhost:8000${src}`} />
      </Flex>
      <p className="font-pop mt-2.5 text-base font-semibold text-primary text-center">
        {name}
      </p>
    </div>
  );
}

export default ProductCategoris;
