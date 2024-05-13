import React from "react";
import Product from "./Product";
import Container from "./Container";
import Flex from "./Flex";

interface featureProductProps {
  data: any;
}
function FeatureProduct({ data }: featureProductProps) {
  return (
    <section className="my-8">
      <Container>
        <h1 className="text-center font-roboto font-semibold text-xl mb-1 text-primary">
          Featured Products
        </h1>
        <h2 className="text-center font-roboto font-medium text-base mb-8 text-primary">
          Check & Get Your Desired Product!
        </h2>
        <Flex className="flex-wrap gap-8">
          {data.map((item: any, index: any) => (
            <Product key={index} data={item}/>
          ))}
        </Flex>
      </Container>
    </section>
  );
}

export default FeatureProduct;
