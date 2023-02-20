import Image from "next/image";
import Logo from "../../images/logo_white.png";
import Logo_black from "../../images/logo.png";
import { AiOutlineHome } from "react-icons/ai";
import { VscGraph } from "react-icons/vsc";
import { BsGraphUp } from "react-icons/bs";
import { useRouter } from "next/router";
import Link from "next/link";
import { BiSearch } from "react-icons/bi";

export default function Header() {
  const router = useRouter();
  const { pathname } = router;

  console.log(pathname);

  return (
    <>
      {pathname === "/" ? (
        <div className="flex justify-center  items-center top-0 w-[100vw] h-[80px] bg-transparent">
          <div className="flex justify-center gap-7">
            <Link href="/dashboard">
              <div className="flex gap-2 cursor-pointer text-[20px] text-[#adadad] hover:text-[#ffffff]">
                <div className=" pt-[7px]">
                  <AiOutlineHome />
                </div>
                <div className=" capitalize">Dashboard</div>
              </div>
            </Link>
            <Link href="/trends">
              <div className="flex gap-2 cursor-pointer text-[20px] text-[#adadad] hover:text-[#ffffff]">
                <div className=" pt-[7px]">
                  <VscGraph />
                </div>
                <div className=" capitalize">Trends</div>
              </div>
            </Link>
            <Link href="/projection">
              <div className="flex gap-2 cursor-pointer text-[20px] text-[#adadad] hover:text-[#ffffff]">
                <div className=" pt-[7px]">
                  <BsGraphUp />
                </div>
                <div className=" capitalize">Projection</div>
              </div>
            </Link>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
