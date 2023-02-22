import Header from "../Common/Header";
import { BiSearch } from "react-icons/bi";
import Logo from "../../images/logo_white.png";
import Image from "next/image";
import Footer from "../Common/Footer";

import AnalyzeJobMarket from "./AnalyzeJobMarket";
import JobTrendingCities from "./JobTrendingCities";
import JobCategories from "./JobCategories";

export default function Home_Section() {
  return (
    <>
      {/* <Header /> */}
      <div className="overflow-x-hidden w-[100vw] grid">
        <div className="bg-[url('../images/bg_cover_2.jpg')] bg-[length:100%_100%] min-h-[100vh] max-h-[100%] overflow-x-hidden bg-no-repeat flex items-center justify-center">
          <div className="grid justify-center gap-1 bg-opacity-80 backdrop-blur-[6px]">
            <div className="flex flex-col gap-5 items-center justify-center w-[100vw]  h-[70vh] pt-20">
              <div className="bg-[#000000] bg-opacity-10 rounded-[20px] p-10 shadow-xl">
                <div className="text-[50px] font-[400] font-sfpro text-[#F15A24]">
                  Search your future right here!
                </div>
                <form className="bg-[#1e1e1e] bg-opacity-[0.85] flex items-center rounded-[20px] w-[40vw] h-[5rem]">
                  <input
                    className="bg-[#1e1e1e] bg-opacity-0 rounded-[20px] outline-none w-[35vw] h-[5rem] placeholder:text-[25px] placeholder:text-[#b6b6b6] pl-6 text-[25px] text-[#b7b7b7]"
                    placeholder="Enlighten your careers here...."
                  />
                  <button className="rounded-[20px] flex justify-center text-[#b6b6b6] text-[50px] px-2">
                    <BiSearch />
                  </button>
                </form>
              </div>
            </div>

            <JobCategories />
          </div>
        </div>
      </div>

      <AnalyzeJobMarket />

      <JobTrendingCities />
      <Footer />
    </>
  );
}
