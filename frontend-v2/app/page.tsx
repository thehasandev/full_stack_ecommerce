import Container from "./components/Container";
import Banner from "./components/Banner";
import FeaturedCategori from "./components/FeaturedCategory";
import FeatureProduct from "./components/FeatureProduct";
import { getData } from "./utils/fetchData";

export default async function Home() {
  const categoris = await getData("/product/allcategory");
  const products = await getData("/product/allproduct");

  return (
    <main>
      <Container className="my-16">
        <Banner />
        <FeaturedCategori data={categoris} />
        <FeatureProduct data={products}/>
      </Container>
    </main>
  );
}
