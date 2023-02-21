import { GoGraph } from "react-icons/go";
import { SlGraph } from "react-icons/sl";
import { BsPeopleFill } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";

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
            <div>Trends</div>
          </div>
          <div className="justify-end absolute right-10">
            <form className="bg-[#e5e5e5] flex items-center rounded-[20px] w-[300px] h-[40px]">
              <input
                className="bg-[#e5e5e5] rounded-[20px] outline-none w-[250px] h-[30px] placeholder:text-[20px] placeholder:text-[#6a6a6a] pl-6 text-[25px] text-[#000000]"
                placeholder="Search..."
              />
              <button className="rounded-[20px] flex justify-center text-[#6a6a6a] text-[30px] px-2">
                <BiSearch />
              </button>
            </form>
          </div>
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
            Careerify is a platform which initially targets the students
            audience who are looking for the job in demand, through our platform
            people, especially students will enhance their skill set on the
            basis of the job market and future growth field.
            <br />
            Not only the current trends but also the predicts the future trends
            of the job market.
            <br />
            Initially we have started from Pakistan, but sooner we'll provide
            this platform globally and help people in decision making.
          </div>
        </div>
      </div>
    </>
  );
}
