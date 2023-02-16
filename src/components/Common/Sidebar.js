import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { VscGraph } from "react-icons/vsc";
import { BsGraphUp } from "react-icons/bs";
import { TiContacts } from "react-icons/ti";
import { BsPeopleFill } from "react-icons/bs";
import { useRouter } from "next/router";
import Logo from "../../images/logo_white.png";
import Logo_black from "../../images/logo.png";
import Image from "next/image";

export default function Sidebar() {
  const router = useRouter();
  const { pathname } = router;
  return (
    <>
      {pathname !== "/" ? (
        <div className="bg-[#272727] float-left w-56 pl-6 h-[100vh] fixed z-10">
          <nav className="grid gap-10">
            <Link href="/">
              <div className="float-left pr-4">
                <Image src={Logo} width={200} height={70} />
              </div>
            </Link>
            <div className="text-[#494949] grid gap-10">
              <div className="h-[55px]">
                {pathname === "/dashboard" && (
                  <div className="flex float-right bg-[#b9b9b9] w-[30px] h-[30px]">
                    <div className="w-[30px] h-[30px] bg-[#272727] rounded-br-[20px]"></div>
                  </div>
                )}
                <Link href="/dashboard">
                  <div
                    className={`flex items-center pl-3 gap-2 cursor-pointer text-[20px] w-full h-11 ${
                      pathname === "/dashboard"
                        ? "bg-[#b9b9b9]  text-[#E45326] rounded-tl-[20px] rounded-bl-[20px]"
                        : "text-[#d6d6d6] hover:text-[#E45326]"
                    }`}
                  >
                    <div className=" pt-[4px]">
                      <AiOutlineHome />
                    </div>
                    <div className=" capitalize">Dashboard</div>
                  </div>
                </Link>
                {pathname === "/dashboard" && (
                  <div className="flex float-right bg-[#b9b9b9] w-[30px] h-[30px]">
                    <div className="w-[30px] h-[30px] bg-[#272727] rounded-tr-[20px]"></div>
                  </div>
                )}
              </div>

              <div className="h-[55px]">
                {pathname === "/trends" && (
                  <div className="flex float-right bg-[#b9b9b9] w-[30px] h-[30px]">
                    <div className="w-[30px] h-[30px] bg-[#272727] rounded-br-[20px]"></div>
                  </div>
                )}
                <Link href="/trends">
                  <div
                    className={`flex items-center pl-3 gap-2 cursor-pointer text-[20px] w-full h-11 ${
                      pathname === "/trends"
                        ? "bg-[#b9b9b9]  text-[#E45326] rounded-tl-[20px] rounded-bl-[20px]"
                        : "text-[#d6d6d6] hover:text-[#E45326]"
                    }`}
                  >
                    <div className=" pt-[4px]">
                      <VscGraph />
                    </div>
                    <div className=" capitalize">Trends</div>
                  </div>
                </Link>
                {pathname === "/trends" && (
                  <div className="flex float-right bg-[#b9b9b9] w-[30px] h-[30px]">
                    <div className="w-[30px] h-[30px] bg-[#272727] rounded-tr-[20px]"></div>
                  </div>
                )}
              </div>

              <div className="h-[55px]">
                {pathname === "/projection" && (
                  <div className="flex float-right bg-[#b9b9b9] w-[30px] h-[30px]">
                    <div className="w-[30px] h-[30px] bg-[#272727] rounded-br-[20px]"></div>
                  </div>
                )}
                <Link href="/projection">
                  <div
                    className={`flex items-center pl-3 gap-2 cursor-pointer text-[20px] w-full h-11 ${
                      pathname === "/projection"
                        ? "bg-[#b9b9b9]  text-[#E45326] rounded-tl-[20px] rounded-bl-[20px]"
                        : "text-[#d6d6d6] hover:text-[#E45326]"
                    }`}
                  >
                    <div className=" pt-[4px]">
                      <BsGraphUp />
                    </div>
                    <div className=" capitalize">Projection</div>
                  </div>
                </Link>
                {pathname === "/projection" && (
                  <div className="flex float-right bg-[#b9b9b9] w-[30px] h-[30px]">
                    <div className="w-[30px] h-[30px] bg-[#272727] rounded-tr-[20px]"></div>
                  </div>
                )}
              </div>

              <div className="h-[55px]">
                {pathname === "/about" && (
                  <div className="flex float-right bg-[#b9b9b9] w-[30px] h-[30px]">
                    <div className="w-[30px] h-[30px] bg-[#272727] rounded-br-[20px]"></div>
                  </div>
                )}
                <Link href="about">
                  <div
                    className={`flex items-center pl-3 gap-2 cursor-pointer text-[20px] w-full h-11 ${
                      pathname === "/about"
                        ? "bg-[#b9b9b9]  text-[#E45326] rounded-tl-[20px] rounded-bl-[20px]"
                        : "text-[#d6d6d6] hover:text-[#E45326]"
                    }`}
                  >
                    <div className=" pt-[4px]">
                      <BsPeopleFill />
                    </div>
                    <div className=" capitalize">About Us</div>
                  </div>
                </Link>
                {pathname === "/about" && (
                  <div className="flex float-right bg-[#b9b9b9] w-[30px] h-[30px]">
                    <div className="w-[30px] h-[30px] bg-[#272727] rounded-tr-[20px]"></div>
                  </div>
                )}
              </div>

              <div className="h-[55px]">
                {pathname === "/contact" && (
                  <div className="flex float-right bg-[#b9b9b9] w-[30px] h-[30px]">
                    <div className="w-[30px] h-[30px] bg-[#272727] rounded-br-[20px]"></div>
                  </div>
                )}
                <Link href="contact">
                  <div
                    className={`flex items-center pl-3 gap-2 cursor-pointer text-[20px] w-full h-11 ${
                      pathname === "/contact"
                        ? "bg-[#b9b9b9]  text-[#E45326] rounded-tl-[20px] rounded-bl-[20px]"
                        : "text-[#d6d6d6] hover:text-[#E45326]"
                    }`}
                  >
                    <div className=" pt-[4px]">
                      <TiContacts />
                    </div>
                    <div className=" capitalize">Contact Us</div>
                  </div>
                </Link>
                {pathname === "/contact" && (
                  <div className="flex float-right bg-[#b9b9b9] w-[30px] h-[30px]">
                    <div className="w-[30px] h-[30px] bg-[#272727] rounded-tr-[20px]"></div>
                  </div>
                )}
              </div>
            </div>
          </nav>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
