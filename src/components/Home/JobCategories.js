import { ImLocation } from "react-icons/im";
import { BsBuilding } from "react-icons/bs";
import { MdScreenSearchDesktop } from "react-icons/md";
import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { BASEURL } from "../../../config";
import PopUp from "../Common/PopUp";
import PopUp1 from "../Common/PopUp1";

export default function JobCategories() {
  // const [companyName, setcompanyName] = useState([]);
  const [cityNames, setCityNames] = useState([]);
  const [jobTypes, setJobTypes] = useState([]);

  const jobTitles = [
    "Wordpress",
    "Data Scientist",
    "Data Analyst",
    "UI / UX designer",
    "React",
    "Pyhton",
    "Java",
    "Full Stack",
    "Mern Stack",
    "Data Enigneer",
    "Front-end",
    "Back-end",
    "SQA Enigneer",
    "Project Manager",
    "Power Bi",
    "ios",
    "android",
    "SEO",
  ];

  // const fetchCompanyData = useCallback(async () => {
  //   try {
  //     const response = await axios.get(`${BASEURL}/jobs/uniqueCompanyNames`);
  //     const apiData = response.data;

  //     setcompanyName(apiData);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // }, []);

  const fetchCitiesData = useCallback(async () => {
    try {
      const response = await axios.get(`${BASEURL}/jobs/DistinctCities`);
      const apiData = response.data;

      setCityNames(apiData);
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  const fetchJobTypeData = useCallback(async () => {
    try {
      const response = await axios.get(`${BASEURL}/jobs/DistinctJobTypes`);
      const apiData = response.data;

      setJobTypes(apiData);
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  // console.log(companyName);
  console.log(cityNames);
  useEffect(() => {
    // fetchCompanyData();
    fetchCitiesData();
    fetchJobTypeData();
  }, [fetchCitiesData, fetchJobTypeData]);

  const [activeTab, setActiveTab] = useState("title");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const [openPopUp, setOpenPopUp] = useState(false);
  const [city, setCity] = useState();
  const [jobType, setJobType] = useState();
  const [jobName, setJobName] = useState();

  const handleCityPopUp = (cityName) => {
    setOpenPopUp(openPopUp !== true);
    setCity(cityName);
  };

  const handleJobTitlePopUp = (job) => {
    setOpenPopUp(openPopUp !== true);
    setJobName(job);
  };

  const handlejobTypePopup = (job) => {
    setOpenPopUp(openPopUp !== true);
    setJobType(job);
  };

  const categories = [
    { title: "Jobs by Title", icon: <BsBuilding />, name: "title" },
    { title: "Jobs by Cities", icon: <ImLocation />, name: "cities" },
    {
      title: "Jobs by jobTypes",
      icon: <MdScreenSearchDesktop />,
      name: "jobTypes",
    },
  ];

  return (
    <>
      <div className="flex justify-center p-10 mx-[20%] ">
        <div className="bg-[#202736] flex justify-center rounded-[20px] shadow-lg w-[70vw] mobile2:w-[90vw] h-[400px] p-10 px-10">
          <div className="">
            <div className="flex justify-center">
              <div className="flex bg-[#1F1B24] rounded-[30px] h-[50px] w-[550px] tablet1:w-[300px] mobile1:w-[200px] mx-20 justify-center items-center gap-10 mobile1:gap-3">
                {categories.map((item) => {
                  return (
                    <div
                      onClick={() => handleTabClick(item.name)}
                      className={`flex gap-2 justify-center w-[150px] tablet1:w-[45px]  cursor-pointer  font-bold text-[15px] tablet1:text-[20px]   ${
                        activeTab === item.name
                          ? "text-[#ffffff] bg-[#F15A24] py-2 rounded-[30px] font-bold"
                          : "text-[#ffffff]"
                      }`}
                    >
                      <div className="mt-1">{item.icon}</div>
                      <div className="tablet1:hidden">{item.title}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className=" h-[300px] flex justify-center overflow-y-auto">
              {activeTab === "title" ? (
                <>
                  <ul className="flex flex-wrap px-10 py-5 gap-5 justify-center mobile2:w-[80vw]">
                    {jobTitles.map((title, index) => (
                      <li
                        key={index}
                        onClick={() => handleJobTitlePopUp(title)}
                        className="cursor-pointer text-[#ffffff] hover:underline text-center"
                      >
                        {title}
                      </li>
                    ))}
                  </ul>

                  <PopUp1
                    jobTitle={jobName}
                    jobType={null}
                    city={null}
                    openPopUp={openPopUp}
                    setOpenPopUp={setOpenPopUp}
                  />
                </>
              ) : activeTab === "cities" ? (
                <>
                  {" "}
                  <ul className="flex flex-wrap px-10 py-5 gap-6 justify-center mobile2:w-[80vw]">
                    {cityNames.map((title, index) => (
                      <li
                        key={index}
                        onClick={() => handleCityPopUp(title.City)}
                        className="cursor-pointer text-[#ffffff] hover:underline text-center"
                      >
                        {title.City}
                      </li>
                    ))}
                  </ul>
                  <PopUp1
                    city={city}
                    jobTitle={null}
                    jobType={null}
                    openPopUp={openPopUp}
                    setOpenPopUp={setOpenPopUp}
                  />
                </>
              ) : activeTab === "jobTypes" ? (
                <>
                  <ul className="flex flex-wrap px-10 py-5 gap-6 justify-center mobile2:w-[80vw]">
                    {jobTypes.map((title, index) => (
                      <li
                        key={index}
                        onClick={() => handlejobTypePopup(title.Job_type)}
                        className="cursor-pointer text-[#ffffff] hover:underline text-center"
                      >
                        {title.Job_type}
                      </li>
                    ))}
                  </ul>
                  <PopUp1
                    city={null}
                    jobTitle={null}
                    jobType={jobType}
                    openPopUp={openPopUp}
                    setOpenPopUp={setOpenPopUp}
                  />
                </>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
