import Container from "./Container";
import Flex from "./Flex";
import { getData } from "../utils/fetchData";
import Link from "next/link";

interface featureCategorisProps {
  data: any
}
async function FeaturedCategori({data}:featureCategorisProps) {
  return (
    <section className="my-12">
      <Container>
        <h1 className="text-center font-roboto font-semibold text-xl mb-1 text-primary">
          Featured Category
        </h1>
        <h2 className="text-center font-roboto font-medium text-base mb-8 text-primary">
          Get Your Desired Product from Featured Category!
        </h2>

        <Flex className="gap-6 flex-wrap">
          {data.map((item: any, index: any) => (
            <div
              key={index}
              className="w-44 bg-white shadow-md py-4 rounded-md"
            >
              <Flex className="justify-center">
                <Link href={item.name.toLowerCase()}>
                  <img
                    src={`http://localhost:8000${item.image}`}
                    alt="categori"
                  />
                </Link>
              </Flex>
              <p className="font-pop mt-2.5 text-base font-semibold text-primary text-center capitalize">
                <Link href={item.name.toLowerCase()}>{item.name}</Link>
              </p>
            </div>
          ))}
        </Flex>
      </Container>
    </section>
  );
}

export default FeaturedCategori;
