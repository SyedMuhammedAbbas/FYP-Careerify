import { ImLocation } from "react-icons/im";
import { BsBuilding } from "react-icons/bs";
import { MdScreenSearchDesktop } from "react-icons/md";
import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { BASEURL } from "../../../config";

export default function JobCategories() {
  const [companyName, setcompanyName] = useState([]);
  const [cityNames, setCityNames] = useState([]);
  const [jobTypes, setJobTypes] = useState([]);

  const fetchCompanyData = useCallback(async () => {
    try {
      const response = await axios.get(`${BASEURL}/jobs/uniqueCompanyNames`);
      const apiData = response.data;

      setcompanyName(apiData);
    } catch (error) {
      console.log(error.message);
    }
  }, []);

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

  console.log(companyName);
  console.log(cityNames);
  useEffect(() => {
    fetchCompanyData();
    fetchCitiesData();
    fetchJobTypeData();
  }, [fetchCompanyData, fetchCitiesData, fetchJobTypeData]);

  const [companyFlag, setCompanyFlag] = useState(true);
  const [citiesFlag, setCitiesFlag] = useState(false);
  const [jobTypeFlag, setJobTypeFlag] = useState(false);

  const handleCompanyFlag = () => {
    if (companyFlag === false) {
      setCompanyFlag(true);
    }
    setCitiesFlag(false);
    setJobTypeFlag(false);
  };

  const handleCitiesFlag = () => {
    if (citiesFlag === false) {
      setCitiesFlag(true);
    }
    setCompanyFlag(false);
    setJobTypeFlag(false);
  };

  const handlejobTypeFlag = () => {
    if (jobTypeFlag === false) {
      setJobTypeFlag(true);
    }
    setCitiesFlag(false);
    setCompanyFlag(false);
  };

  return (
    <>
      <div className="flex justify-center p-10 mx-[20%]">
        <div className="bg-[#3e3e3e] bg-opacity-[0.85] backdrop-blur-[20px] flex justify-center rounded-[20px] min-w-[70vw] max-w-[100%] h-[400px] p-10 px-10">
          <div className="">
            <div className="flex h-[50px] overflow-x-auto mx-20 justify-center gap-20 border-b-[2px] border-[#a6a6a6]">
              <div
                onClick={() => handleCompanyFlag()}
                className={`flex gap-2 justify-center w-[200px]  cursor-pointer  font-bold text-[18px] text-[#c37b61] hover:font-bold hover:text-[#F15A24] hover:border-b-[4px] hover:border-[#F15A24] ${
                  companyFlag
                    ? "text-[#F15A24] border-b-[4px] border-[#F15A24]"
                    : ""
                }`}
              >
                <div className="mt-1">
                  <BsBuilding />
                </div>
                <div>Jobs by Company</div>
              </div>

              <div
                onClick={() => handleCitiesFlag()}
                className={`flex gap-2 justify-center w-[200px]  cursor-pointer text-[#c37b61] hover:font-bold text-[18px] hover:text-[#F15A24] hover:border-b-[4px] hover:border-[#F15A24] ${
                  citiesFlag
                    ? "text-[#F15A24] border-b-[4px] border-[#F15A24]"
                    : ""
                }`}
              >
                <div className="mt-1">
                  <ImLocation />
                </div>
                <div>Jobs by Cities</div>
              </div>

              <div
                onClick={() => handlejobTypeFlag()}
                className={`flex gap-2 justify-center w-[200px]  cursor-pointer text-[#c37b61] hover:font-bold text-[18px] hover:text-[#F15A24] hover:border-b-[4px] hover:border-[#F15A24] ${
                  jobTypeFlag
                    ? "text-[#F15A24] border-b-[4px] border-[#F15A24]"
                    : ""
                }`}
              >
                <div className="mt-1">
                  <MdScreenSearchDesktop />
                </div>
                <div>Jobs by jobTypes</div>
              </div>
            </div>

            <div className="pt-10 h-[300px] overflow-y-auto flex justify-center">
              {companyFlag ? (
                <ul className="flex flex-wrap gap-6 justify-center">
                  {companyName.map((title, index) => (
                    <li
                      key={index}
                      className="cursor-pointer text-[#ffffff] hover:underline text-center"
                    >
                      {title.Company_name}
                    </li>
                  ))}
                </ul>
              ) : citiesFlag ? (
                <ul className="flex flex-wrap gap-6 justify-center">
                  {cityNames.map((title, index) => (
                    <li
                      key={index}
                      className="cursor-pointer text-[#ffffff] hover:underline text-center"
                    >
                      {title.City}
                    </li>
                  ))}
                </ul>
              ) : jobTypeFlag ? (
                <ul className="flex flex-wrap gap-6 justify-center">
                  {jobTypes.map((title, index) => (
                    <li
                      key={index}
                      className="cursor-pointer text-[#ffffff] hover:underline text-center"
                    >
                      {title.Job_type}
                    </li>
                  ))}
                </ul>
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
