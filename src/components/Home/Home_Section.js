// import Header from "../Common/Header";
// import { BiSearch } from "react-icons/bi";
// import Logo from "../../images/logo_white.png";
// import Image from "next/image";
import Footer from "../Common/Footer";
import Typewriter from "typewriter-effect";
import "@fontsource/roboto";
import AnalyzeJobMarket from "./AnalyzeJobMarket";
import JobTrendingCities from "./JobTrendingCities";
import JobCategories from "./JobCategories";
import bgCover from "../../images/bannerrrr.png";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import Teams from "./Team";
import { useRouter } from "next/router";
import bgGrad from "../../images/bg-grad.png";
import bgleft from "../../images/left-banner1.png";
import Image from "next/image";

export default function Home_Section() {
  const router = useRouter();

  const [searchResult, setSearchResult] = useState();

  // const router = useRouter();

  const handleSearch = () => {
    router.push(`/dashboard?search=${searchResult}`);
  };

  return (
    <div className="">
      <div className="flex flex-col justify-center">
        {/* <Header /> */}
        <div className="flex justify-center">
          <div className="relative h-[70vh] w-[100vw] mt-[10%] flex justify-center items-center">
            <div className="flex flex-row w-[100vw] h-[80vh] gap-20 justify-center xl2:justify-start xl2:pl-10 mobile:pl-3 relative ">
              <div className="">
                <Image
                  src={bgleft}
                  alt="left Background"
                  className="object-contain absolute z-10 mobile:top-[20%] left-0 w-[800px]"
                />
              </div>
              <div className="flex flex-col w-1/2 items-center justify-center gap-10  text-white relative">
                <div className="bg-transparent z-20 flex items-center shadow-xl mt-[5%] rounded-[40px] border-[2px] border-[#F15A24] w-[400px] h-[50px] mobile:w-[300px] mobile:h-[40px]">
                  <input
                    className="bg-transparent outline-none w-[348px] h-[50px] mobile:w-[253px] mobile:h-[40px] placeholder:text-[20px] placeholder:text-[#e4e4e4] font-montserrat px-5 text-[25px] mobile:text-[20px] text-[#ffffff]"
                    placeholder="Search..."
                    value={searchResult}
                    onChange={(e) => setSearchResult(e.target.value)}
                  />

                  <button
                    onClick={() => handleSearch()}
                    className="rounded-r-[40px] rounded-l-[5px] flex justify-center shadow-xl bg-[#F15A24] items-center h-[40px] w-[45px] mobile:w-[40px] mobile:h-[30px]  transition-all ease-in-out text-[#000000] text-[25px] mobile:text-[20px] font-semibold p-1"
                  >
                    <BiSearch />
                  </button>
                </div>

                <div className="text-2xl z-20 leading-[50px] font-montserrat text-[35px] mobile:text-[25px] font-extrabold text-white  w-[400px] mobile:w-[300px] mobile:h-[300px] flex justify-start h-[300px] ">
                  <Typewriter
                    options={{
                      strings: [
                        "Welcome to Careerify, your ultimate guide to Pakistan's IT job landscape.",
                        "Discover real-time insights and trends in the dynamic tech industry.",
                        "Witness the surging demand for IT professionals and explore transformative opportunities.",
                        "Let Careerify empower your career choices with data-driven wisdom.",
                      ],
                      autoStart: true,
                      loop: true,
                      delay: 60, // Reduce the delay before typing each string
                      deleteSpeed: 20, // Increase the delete speed for faster removal
                    }}
                  />
                </div>
              </div>

              <div className=" flex relative w-1/2 justify-center items-center xl2:hidden">
                <div className="">
                  <div className="elementor-widget-container">
                    <img
                      src={bgCover.src}
                      alt="Background"
                      className="object-contain w-[1000px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <AnalyzeJobMarket />
        </div>

        <div className="">
          <JobCategories />
        </div>

        <JobTrendingCities />
        <Teams />
        <Footer />
      </div>
    </div>
  );
}
