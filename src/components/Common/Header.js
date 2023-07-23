import Image from "next/image";
// import Logo from "../../images/logo_white.png";
// import Logo_black from "../../images/logo.png";
import { AiOutlineHome } from "react-icons/ai";
// import { VscGraph } from "react-icons/vsc";
import { BsGraphUp } from "react-icons/bs";
import { useRouter } from "next/router";
import Link from "next/link";
// import { BiSearch } from "react-icons/bi";
import logo from "@/images/logo_white.png";
import { useState, useEffect } from "react";
import { Turn as Hamburger } from "hamburger-react";

// import { AiOutlineHome } from "react-icons/ai";
// import { VscGraph } from "react-icons/vsc";
// import { BsGraphUp } from "react-icons/bs";
import { TiContacts } from "react-icons/ti";
import { BsPeopleFill } from "react-icons/bs";

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

  // const [searchResult, setSearchResult] = useState();

  // // const router = useRouter();

  // const handleSearch = () => {
  //   router.push(`/dashboard?search=${searchResult}`);
  // };
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(false);
      } else {
        // if scroll up show the navbar
        setShow(true);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  const [isOpen, setOpen] = useState(false);

  const navPages = [
    { path: "/dashboard", heading: "Dashboard", icon: <AiOutlineHome /> },
    // { path: "/trends", heading: "Trends", icon: <VscGraph /> },
    { path: "/projection", heading: "Projection", icon: <BsGraphUp /> },
    { path: "/about", heading: "About Us", icon: <BsPeopleFill /> },
    { path: "/contact", heading: "Contact Us", icon: <TiContacts /> },
  ];

  return (
    <>
      {pathname === "/" ? (
        // <div className="w-[100vw] fixed flex z-10 h-[50px] shadow-none justify-center backdrop-blur-lg">
        <>
          <div
            className={`fixed flex z-40 m-5 p-5 items-center rounded-lg shadow-md transition-all delay-200 ease-in-out ${
              show ? "top-0" : "-top-28"
            } w-[80vw] h-[80px] mobile2.1:h-[60px] bg-[#1F1B24] bg-opacity-90 backdrop-blur-xl`}
          >
            <div className="flex items-center relative  w-[80vw] h-[80px]">
              <div className="flex items-center">
                <Image
                  src={logo}
                  width={200}
                  height={200}
                  className="w-[150px] h-[35px] aspect-auto tablet1:w-[100px] tablet1:h-auto"
                />
              </div>

              <div className="flex absolute right-10 tablet1:right-3 py-6 gap-7 items-center">
                {pages.map((item, index) => {
                  return (
                    <>
                      <Link href={item.pathname}>
                        <div
                          key={index}
                          className={`flex gap-2 cursor-pointer text-[15px] tablet1:hidden  px-4 py-1 items-center transition-all ease-out duration-200 ${
                            item.pathname === "/" && item.name === "Home"
                              ? "bg-[#F15A24] text-[#ffffff] justify-center shadow-lg rounded-xl"
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

                      {pages.length - 1 !== index && (
                        <div className="border-r h-6 border-[#8b8b8b] py-auto tablet1:hidden"></div>
                      )}
                    </>
                  );
                })}
                <div className="hidden tablet1:block ">
                  <Hamburger
                    size={20}
                    toggled={isOpen}
                    toggle={setOpen}
                    color="#F15A24"
                  />
                </div>
              </div>
            </div>
          </div>
          {isOpen && (
            <div className="hidden tablet1:block tablet1:fixed tablet1:mt-[90px] tablet1:shadow-md tablet1:transition-all tablet1:delay-500 tablet1:ease-in-out tablet1:z-40 tablet1:w-[80vw] tablet1:rounded-[20px] tablet1:bg-[#1F1B24] tablet1:bg-opacity-90 tablet1:backdrop-blur-xl">
              {navPages.map((item, index) => {
                return (
                  <Link href={item.path} key={index}>
                    <div
                      className={`flex items-center justify-center gap-2 cursor-pointer text-[17px] h-12 font-semibold ${
                        pathname === item.path
                          ? "text-[#E45326]"
                          : "text-[#d6d6d6] hover:text-[#d46746]"
                      }`}
                    >
                      <div className=" pt-[1px] text-[25px]">{item.icon}</div>
                      <div className=" capitalize">{item.heading}</div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </>
      ) : (
        // </div>
        ""
      )}
    </>
  );
}
