import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  IconButton,
  Typography,
  MenuItem,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
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

export default function PopUp1({
  city,
  jobTitle,
  jobType,
  openPopUp,
  setOpenPopUp,
}) {
  //   const [open, setOpen] = React.useState(false);
  //   const handleOpen = () => setOpen((cur) => !cur);
  function handleClosePopUp() {
    setOpenPopUp(false);
  }

  return (
    <React.Fragment>
      {/* <Button onClick={handleOpen}>Connect Wallet</Button> */}
      <Dialog open={openPopUp} size="xl">
        <DialogHeader className="justify-between ">
          <IconButton
            color="blue-gray"
            size="sm"
            variant="text"
            onClick={() => handleClosePopUp()}
          >
            <XMarkIcon strokeWidth={2} className="h-5 w-5" />
          </IconButton>
        </DialogHeader>
        <DialogBody className="pr-2 h-full">
          <div className="grid gap-5 py-10 mx-auto overflow-auto h-[80vh]">
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
        </DialogBody>
      </Dialog>
    </React.Fragment>
  );
}
