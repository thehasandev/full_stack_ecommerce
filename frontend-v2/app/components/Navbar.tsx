"use client";
import Container from "./Container";
import Image from "next/image";
import Logo from "../../public/assets/logo.png";
import Flex from "./Flex";

import { HiMiniUser } from "react-icons/hi2";
import { IoSearchSharp } from "react-icons/io5";
import Link from "next/link";

interface navBarProps {
  data: any;
}

function Navbar({ data }: navBarProps) {
  return (
    <section className="fixed z-10 w-full top-0">
      <div className="bg-primary py-3">
        <Container>
          <Flex className="items-center justify-between">
            <div className="w-32">
              <Image src={Logo} alt="logo" />
            </div>

            <div className="w-[500px]">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search ..."
                  className="py-2 px-5 w-full"
                />
                <IoSearchSharp
                  size={20}
                  className="absolute top-1/2 right-5 -translate-y-1/2"
                />
              </div>
            </div>

            <div>
              <Flex className="items-center gap-x-3">
                <HiMiniUser size={25} className="text-orange" />
                <div className="text-white">
                  <h2 className="font-roboto font-medium text-xl mb-0.5  text-white">
                    Account
                  </h2>
                  <Flex className="gap-x-2">
                    <p className="font-pop font-normal text-sm cursor-pointer hover:text-orange">
                      Register
                    </p>
                    <p className="font-pop font-normal text-sm cursor-pointer ">
                      or
                    </p>
                    <p className="font-pop font-normal text-sm cursor-pointer hover:text-orange">
                      Login
                    </p>
                  </Flex>
                </div>
              </Flex>
            </div>

            <div>
              <button className="px-5 bg-[#1B2E83] text-white text-base rounded-[4px] font-roboto font-medium py-2">
                PC Builder
              </button>
            </div>
          </Flex>
        </Container>
      </div>

      <nav className="bg-slate-100 py-2">
        <Container>
          <ul className="flex justify-between items-center">
            {data.map((item: any, index: any) => (
              <li
                key={index}
                className="font-roboto font-medium text-base capitalize text-primary cursor-pointer hover:text-orange"
              >
                <Link href={item.name}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </Container>
      </nav>
    </section>
  );
}

export default Navbar;
