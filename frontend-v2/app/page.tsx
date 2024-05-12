import Image from "next/image";
import Container from "./components/Container";
import Banner from "./components/Banner";
import FeaturedCategori from "./components/FeaturedCategory";
import FeatureProduct from "./components/FeatureProduct";

export default function Home() {
  return (
    <main>
      <Container className="my-16">
        <Banner />
        <FeaturedCategori />
        <FeatureProduct />
      </Container>
    </main>
  );
}
