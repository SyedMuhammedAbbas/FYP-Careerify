import React, { useEffect, useRef } from "react";
import CardBarChart from "../Cards/CardBarChart";
import CardLineChart from "../Cards/CardLineChart";
import CardPageVisits from "../Cards/CardPageVisits";
import CardPieChart from "../Cards/CardPieChart";
import CardSocialTraffic from "../Cards/CardSocialTraffic";
import { BiSearch } from "react-icons/bi";

export default function ProjectionCharts() {
  return (
    <>
      <div className="grid">
        <div className="flex justify-end p-10 overflow-y-hidden">
          <form className="bg-[#c7c7c7] flex items-center rounded-[20px] w-[400px] h-[60px]">
            <input
              className="bg-[#c7c7c7] rounded-[20px] outline-none w-[350px] h-[40px] placeholder:text-[20px] placeholder:text-[#6a6a6a] pl-6 text-[25px] text-[#000000]"
              placeholder="Search..."
            />
            <button className="rounded-[20px] flex justify-center text-[#6a6a6a] text-[30px] px-2">
              <BiSearch />
            </button>
          </form>
        </div>
        <div className=" grid gap-5 overflow-y-auto">
          <div className=" flex flex-wrap">
            <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
              <CardLineChart />
            </div>
            <div className="w-full xl:w-4/12 px-4">
              <CardBarChart />
            </div>
            <div className="w-full xl:w-4/12 px-4">
              <CardPieChart />
            </div>
            <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
              <CardPageVisits />
            </div>
          </div>
          <div className="flex flex-wrap mt-4">
            <div className="w-full xl:w-4/12 px-4">
              <CardSocialTraffic />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
