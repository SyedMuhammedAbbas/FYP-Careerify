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
import bgCover from "../../images/home-banner-02.png";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import Teams from "./Team";

export default function Home_Section() {
  const [searchResult, setSearchResult] = useState();

  // const router = useRouter();

  const handleSearch = () => {
    router.push(`/dashboard?search=${searchResult}`);
  };

  return (
    <div className="flex flex-col">
      {/* <Header /> */}
      <div className="overflow-x-hidden relative overflow-y-hidden h-auto grid ">
        <div className="flex flex-col relative">
          <div className="absolute top-0 left-0 w-full h-full z-[-1]">
            <img
              src={bgCover.src}
              alt="Background"
              className="object-cover w-full h-full filter blur-sm"
            />
          </div>

          <div className="flex flex-col gap-10 items-center justify-center text-white min-h-screen">
            <div className="text-2xl leading-[50px] font-montserrat text-[35px] font-extrabold text-white  w-1/2 flex justify-start min-h-[150px] max-h-[100%]">
              <Typewriter
                options={{
                  strings: [
                    "Welcome to Careerify, your ultimate guide to the evolving IT job landscape in Pakistan.",
                    "Explore the dynamic pulse of the tech industry as we provide real-time insights and trends.",
                    "Witness the growth and transformation of opportunities as the demand for IT professionals surges across the country.",
                    "Join us on this enlightening journey of discovery and let Careerify empower your career choices with data-driven wisdom.",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 60, // Reduce the delay before typing each string
                  deleteSpeed: 20, // Increase the delete speed for faster removal
                }}
              />
            </div>

            <div className="bg-[#e5e5e5] flex items-center shadow-xl rounded-[5px] w-[700px] h-[60px]">
              <button
                onClick={() => handleSearch()}
                className="rounded-[10px] flex justify-center shadow-xl bg-[#F15A24] hover:scale-105 transition-all ease-in-out text-[#ffffff] text-[40px] p-5"
              >
                <BiSearch />
              </button>

              <input
                className="bg-transparent outline-none w-[700px] h-[60px] placeholder:text-[20px] placeholder:text-[#6a6a6a] px-5 text-[20px] text-[#000000]"
                placeholder="Search..."
                value={searchResult}
                onChange={(e) => setSearchResult(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="grid  mt-[-250px] justify-center gap-1">
          <JobCategories />
        </div>
      </div>
      <div className="">
        <AnalyzeJobMarket />
      </div>
      <JobTrendingCities />
      <Teams />
      <Footer />
    </div>
  );
}
