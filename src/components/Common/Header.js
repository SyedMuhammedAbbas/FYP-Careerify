import Image from "next/image";
// import Logo from "../../images/logo_white.png";
// import Logo_black from "../../images/logo.png";
import { AiOutlineHome } from "react-icons/ai";
import { VscGraph } from "react-icons/vsc";
import { BsGraphUp } from "react-icons/bs";
import { useRouter } from "next/router";
import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import logo from "@/images/logo_white.png";
import { useState } from "react";

export default function Header() {
  const router = useRouter();
  const { pathname } = router;

  console.log(pathname);

  const pages = [
    {
      pathname: "/",
      icon: <AiOutlineHome />,
      name: "Home",
    },
    {
      pathname: "/dashboard",
      icon: <AiOutlineHome />,
      name: "Dashboard",
    },
    { pathname: "/projection", icon: <BsGraphUp />, name: "Projection" },
  ];

  const [searchResult, setSearchResult] = useState();

  // const router = useRouter();

  const handleSearch = () => {
    router.push(`/dashboard?search=${searchResult}`);
  };

  return (
    <>
      {pathname === "/" ? (
        // <div className="w-[100vw] fixed flex z-10 h-[50px] shadow-none justify-center backdrop-blur-lg">
        <div className="fixed flex z-20 m-5 p-5 items-center rounded-lg shadow-md top-0 w-[80vw] h-[60px] md:h-[70px] xl:h-[80px] bg-[#1F1B24] bg-opacity-90 backdrop-blur-xl">
          <div className="flex relative  w-[80vw] h-[60px] md:h-[70px] xl:h-[80px]">
            <div className="flex items-center">
              <Image
                src={logo}
                width={200}
                height={200}
                className="w-[150px] h-[35px]"
              />
            </div>

            <div className="flex absolute right-10 gap-7 items-center">
              {/* <div className="bg-[#e5e5e5] flex items-center rounded-[20px] w-[235px] h-[30px]">
                <input
                  className="bg-transparent outline-none w-[200px] h-[25px] placeholder:text-[20px] placeholder:text-[#6a6a6a] pl-5 text-[20px] text-[#000000]"
                  placeholder="Search..."
                  value={searchResult}
                  onChange={(e) => setSearchResult(e.target.value)}
                />
                <button
                  onClick={() => handleSearch()}
                  className="rounded-[20px] flex justify-center text-[#6a6a6a] hover:text-orange-400 text-[20px] px-2"
                >
                  <BiSearch />
                </button>
              </div> */}

              {pages.map((item, index) => {
                return (
                  <>
                    <Link href={item.pathname}>
                      <div
                        key={index}
                        className={`flex gap-2 cursor-pointer text-[15px] px-4 py-1 items-center transition-all ease-out duration-200 ${
                          item.pathname === "/" && item.name === "Home"
                            ? "bg-[#F15A24] text-[#ffffff] justify-center shadow-lg h-[88px] w-[140px] rounded-b-2xl "
                            : "text-[#ffffff] hover:text-[#F15A24] h-[30px]"
                        }`}
                      >
                        {/* <div className="flex items-center font-semibold">
                        {item.icon}
                      </div> */}
                        <div className="font-montserrat font-semibold">
                          {item.name}
                        </div>
                      </div>
                    </Link>

                    {item.pathname !== "/" &&
                      item.name !== "Home" &&
                      pages.length - 1 !== index && (
                        <div className="border-r h-6 border-[#8b8b8b]"></div>
                      )}
                  </>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        // </div>
        ""
      )}
    </>
  );
}
