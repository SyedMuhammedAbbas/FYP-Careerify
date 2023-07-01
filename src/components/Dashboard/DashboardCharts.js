import React, { useEffect, useRef } from "react";
import CardBarChart from "../Cards/CardBarChart";
import CardLineChart from "../Cards/CardLineChart";
// import CardPageVisits from "../Cards/CardPageVisits";
import CardPieChart from "../Cards/CardPieChart";
// import CardSocialTraffic from "../Cards/CardSocialTraffic";
import { BiSearch } from "react-icons/bi";
import { SiBmcsoftware } from "react-icons/si";
// import CardLineChart2 from "../Cards/CardLineChart2";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward } from "react-icons/io";
import JobByTitleAndSiteGraph from "./Charts/LineCharts/JobByTitleAndSiteGraph";
import JobDataByCities from "./Charts/BarCharts/JobDataByCities";
import JobPostingsTrend from "./Charts/LineCharts/JobPostingsTrend";
import JobDistributionByType from "./Charts/PieCharts/JobDistributionByType";

export default function DashboardCharts() {
  return (
    <>
      <div className="grid overflow-y-auto h-[90vh]">
        <div className="flex relative p-2">
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
              />
              <button className="rounded-[20px] flex justify-center text-[#6a6a6a] text-[30px] px-2">
                <BiSearch />
              </button>
            </div>
          </div>
        </div>

        <div className=" grid gap-5 mx-auto justify-center overflow-y-auto overflow-x-hidden">
          <div className="w-[70vw] mx-auto h-auto flex gap-4 justify-center my-5">
            {/* <Slider {...settings}> */}
            {[...Array(4)].map((i) => {
              return (
                <div className="w-[200px] bg-transparent">
                  <div className="w-[150px] rounded-[10px] relative h-[149px] bg-[#474747] bg-opacity-30 z-10 shadow-md">
                    <div className="w-[180px] rounded-[10px] absolute left-[-15px]  z-20 h-[140px] bg-[#ffffff] shadow-md">
                      <div className="grid items-center p-3">
                        <div className="text-[30px] text-[#0B9588]">
                          <SiBmcsoftware />
                        </div>
                        <div className="text-[40px] font-semibold text-[#000000]">
                          4.17
                        </div>
                        <div className="text-[15px] font-[400] text-[#7e7e7e]">
                          Systems
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            {/* </Slider> */}
          </div>
          <div className=" flex flex-wrap">
            <div className=" w-2/4 mb-12 px-4">
              {/* <CardLineChart /> */}
              <JobPostingsTrend />
            </div>
            <div className=" w-2/4 px-4">
              {/* <CardPieChart /> */}
              <JobDistributionByType />
            </div>
            <div className=" w-2/4 px-4">
              {/* <CardBarChart /> */}
              <JobDataByCities />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
