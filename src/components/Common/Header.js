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

export default function Header() {
  const router = useRouter();
  const { pathname } = router;

  console.log(pathname);

  return (
    <>
      {pathname === "/" ? (
        <div className="fixed flex z-10 p-5 items-center top-0 w-[100vw] h-[80px] bg-[#000000] bg-opacity-60 backdrop-blur-md">
          <div className="relative w-[100vw]">
            <div className="">
              <Image
                src={logo}
                width={200}
                height={200}
                className="w-[150px] h-[35px]"
              />
            </div>

            <div className="flex absolute bottom-0 right-5 justify-end gap-7">
              <Link href="/dashboard">
                <div className="flex gap-2 cursor-pointer text-[20px] text-[#ffffff] hover:text-[#F15824]">
                  <div className=" pt-[7px]">
                    <AiOutlineHome />
                  </div>
                  <div className=" capitalize">Dashboard</div>
                </div>
              </Link>
              <Link href="/trends">
                <div className="flex gap-2 cursor-pointer text-[20px] text-[#ffffff] hover:text-[#F15824]">
                  <div className=" pt-[7px]">
                    <VscGraph />
                  </div>
                  <div className=" capitalize">Trends</div>
                </div>
              </Link>
              <Link href="/projection">
                <div className="flex gap-2 cursor-pointer text-[20px] text-[#ffffff] hover:text-[#F15824]">
                  <div className=" pt-[7px]">
                    <BsGraphUp />
                  </div>
                  <div className=" capitalize">Projection</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
