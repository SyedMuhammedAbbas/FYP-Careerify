import Logo from "../../images/logo_white.png";
import Image from "next/image";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

export default function Footer() {
  return (
    <>
      <div className="bg-[#2A2A2A] w-[100vw] bg-opacity-90">
        <footer className="bg-[#000000] flex bg-opacity-30 py-8">
          {/* <div className=""> */}
          <div className="flex w-[100vw] h-auto p-10 flex-wrap relative">
            <div className="grid">
              <div className="flex ">
                <Image
                  src={Logo}
                  alt="logo"
                  width={400}
                  height={150}
                  className="w-[150px] h-[35px]"
                />
              </div>
              <div className="flex gap-4 justify-center">
                <div className="text-[27px] cursor-pointer text-[#4267B2]">
                  <BsFacebook />
                </div>
                <div className="text-[30px] cursor-pointer text-[#1DA1F2]">
                  <AiFillTwitterCircle />
                </div>
                <div className="text-[30px] cursor-pointer text-[#0077B5]">
                  <AiFillLinkedin />
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full">
            <div className="w-auto pr-10 flex gap-5 px-4 mb-8 md:mb-0 ">
              <div className="p-5 w-[400px]">
                <h2 className="font-bold text-[#F15A24] uppercase mb-4">
                  About Us
                </h2>
                <p className="text-[#ffffff] leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="w-[400px] flex pb-10 items-center">
              <div className="grid">
                <h2 className="font-bold text-[#F15A24] uppercase mb-4">
                  Contact Us
                </h2>
                <ul className="list-unstyled">
                  <li className="mb-4">
                    <i className="fas fa-envelope mr-2 text-[#ffffff]"></i>
                    <a
                      href="mailto:info@example.com"
                      className="text-[#ffffff] hover:text-[#ffffff]"
                    >
                      info@careerify.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* </div> */}
        </footer>
        <div className="flex items-center w-full gap-4 text-center py-4 justify-center">
          <div className="text-[#ffffff]">careerify . </div>
          <p className="text-[#ffffff]">
            All rights reserved. © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </>
  );
}
