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
        <div className="bg-[#272727] float-left w-56 p-6 h-[100vh] fixed z-10">
          <nav className="grid gap-10">
            <Link href="/">
              <div className="float-left">
                <Image src={Logo} width={200} height={70} />
              </div>
            </Link>
            <div className="text-[#494949] grid gap-10">
              <Link href="/dashboard">
                <div className="flex gap-2 cursor-pointer text-[20px] text-[#d6d6d6] hover:text-[#E45326]">
                  <div className=" pt-[4px]">
                    <AiOutlineHome />
                  </div>
                  <div className=" capitalize">Dashboard</div>
                </div>
              </Link>
              <div className="flex gap-2 cursor-pointer text-[20px] text-[#d6d6d6] hover:text-[#E45326]">
                <div className=" pt-[4px]">
                  <VscGraph />
                </div>
                <div className=" capitalize">Trends</div>
              </div>
              <div className="flex gap-2 cursor-pointer text-[20px] text-[#d6d6d6] hover:text-[#E45326]">
                <div className=" pt-[4px]">
                  <BsGraphUp />
                </div>
                <div className=" capitalize">Projection</div>
              </div>
              <div className="flex gap-2 cursor-pointer text-[20px] text-[#d6d6d6] hover:text-[#E45326]">
                <div className=" pt-[4px]">
                  <BsPeopleFill />
                </div>
                <div className=" capitalize">About Us</div>
              </div>
              <div className="flex gap-2 cursor-pointer text-[20px] text-[#d6d6d6] hover:text-[#E45326]">
                <div className=" pt-[4px]">
                  <TiContacts />
                </div>
                <div className=" capitalize">Contact Us</div>
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
