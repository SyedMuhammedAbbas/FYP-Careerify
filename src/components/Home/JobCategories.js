import { ImLocation } from "react-icons/im";
import { BsBuilding } from "react-icons/bs";
import { MdScreenSearchDesktop } from "react-icons/md";
import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { BASEURL } from "../../../config";

export default function JobCategories() {
  const [companyName, setcompanyName] = useState([]);

  const fetchJobTitleData = useCallback(async () => {
    try {
      const response = await axios.get(`${BASEURL}/jobs/uniqueCompanyNames`);
      const apiData = response.data;

      setcompanyName(apiData);
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  console.log(companyName);
  useEffect(() => {
    fetchJobTitleData();
  }, [fetchJobTitleData]);

  return (
    <>
      <div className="w-[100vw] flex justify-center p-10">
        <div className="bg-[#3e3e3e] bg-opacity-[0.85] backdrop-blur-[20px] flex justify-center rounded-[20px] w-[70vw] h-[400px] p-10 px-10">
          <div className="">
            <div className="flex h-[50px] overflow-x-auto mx-20 justify-center gap-20 border-b-[2px] border-[#a6a6a6]">
              <div className="flex gap-2 justify-center w-[200px]  cursor-pointer  font-bold text-[18px] text-[#F15A24] border-b-[4px] border-[#F15A24]">
                <div className="mt-1">
                  <BsBuilding />
                </div>
                <div>Jobs by Company</div>
              </div>

              <div className="flex gap-2 justify-center w-[200px]  cursor-pointer text-[#c37b61] hover:font-bold text-[18px] hover:text-[#F15A24] hover:border-b-[4px] hover:border-[#F15A24]">
                <div className="mt-1">
                  <ImLocation />
                </div>
                <div>Jobs by Location</div>
              </div>

              <div className="flex gap-2 justify-center w-[200px]  cursor-pointer text-[#c37b61] hover:font-bold text-[18px] hover:text-[#F15A24] hover:border-b-[4px] hover:border-[#F15A24]">
                <div className="mt-1">
                  <MdScreenSearchDesktop />
                </div>
                <div>Popular Jobs</div>
              </div>
            </div>

            <div className="pt-10 h-[300px] overflow-y-auto flex justify-center">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
