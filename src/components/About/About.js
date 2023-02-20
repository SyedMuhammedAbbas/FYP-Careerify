import { GoGraph } from "react-icons/go";
import { SlGraph } from "react-icons/sl";
import { BsPeopleFill } from "react-icons/bs";

export default function About() {
  return (
    <>
      <div className="grid items-center justify-center min-h-[100vh] max-h-[100%] gap-20 p-20">
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
        <div className="text-[30px] font-semibold text-[#000000]">
          Careerify is a platform which initially targets the students audience
          who are looking for the job in demand, through our platform people,
          especially students will enhance their skill set on the basis of the
          job market and future growth field.
          <br />
          <br />
          Not only the current trends but also the predicts the future trends of
          the job market.
          <br />
          <br />
          Initially we have started from Pakistan, but sooner we'll provide this
          platform globally and help people in decision making.
        </div>
      </div>
    </>
  );
}
