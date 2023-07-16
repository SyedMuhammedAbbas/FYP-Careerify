import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { VscGraph } from "react-icons/vsc";
import { BsGraphUp } from "react-icons/bs";
import { TiContacts } from "react-icons/ti";
import { BsPeopleFill } from "react-icons/bs";
import { useRouter } from "next/router";
import Logo from "../../images/logo_white.png";
// import Logo_black from "../../images/logo.png";
import Image from "next/image";

export default function Sidebar() {
  const router = useRouter();
  const { pathname } = router;

  const sidebarPages = [
    { path: "/dashboard", heading: "Dashboard", icon: <AiOutlineHome /> },
    // { path: "/trends", heading: "Trends", icon: <VscGraph /> },
    { path: "/projection", heading: "Projection", icon: <BsGraphUp /> },
    { path: "/about", heading: "About Us", icon: <BsPeopleFill /> },
    { path: "/contact", heading: "Contact Us", icon: <TiContacts /> },
  ];
  return (
    <>
      {pathname !== "/" ? (
        <div className="bg-[#111827] float-left w-56 pl-6 h-[100vh] fixed">
          <nav className="grid gap-10">
            <Link href="/">
              <div className="float-left pr-4 pt-5">
                <Image src={Logo} width={200} height={70} />
              </div>
            </Link>
            {sidebarPages.map((item, index) => {
              return (
                <div className="h-[55px]" key={index}>
                  <div className="w-[30px] h-[30px] float-right">
                    {pathname === item.path && (
                      <div className="flex float-right bg-[#f1f5f9] w-[30px] h-[30px]">
                        <div className="w-[30px] h-[30px] bg-[#111827] rounded-br-[20px]"></div>
                      </div>
                    )}
                  </div>
                  <Link href={item.path}>
                    <div
                      className={`flex items-center pl-5 gap-2 cursor-pointer text-[17px] w-full h-12 font-semibold ${
                        pathname === item.path
                          ? "bg-[#f1f5f9]  text-[#E45326] rounded-tl-[30px] rounded-bl-[30px]"
                          : "text-[#d6d6d6] hover:text-[#d46746]"
                      }`}
                    >
                      <div className=" pt-[1px] text-[25px]">{item.icon}</div>
                      <div className=" capitalize">{item.heading}</div>
                    </div>
                  </Link>
                  <div className="w-[30px] h-[30px] float-right">
                    {pathname === item.path && (
                      <div className="flex float-right bg-[#f1f5f9] w-[30px] h-[30px]">
                        <div className="w-[30px] h-[30px] bg-[#111827] rounded-tr-[20px]"></div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </nav>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
