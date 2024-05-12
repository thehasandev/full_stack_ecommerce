import Image from "next/image";
import Container from "./components/Container";
import Banner from "./components/Banner";

export default function Home() {
  return (
    <main>
      <Container className="my-16">
        <Banner />
      </Container>
    </main>
  );
}
