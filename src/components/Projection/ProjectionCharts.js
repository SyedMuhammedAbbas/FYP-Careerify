import { IoIosArrowForward } from "react-icons/io";
import ProbOfTitleByCompany from "../Common/Graphs/PredictionGraphs/ProbOfTitleByCompany";

export default function ProjectionCharts() {
  const jobTitles = [
    ".Net Developer",
    "Content_writer",
    "Data Scientist",
    "Graphic Designer",
    "React Developer",
    "Wordpress Developer",
  ];

  return (
    <>
      <div className="grid overflow-y-auto h-[90vh]">
        <div className="flex relative p-2">
          <div className="text-[25px] font-semibold text-[#000000] flex gap-2">
            <div className="text-[#F15A24]">Careerify</div>
            <div className="flex items-center">
              <IoIosArrowForward />
            </div>{" "}
            <div>Projection</div>
          </div>
        </div>

        <div className=" flex flex-wrap space-y-4">
          {jobTitles.map((item, index) => {
            return (
              <div key={index} className=" w-2/4 xl3:w-[100%]  px-4">
                <ProbOfTitleByCompany title={item} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
