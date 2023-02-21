import React, { useEffect, useRef } from "react";
import CardBarChart from "../Cards/CardBarChart";
import CardLineChart from "../Cards/CardLineChart";
import CardPageVisits from "../Cards/CardPageVisits";
import CardPieChart from "../Cards/CardPieChart";
import CardSocialTraffic from "../Cards/CardSocialTraffic";
import { BiSearch } from "react-icons/bi";
import { SiBmcsoftware } from "react-icons/si";
import CardLineChart2 from "../Cards/CardLineChart2";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function DashboardCharts() {
  var settings = {
    dots: true,
    // dotsClass: "slick-dots",
    infinite: true,
    speed: 400,
    // autoplay: true,
    // autoplaySpeed: 2000,
    // slidesToShow: 4,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    // appendDots: (dots) => <ul>{dots}</ul>,
    // customPaging: (i) => <div className="ft-slick__dots--custom"></div>,
  };

  return (
    <>
      <div className="grid overflow-y-auto h-[80vh]">
        <div className="flex relative p-2">
          <div className="text-[45px] font-semibold text-[#000000]">
            Dashboard
          </div>
          <div className="justify-end absolute right-10">
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
        </div>

        <div className=" grid gap-5 mx-auto justify-center overflow-y-auto overflow-x-hidden">
          <div className="w-[70vw] mx-auto my-auto h-auto justify-center mb-10">
            <Slider {...settings}>
              {[...Array(5)].map((i) => {
                return (
                  <div className="w-[200px] bg-transparent">
                    <div className="w-[150px] rounded-[10px] relative h-[150px] bg-[#ffffff] shadow-md">
                      <div className="w-[180px] rounded-[10px] absolute left-[-15px]   h-[140px] bg-[#ffffff] shadow-md">
                        <div className="grid items-center p-5">
                          <div className="text-[30px] text-[#0B9588]">
                            <SiBmcsoftware />
                          </div>
                          <div className="text-[40px] font-semibold text-[#000000]">
                            4.17
                          </div>
                          <div className="text-[20px] font-[600] text-[#7e7e7e]">
                            Systems
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
          <div className=" flex flex-wrap">
            <div className=" w-3/4 mb-12 px-4">
              <CardLineChart />
            </div>
            <div className=" w-1/4 px-4">
              <CardBarChart />
            </div>
            <div className=" w-1/4 px-4">
              <CardPieChart />
            </div>
            <div className=" w-3/4 mb-12 px-4">
              <CardLineChart2 />
            </div>
          </div>
          {/* <div className="flex flex-wrap mt-4">
            <div className="w-full xl:w-4/12 px-4">
              <CardSocialTraffic />
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}
