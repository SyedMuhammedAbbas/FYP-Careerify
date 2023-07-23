import Logo from "../../images/logo_white.png";
import Image from "next/image";
import { ImFacebook } from "react-icons/im";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="bg-[#1F1B24] backdrop-blur-lg w-[100vw] relative">
        <footer className="bg-[#1F1B24]  h-[300px] flex py-8 relative">
          {/* <div className=""> */}
          <div className="flex justify-center items-center w-[100vw] h-auto p-10 flex-wrap relative">
            <div className="grid">
              <div className="flex ">
                <Image
                  src={Logo}
                  alt="logo"
                  width={400}
                  height={150}
                  className="w-[250px] h-[55px] aspect-auto tablet2.1:w-[200px] tablet2.1:h-auto"
                />
              </div>
            </div>
          </div>
        </footer>

        <div className="flex justify-center">
          <div className="flex tablet2.1:flex-col items-center w-[80vw] tablet2.1:w-[90vw] h-[50px] tablet2.1:h-auto mb-5 rounded-lg bg-[#000000] bg-opacity-20 gap-4 text-center py-4 relative">
            <div className="flex gap-6 justify-center items-center pl-10 tablet2.1:pl-0">
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

            <div className="flex justify-center absolute tablet2.1:relative tablet2.1:right-0 tablet2.1:text-[15px] right-7 items-center font-semibold gap-4 font-montserrat">
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
