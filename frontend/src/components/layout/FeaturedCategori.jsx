import Container from "../Container";
import ProductCategoris from "../ProductCategoris";
import Flex from "../Flex";
import { useEffect, useState } from "react";

function FeaturedCategori() {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let res = await fetch("http://localhost:8000/api/v1/product/allcategory");
      if (!res.ok) {
        throw new Error("Api is not fout");
      } else {
        let data = await res.json();
        setCategory(data);
      }
    };
    getData();
  }, []);
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
          {category.map((item, index) => (
            <ProductCategoris key={index} name={item.name} src={item.image} />
          ))}
        </Flex>
      </Container>
    </section>
  );
}

export default FeaturedCategori;
