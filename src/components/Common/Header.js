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
        <div className="fixed flex z-10 p-5 items-center top-0 w-full h-[80px] bg-black bg-opacity-60 backdrop-blur-md">
          <div className="flex relative w-[100vw]">
            <div className="">
              <Image
                src={logo}
                width={200}
                height={200}
                className="w-[150px] h-[35px]"
              />
            </div>

            <div className="flex absolute right-10 gap-7">
              <div className="bg-[#e5e5e5] flex items-center rounded-[20px] w-[235px] h-[30px]">
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
              </div>

              {pages.map((item, index) => {
                return (
                  <Link href={item.pathname}>
                    <div className="flex gap-2 cursor-pointer text-[15px] px-4 py-1 bg-orange-400 rounded-[20px] h-[30px] text-white hover:bg-white hover:text-orange-400 transition-all ease-out duration-200">
                      <div className="flex items-center font-semibold">
                        {item.icon}
                      </div>
                      <div className="font-semibold">{item.name}</div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
