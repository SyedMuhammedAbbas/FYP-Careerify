import React, { useCallback, useEffect, useRef, useState } from "react";
// import CardBarChart from "../Cards/CardBarChart";
// import CardLineChart from "../Cards/CardLineChart";
// import CardPageVisits from "../Cards/CardPageVisits";
// import CardPieChart from "../Cards/CardPieChart";
// import CardSocialTraffic from "../Cards/CardSocialTraffic";
import { BiSearch } from "react-icons/bi";
// import { SiBmcsoftware } from "react-icons/si";
import { BsBriefcaseFill } from "react-icons/bs";
import { BiBuildings } from "react-icons/bi";
import { useRouter } from "next/router";
// import CardLineChart2 from "../Cards/CardLineChart2";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward } from "react-icons/io";
// import JobByTitleAndSiteGraph from "./Charts/LineCharts/JobByTitleAndSiteGraph";
import JobDataByCities from "./Charts/BarCharts/JobDataByCities";
import JobPostingsTrend from "./Charts/LineCharts/JobPostingsTrend";
import JobCountsByTitleAndWebsite from "./Charts/LineCharts/JobCountsByTitleAndWebsite";

import JobDistributionByType from "./Charts/PieCharts/JobDistributionByType";
import DurationOfJobPostingsByTitle from "./Charts/ChartsByJobTitles/DurationOfJobPostingsByTitle";
import JobAverageSalaryByCityAndTitle from "./Charts/ChartsByJobTitles/JobAverageSalaryByCityAndTitle";
import JobAverageSalaryByJobTypeAndTitle from "./Charts/ChartsByJobTitles/JobAverageSalaryByJobTypeAndTitle";
import JobByAverageSalary from "./Charts/ChartsByJobTitles/JobByAverageSalary";
import JobByAverageSalaryByYearAndCompany from "./Charts/ChartsByJobTitles/JobByAverageSalaryByYearAndCompany";
import JobBySalaryRangeDateAndTitle from "./Charts/ChartsByJobTitles/JobBySalaryRangeDateAndTitle";
import JobCountByCity from "./Charts/ChartsByJobTitles/JobCountByCity";
import JobOpeningsByCityAndTitle from "./Charts/ChartsByJobTitles/JobOpeningsByCityAndTitle";
import JobOpeningsByCompanyAndTitle from "./Charts/ChartsByJobTitles/JobOpeningsByCompanyAndTitle";
import JobOpeningsByDateAndTitle from "./Charts/ChartsByJobTitles/JobOpeningsByDateAndTitle";
import JobOpeningsByJobTypeAndTitle from "./Charts/ChartsByJobTitles/JobOpeningsByJobTypeAndTitle";
import JobOpeningsByWebsiteAndTitle from "./Charts/ChartsByJobTitles/JobOpeningsByWebsiteAndTitle";
import JobDataByAverageSalaries from "./Charts/BarCharts/JobDataByAverageSalaries";

import Loader from "../Loader/Loader";
import axios from "axios";
import { BASEURL } from "config";
import Card from "../Cards/Card";

export default function DashboardCharts() {
  const [searchResult, setSearchResult] = useState();
  const [searchTitle, setSearchTitle] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSearch = useCallback(async () => {
    setLoading(true); // Start loading

    setSearchTitle(searchResult);
    router.push(`/dashboard?search=${searchResult}`);

    // Simulate an asynchronous operation (e.g., API call) with a delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setLoading(false); // Stop loading
  }, [searchResult, router]);

  useEffect(() => {
    // if (router.query.search) {
    setSearchResult(router.query.search || "");
    setSearchTitle(router.query.search || "");
    // }
  }, [router.query.search]);
  // const searchQuery = router.query.search || "";

  const [jobCount, setJobCount] = useState();
  const [searchedJobCount, setSearchedJobCount] = useState();
  const [companyCount, setCompanyCount] = useState();
  const [searchedCompanyCount, setSearchedCompanyCount] = useState();

  const fetchJobCountData = async () => {
    try {
      const response = await axios.get(`${BASEURL}/jobs/totalJobCount`);
      const apiData = response.data;

      setJobCount(apiData[0].total_jobs);
    } catch (error) {
      console.log(error.message);
    }
  };

  const fetchSearchedJobCountData = async () => {
    try {
      // console.log(searchTitle, "searchTitle");
      const response = await axios.get(
        `${BASEURL}/searchedjobs/totalSearchedJobCount?jobTitle=${searchTitle}`
      );
      const apiData = response.data;

      setSearchedJobCount(apiData[0].total_jobs);
      // console.log(response, "helloworld");
    } catch (error) {
      console.log(error.message);
    }
  };

  const fetchCompanyCountData = async () => {
    try {
      const response = await axios.get(`${BASEURL}/jobs/totalCompanies`);
      const apiData = response.data;
      // console.log(apiData, "apiData");
      setCompanyCount(apiData[0].total_companies);
    } catch (error) {
      console.log(error.message);
    }
  };

  const fetchSearchedCompanyCountData = async () => {
    try {
      const response = await axios.get(
        `${BASEURL}/searchedjobs/totalSearchedCompanies?jobTitle=${searchTitle}`
      );
      const apiData = response.data;
      setSearchedCompanyCount(apiData[0].total_companies);
      console.log(response, "searched apiData");
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Start loading

      try {
        await Promise.all([fetchJobCountData(), fetchCompanyCountData()]);
      } catch (error) {
        console.log(error.message);
      }

      setLoading(false); // Stop loading
    };

    fetchData();
  }, []);

  useEffect(() => {
    fetchSearchedJobCountData();
    fetchSearchedCompanyCountData();
  }, [searchTitle]);

  // console.log(jobCount, "jobCOunt");

  // const [isFlipped, setIsFlipped] = useState(false);

  // const handleFlip = () => {
  //   setIsFlipped(!isFlipped);
  // };

  const cards = [
    {
      icon: <BsBriefcaseFill />,
      name: "Jobs",
      data:
        searchTitle !== "" && searchTitle !== null
          ? searchedJobCount
          : jobCount,
      description: "Total job count of Pakistan",
    },
    {
      icon: <BiBuildings />,
      name: "Companies",
      data:
        searchTitle !== "" && searchTitle !== null
          ? searchedCompanyCount
          : companyCount,
      description: "Total count of local companies providing IT jobs",
    },
  ];

  return (
    <>
      <div className="grid overflow-y-auto h-[90vh]">
        <div className="flex relative p-2 h-14">
          <div className="text-[25px] font-semibold text-[#000000] flex gap-2">
            <div className="text-[#F15A24]">Careerify</div>
            <div className="flex items-center">
              <IoIosArrowForward />
            </div>{" "}
            <div>Dashboard</div>
          </div>
          <div className="justify-end absolute right-10">
            <div className="bg-[#e5e5e5] flex items-center rounded-[20px] w-[300px] h-[40px]">
              <input
                className="bg-[#e5e5e5] rounded-[20px] outline-none w-[250px] h-[30px] placeholder:text-[20px] placeholder:text-[#6a6a6a] pl-6 text-[25px] text-[#000000]"
                placeholder="Search..."
                value={searchResult}
                onChange={(e) => setSearchResult(e.target.value)}
              />
              <button
                onClick={() => handleSearch()}
                className="rounded-[20px] flex justify-center text-[#6a6a6a] text-[30px] px-2"
              >
                <BiSearch />
              </button>
            </div>
          </div>
        </div>

        {loading ? (
          <div>
            <Loader />
          </div>
        ) : (
          <div className=" grid gap-5 mx-auto justify-center overflow-y-auto overflow-x-hidden">
            <div className="w-[70vw] mx-auto h-auto flex gap-4 justify-center my-5">
              {/* <Slider {...settings}> */}
              {cards.map((item, index) => (
                <Card key={index} item={item} />
              ))}
              {/* </Slider> */}
            </div>
            {!searchTitle ? (
              <div className=" flex flex-wrap space-y-4">
                <div className=" w-2/4 xl3:w-[100%]  px-4">
                  <JobPostingsTrend />
                </div>
                <div className=" w-2/4 xl3:w-[100%] px-4">
                  <JobDistributionByType />
                </div>
                <div className=" w-2/4 xl3:w-[100%] px-4">
                  <JobDataByCities />
                </div>
                <div className=" w-2/4 xl3:w-[100%] px-4">
                  <JobCountsByTitleAndWebsite />
                </div>
                <div className=" w-2/4 xl3:w-[100%] px-4">
                  <JobDataByAverageSalaries />
                </div>
              </div>
            ) : (
              <div className=" flex flex-wrap space-y-4">
                <div className=" w-2/4 xl3:w-[100%]   px-4">
                  <DurationOfJobPostingsByTitle jobTitle={searchTitle} />
                </div>
                <div className=" w-2/4 xl3:w-[100%]  px-4">
                  <JobAverageSalaryByCityAndTitle jobTitle={searchTitle} />
                </div>
                <div className=" w-2/4 xl3:w-[100%]  px-4">
                  <JobAverageSalaryByJobTypeAndTitle jobTitle={searchTitle} />
                </div>
                <div className=" w-2/4 xl3:w-[100%]  px-4">
                  <JobByAverageSalary jobTitle={searchTitle} />
                </div>
                <div className=" w-2/4 xl3:w-[100%]  px-4">
                  <JobByAverageSalaryByYearAndCompany jobTitle={searchTitle} />
                </div>
                <div className=" w-2/4 xl3:w-[100%]  px-4">
                  <JobOpeningsByJobTypeAndTitle jobTitle={searchTitle} />
                </div>
                <div className=" w-2/4 xl3:w-[100%]  px-4">
                  <JobBySalaryRangeDateAndTitle jobTitle={searchTitle} />
                </div>
                <div className=" w-2/4 xl3:w-[100%]  px-4">
                  <JobCountByCity jobTitle={searchTitle} />
                </div>
                <div className=" w-2/4 xl3:w-[100%]  px-4">
                  <JobOpeningsByCityAndTitle jobTitle={searchTitle} />
                </div>
                <div className=" w-2/4 xl3:w-[100%]  px-4">
                  <JobOpeningsByCompanyAndTitle jobTitle={searchTitle} />
                </div>
                <div className=" w-2/4 xl3:w-[100%]  px-4">
                  <JobOpeningsByDateAndTitle jobTitle={searchTitle} />
                </div>
                <div className=" w-2/4 xl3:w-[100%]  px-4">
                  <JobOpeningsByWebsiteAndTitle jobTitle={searchTitle} />
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
