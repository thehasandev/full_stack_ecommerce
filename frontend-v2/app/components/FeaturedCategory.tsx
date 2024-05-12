import React from "react";
import Container from "./Container";
import ProductCategoris from "./ProductCategoris";
import Flex from "./Flex";

function FeaturedCategori() {
  return (
    <section className="my-12">
      <Container>
        <h1 className="text-center font-roboto font-semibold text-xl mb-1 text-primary">
          Featured Category
        </h1>
        <h2 className="text-center font-roboto font-medium text-base mb-8 text-primary">
          Get Your Desired Product from Featured Category!
        </h2>
        <Flex className="gap-5 flex-wrap">
          <ProductCategoris />
          <ProductCategoris />
          <ProductCategoris />
          <ProductCategoris />
          <ProductCategoris />
          <ProductCategoris />
          <ProductCategoris />
          <ProductCategoris />
          <ProductCategoris />
          <ProductCategoris />
          <ProductCategoris />
          <ProductCategoris />
          <ProductCategoris />
          <ProductCategoris />
        </Flex>
      </Container>
    </section>
  );
}

export default FeaturedCategori;
