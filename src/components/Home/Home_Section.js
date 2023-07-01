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
import bgCover from "../../images/bg_cover_2.jpg";

export default function Home_Section() {
  return (
    <>
      {/* <Header /> */}
      <div className="overflow-x-hidden w-[100vw] grid">
        <div className="flex flex-col relative min-h-screen">
          <div className="absolute top-0 left-0 w-full h-full z-[-1]">
            <img
              src={bgCover.src}
              alt="Background"
              className="object-cover w-full h-full filter blur-sm"
            />
          </div>

          <div className="flex flex-col items-center justify-center bg-opacity-40 backdrop-blur-lg text-white bg-black min-h-screen">
            <div className="text-2xl leading-[50px] font-montserrat text-[35px] font-extrabold text-white  w-1/2 flex justify-start h-[150px]">
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
                }}
              />
            </div>

            <div className="grid justify-center gap-1">
              <JobCategories />
            </div>
          </div>
        </div>
      </div>

      <AnalyzeJobMarket />

      <JobTrendingCities />
      <Footer />
    </>
  );
}
