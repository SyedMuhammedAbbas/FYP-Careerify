import Logo from "../../images/logo_white.png";
import Image from "next/image";
import { ImFacebook } from "react-icons/im";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="bg-[#1F1B24] w-[100vw]">
        <footer className="bg-[#1F1B24] flex py-8">
          {/* <div className=""> */}
          <div className="flex justify-center items-center w-[100vw] h-auto p-10 flex-wrap relative">
            <div className="grid">
              <div className="flex ">
                <Image
                  src={Logo}
                  alt="logo"
                  width={400}
                  height={150}
                  className="w-[250px] h-[55px]"
                />
              </div>
            </div>
          </div>
          {/* <div className="flex w-full">
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
          </div> */}

          {/* </div> */}
        </footer>

        <div className="flex justify-center">
          <div className="flex items-center w-[80vw] h-[50px] rounded-lg bg-[#F15A24] gap-4 text-center py-4 relative">
            <div className="flex gap-6 justify-center items-center pl-10">
              <div className="bg-[#ffffff] rounded-[50%] bg-opacity-10 shadow-xl p-2 text-[20px] cursor-pointer text-[#ffffff]">
                <ImFacebook />
              </div>
              <div className="bg-[#ffffff] rounded-[50%] bg-opacity-10 shadow-xl p-2 text-[20px] cursor-pointer text-[#ffffff]">
                <IoLogoInstagram />
              </div>
              <div className="bg-[#ffffff] rounded-[50%] bg-opacity-10 shadow-xl p-2 text-[20px] cursor-pointer text-[#ffffff]">
                <FaLinkedinIn />
              </div>
            </div>

            <div className="flex justify-center absolute right-7 items-center font-semibold gap-4 font-montserrat">
              <div className="text-[#ffffff]">Careerify . </div>
              <p className="text-[#ffffff]">
                All rights reserved. © {new Date().getFullYear()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
