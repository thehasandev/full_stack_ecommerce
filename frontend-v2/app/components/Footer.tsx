import Container from "./Container";
import Flex from "./Flex";
import Image from "next/image";
import Logo from "../.././public/assets/logo.png";
export default function Footer() {
  return (
    <footer className="bg-primary py-8">
      <Container>
        <Flex className="justify-between">
          <div className="w-32">
            <Image src={Logo} alt="logo" className="w-full mt-16" />
          </div>

          <Flex className="gap-x-8">
            <div>
              <h1 className="font-roboto font-semibold text-lg text-white mb-4">
                Menu
              </h1>
              <ul>
                <li className="font-roboto font-normal text-sm mb-2 text-white hover:text-orange duration-200">
                  Home 1
                </li>
                <li className="font-roboto font-normal text-sm mb-2 text-white hover:text-orange duration-200">
                  Home 2
                </li>
                <li className="font-roboto font-normal text-sm mb-2 text-white hover:text-orange duration-200">
                  Home 3
                </li>
                <li className="font-roboto font-normal text-sm mb-2 text-white hover:text-orange duration-200">
                  Home 4
                </li>
                <li className="font-roboto font-normal text-sm mb-2 text-white hover:text-orange duration-200">
                  Home 5
                </li>
              </ul>
            </div>
            <div>
              <h1 className="font-roboto font-semibold text-lg text-white mb-4">
                Categori
              </h1>
              <ul>
                <li className="font-roboto font-normal text-sm mb-2 text-white hover:text-orange duration-200">
                  Categori 1
                </li>
                <li className="font-roboto font-normal text-sm mb-2 text-white hover:text-orange duration-200">
                  Categori 2
                </li>
                <li className="font-roboto font-normal text-sm mb-2 text-white hover:text-orange duration-200">
                  Categori 3
                </li>
                <li className="font-roboto font-normal text-sm mb-2 text-white hover:text-orange duration-200">
                  Categori 4
                </li>
                <li className="font-roboto font-normal text-sm mb-2 text-white hover:text-orange duration-200">
                  Categori 5
                </li>
              </ul>
            </div>
            <div>
              <h1 className="font-roboto font-semibold text-lg text-white mb-4">
                Shop
              </h1>
              <ul>
                <li className="font-roboto font-normal text-sm mb-2 text-white hover:text-orange duration-200">
                  Shop 1
                </li>
                <li className="font-roboto font-normal text-sm mb-2 text-white hover:text-orange duration-200">
                  Shop 2
                </li>
                <li className="font-roboto font-normal text-sm mb-2 text-white hover:text-orange duration-200">
                  Shop 3
                </li>
                <li className="font-roboto font-normal text-sm mb-2 text-white hover:text-orange duration-200">
                  Shop 4
                </li>
                <li className="font-roboto font-normal text-sm mb-2 text-white hover:text-orange duration-200">
                  Shop 5
                </li>
              </ul>
            </div>
            <div>
              <h1 className="font-roboto font-semibold text-lg text-white mb-4">
                Product
              </h1>
              <ul>
                <li className="font-roboto font-normal text-sm mb-2 text-white hover:text-orange duration-200">
                  Product 1{" "}
                </li>
                <li className="font-roboto font-normal text-sm mb-2 text-white hover:text-orange duration-200">
                  Product 2{" "}
                </li>
                <li className="font-roboto font-normal text-sm mb-2 text-white hover:text-orange duration-200">
                  Product 3{" "}
                </li>
                <li className="font-roboto font-normal text-sm mb-2 text-white hover:text-orange duration-200">
                  Product 4{" "}
                </li>
                <li className="font-roboto font-normal text-sm mb-2 text-white hover:text-orange duration-200">
                  Product 5{" "}
                </li>
              </ul>
            </div>
          </Flex>

          <div>
            <h1 className="font-roboto font-semibold text-lg uppercase text-white mb-4">
              Brand
            </h1>
            <Flex className="flex-wrap w-44 gap-5">
              <div className="w-16">
                <Image src={Logo} alt="logo" className="w-full" />
              </div>

              <div className="w-16">
                <Image src={Logo} className="w-full" />
              </div>

              <div className="w-16">
                <Image src={Logo} className="w-full" />
              </div>

              <div className="w-16">
                <Image src={Logo} className="w-full" />
              </div>
            </Flex>
            <p className="font-pop font-normal text-xs text-center text-white mt-8">
              2020 Orebi Minimal eCommerce Figma Template by Adveits
            </p>
          </div>
        </Flex>
      </Container>
    </footer>
  );
}
