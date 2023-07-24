import { IoIosArrowForward } from "react-icons/io";
import ProbOfTitleByCompany from "../Common/Graphs/PredictionGraphs/ProbOfTitleByCompany";
import ProbOfTitleByType from "../Common/Graphs/PredictionGraphs/ProbOfTitleByType";

export default function ProjectionCharts() {
  const jobTitles = [
    { company: ".Net Developer", type: ".Net Developer" },
    { company: "Content_writer", type: "Content Writer" },
    { company: "Data Scientist", type: "Data Scientist" },
    { company: "Graphic Designer", type: "Graphic Designer" },
    { company: "React Developer", type: "React Developer" },
    { company: "Wordpress Developer", type: "Wordpress Developer" },
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
              <>
                <div className="text-[30px] text-[#111827] font-montserrat">
                  Predicted data for: {item.type}
                </div>
                <div className="flex gap-5">
                  <div key={index} className=" w-2/4 xl3:w-[100%]  px-4">
                    <ProbOfTitleByCompany title={item.company} />
                  </div>
                  <div key={index} className=" w-2/4 xl3:w-[100%]  px-4">
                    <ProbOfTitleByType title={item.type} />
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
