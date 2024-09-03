import Product from "../Product";
import Container from "../Container";
import Flex from "../Flex";
import { useEffect, useState } from "react";

function FeatureProduct() {
  const [allproduct, setAllproduct] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let res = await fetch("http://localhost:8000/api/v1/product/allproduct");
      if (!res.ok) {
        throw new Error("Api is not found");
      } else {
        let data = await res.json();
        setAllproduct(data);
      }
    };
    getData();
  }, []);
  return (
    <section className="my-8">
      <Container>
        <h1 className="text-center font-roboto font-semibold text-xl mb-1 text-primary">
          Featured Products
        </h1>
        <h2 className="text-center font-roboto font-medium text-base mb-8 text-primary">
          Check & Get Your Desired Product!
        </h2>
        <Flex className="flex-wrap gap-y-6 justify-between">
          {allproduct.map((item, index) => (
            <Product
              name={item.name}
              src={item.image}
              regulerPrice={item.ragulerPrice}
              salePrice={item.salePrice}
              key={index}
            />
          ))}
        </Flex>
      </Container>
    </section>
  );
}

export default FeatureProduct;
