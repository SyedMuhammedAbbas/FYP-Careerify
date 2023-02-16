import Header from "../Common/Header";
import { BiSearch } from "react-icons/bi";
import Logo from "../../images/logo_white.png";
import Image from "next/image";

export default function Home_Section() {
  return (
    <>
      {/* <Header /> */}
      <div className="bg-[url('../images/background_code.jpg')] bg-[length:100%_100%] h-[100vh] bg-no-repeat flex items-center justify-center">
        <div className="flex flex-col gap-5 items-center justify-center w-[100vw] h-[100vh] bg-opacity-80 backdrop-blur-[6px]">
          {/* <div className="HomeHeading font-extrabold text-[6rem] text-center text-[#c05332]">
            Torch bearer for your career !
          </div> */}
          <Image src={Logo} width={400} height={150} />
          <form className="bg-[#c7c7c7] flex items-center rounded-[20px] w-[40vw] h-[5rem]">
            <input
              className="bg-[#c7c7c7] rounded-[20px] outline-none w-[35vw] h-[5rem] placeholder:text-[25px] placeholder:text-[#6a6a6a] pl-6 text-[25px] text-[#000000]"
              placeholder="Enlighten your careers here...."
            />
            <button className="rounded-[20px] flex justify-center text-[#6a6a6a] text-[50px] px-2">
              <BiSearch />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
