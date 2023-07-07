import JobPostingByCompanyWithinCityChart from "./Graphs/CityBasedGraphs/JobPostingByCompanyWithinCityChart";
import JobPostingsComparisonChart from "./Graphs/CityBasedGraphs/JobPostingsComparisonChart";
import JobsOverTimeForACityChart from "./Graphs/CityBasedGraphs/JobsOverTimeForACityChart";
import SalaryRangeScatterPlot from "./Graphs/CityBasedGraphs/SalaryRangeScatterPlot";
import { MdOutlineCancel } from "react-icons/md";

// JobTitle
import DurationOfJobPostingsByTitle from "../Dashboard/Charts/ChartsByJobTitles/DurationOfJobPostingsByTitle";
import JobAverageSalaryByCityAndTitle from "../Dashboard/Charts/ChartsByJobTitles/JobAverageSalaryByCityAndTitle";
import JobAverageSalaryByJobTypeAndTitle from "../Dashboard/Charts/ChartsByJobTitles/JobAverageSalaryByJobTypeAndTitle";
import JobByAverageSalary from "../Dashboard/Charts/ChartsByJobTitles/JobByAverageSalary";
import JobByAverageSalaryByYearAndCompany from "../Dashboard/Charts/ChartsByJobTitles/JobByAverageSalaryByYearAndCompany";
import JobBySalaryRangeDateAndTitle from "../Dashboard/Charts/ChartsByJobTitles/JobBySalaryRangeDateAndTitle";
import JobCountByCity from "../Dashboard/Charts/ChartsByJobTitles/JobCountByCity";
import JobOpeningsByCityAndTitle from "../Dashboard/Charts/ChartsByJobTitles/JobOpeningsByCityAndTitle";
import JobOpeningsByCompanyAndTitle from "../Dashboard/Charts/ChartsByJobTitles/JobOpeningsByCompanyAndTitle";
import JobOpeningsByDateAndTitle from "../Dashboard/Charts/ChartsByJobTitles/JobOpeningsByDateAndTitle";
import JobOpeningsByJobTypeAndTitle from "../Dashboard/Charts/ChartsByJobTitles/JobOpeningsByJobTypeAndTitle";
import JobOpeningsByWebsiteAndTitle from "../Dashboard/Charts/ChartsByJobTitles/JobOpeningsByWebsiteAndTitle";

export default function PopUp({ city, jobTitle, jobType, setOpenPopUp }) {
  function handleClosePopUp() {
    setOpenPopUp(false);
  }
  console.log(city, "City");
  return (
    <>
      <div className="z-[99999] bg-black bg-opacity-60 fixed top-0 left-0 w-full h-full flex items-center justify-center">
        <div className=" relative bg-white shadow-lg rounded-lg p-4 overflow-y-scroll h-[90vh] w-[80vw]">
          <div
            onClick={() => handleClosePopUp()}
            className=" z-[999] flex absolute right-10 top-5 text-[#000000] text-[25px] cursor-pointer hover:text-[#F15A24]"
          >
            <MdOutlineCancel />
          </div>
          <div className=" grid gap-5 py-10 mx-auto justify-center overflow-y-auto overflow-x-hidden">
            {city && !jobTitle && !jobType ? (
              <div className=" flex flex-wrap space-y-4">
                <div className=" w-2/4  px-4">
                  <JobPostingByCompanyWithinCityChart city={city} />
                </div>
                <div className=" w-2/4 px-4">
                  <JobPostingsComparisonChart city={city} />
                </div>
                <div className=" w-2/4 px-4">
                  <JobsOverTimeForACityChart city={city} />
                </div>
                <div className=" w-2/4 px-4">
                  <SalaryRangeScatterPlot city={city} />
                </div>
              </div>
            ) : !city && jobTitle && !jobType ? (
              <div className=" flex flex-wrap space-y-4">
                <div className=" w-2/4  px-4">
                  <DurationOfJobPostingsByTitle jobTitle={jobTitle} />
                </div>
                <div className=" w-2/4 px-4">
                  <JobAverageSalaryByCityAndTitle jobTitle={jobTitle} />
                </div>
                <div className=" w-2/4 px-4">
                  <JobAverageSalaryByJobTypeAndTitle jobTitle={jobTitle} />
                </div>
                <div className=" w-2/4 px-4">
                  <JobByAverageSalary jobTitle={jobTitle} />
                </div>
                <div className=" w-2/4 px-4">
                  <JobByAverageSalaryByYearAndCompany jobTitle={jobTitle} />
                </div>
                <div className=" w-2/4 px-4">
                  <JobOpeningsByJobTypeAndTitle jobTitle={jobTitle} />
                </div>
                <div className=" w-2/4 px-4">
                  <JobBySalaryRangeDateAndTitle jobTitle={jobTitle} />
                </div>
                <div className=" w-2/4 px-4">
                  <JobCountByCity jobTitle={jobTitle} />
                </div>
                <div className=" w-2/4 px-4">
                  <JobOpeningsByCityAndTitle jobTitle={jobTitle} />
                </div>
                <div className=" w-2/4 px-4">
                  <JobOpeningsByCompanyAndTitle jobTitle={jobTitle} />
                </div>
                <div className=" w-2/4 px-4">
                  <JobOpeningsByDateAndTitle jobTitle={jobTitle} />
                </div>
                <div className=" w-2/4 px-4">
                  <JobOpeningsByWebsiteAndTitle jobTitle={jobTitle} />
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
}
