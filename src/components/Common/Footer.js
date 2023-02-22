import Logo from "../../images/logo_bnw_1.png";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className="bg-[#d87450] w-[100vw]">
        <footer className="bg-[#F15A24] flex bg-opacity-30 py-8">
          {/* <div className=""> */}
          <div className="flex w-[100vw] h-auto p-10 flex-wrap relative">
            <div className="flex ">
              <Image
                src={Logo}
                alt="logo"
                width={400}
                height={150}
                className="w-[150px] h-[35px]"
              />
            </div>
          </div>
          <div className="flex w-full">
            <div className="w-auto pr-10 flex gap-5 px-4 mb-8 md:mb-0 ">
              <div className="p-5 w-[400px]">
                <h2 className="font-bold text-[#ffffff] uppercase mb-4">
                  About Us
                </h2>
                <p className="text-[#ffffff] leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="w-[400px]">
              <h2 className="font-bold text-[#ffffff] uppercase mb-4">
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
                <li className="mb-4">
                  <i className="fab fa-facebook mr-2 text-[#ffffff]"></i>
                  <a
                    href="https://www.facebook.com/example"
                    className="text-[#ffffff] hover:text-[#ffffff]"
                  >
                    Facebook
                  </a>
                </li>
                <li className="mb-4">
                  <i className="fab fa-twitter mr-2 text-[#ffffff]"></i>
                  <a
                    href="https://twitter.com/example"
                    className="text-[#ffffff] hover:text-[#ffffff]"
                  >
                    Twitter
                  </a>
                </li>
                <li className="mb-4">
                  <i className="fab fa-instagram mr-2 text-[#ffffff]"></i>
                  <a
                    href="https://www.instagram.com/example/"
                    className="text-[#ffffff] hover:text-[#ffffff]"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
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
