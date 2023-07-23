import { GoGraph } from "react-icons/go";
import { SlGraph } from "react-icons/sl";
import { BsPeopleFill } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import Teams from "../Home/Team";

export default function About() {
  return (
    <>
      <div className="grid  h-[90vh]">
        <div className="flex relative p-2">
          <div className="text-[25px] font-semibold text-[#000000] flex gap-2">
            <div className="text-[#F15A24]">Careerify</div>
            <div className="flex items-center">
              <IoIosArrowForward />
            </div>{" "}
            <div>About</div>
          </div>
          {/* <div className="justify-end absolute right-10">
            <form className="bg-[#e5e5e5] flex items-center rounded-[20px] w-[300px] h-[40px]">
              <input
                className="bg-[#e5e5e5] rounded-[20px] outline-none w-[250px] h-[30px] placeholder:text-[20px] placeholder:text-[#6a6a6a] pl-6 text-[25px] text-[#000000]"
                placeholder="Search..."
              />
              <button className="rounded-[20px] flex justify-center text-[#6a6a6a] text-[30px] px-2">
                <BiSearch />
              </button>
            </form>
          </div> */}
        </div>
        <div className="grid items-center overflow-y-auto justify-center h-[80vh] gap-20 p-20">
          <div className="flex gap-10 flex-wrap justify-center">
            <div className="text-[#000000] text-[70px]">
              <GoGraph />
            </div>
            <div className="text-[#B65336] text-[70px]">
              <SlGraph />
            </div>
            <div className="text-[#000000] text-[70px]">
              <BsPeopleFill />
            </div>
          </div>
          <div className="text-[25px] font-semibold text-[#000000]">
            Welcome to Careerify, your premier destination for exploring the
            ever-changing landscape of IT job opportunities in Pakistan. At
            Careerify, we are dedicated to providing you with comprehensive
            insights and trends derived from meticulous data scraping of various
            job posting sites. Our mission is to empower you with the knowledge
            and tools necessary to navigate the dynamic world of IT employment.
            Through our meticulously curated graphs and trends, we aim to
            showcase the pulse of the industry, highlighting emerging
            technologies, in-demand skills, and the evolving job market. With
            Careerify, you can stay ahead of the curve by gaining a deep
            understanding of the IT job trends in Pakistan. Our platform offers
            real-time updates, ensuring you have access to the latest
            information on job openings, salary ranges, and industry demands. We
            are committed to assisting you in making informed decisions about
            your career path. Whether you are a student, a job seeker, or a
            seasoned professional, Careerify equips you with data-driven
            insights to help you identify lucrative opportunities, align your
            skills with market demands, and excel in the competitive IT
            industry. Join us on this exciting journey as we transform raw data
            into meaningful and actionable information. Discover the power of
            Careerify and unlock the potential of your IT career in Pakistan.
            Let us be your guide in making informed choices and achieving
            professional success. Explore the trends, navigate the
            opportunities, and thrive with Careerify.
          </div>

          <Teams />
        </div>
      </div>
    </>
  );
}
