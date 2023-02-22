import { ImLocation } from "react-icons/im";
import { BsBuilding } from "react-icons/bs";
import { MdScreenSearchDesktop } from "react-icons/md";

export default function JobCategories() {
  const jobNames = [
    "Data Science",
    "Word Press Developer",
    "Backend Developer",
    "Frontend Developer",
    "Data Analyst",
    "Data Science",
    "Word Press Developer",
    "Backend Developer",
    "Frontend Developer",
    "Data Analyst",
    "Data Science",
    "Word Press Developer",
    "Backend Developer",
    "Frontend Developer",
    "Data Analyst",
    "Data Science",
    "Word Press Developer",
    "Backend Developer",
    "Frontend Developer",
    "Data Analyst",
    "Data Science",
    "Word Press Developer",
    "Backend Developer",
    "Frontend Developer",
    "Data Analyst",
    "Data Science",
    "Word Press Developer",
    "Backend Developer",
    "Frontend Developer",
    "Data Analyst",
  ];

  return (
    <>
      <div className="w-[100vw] flex justify-center p-10">
        <div className="bg-[#3e3e3e] flex justify-center rounded-[20px] w-[70vw] h-[400px] p-10 px-10">
          <div className="">
            <div className="flex h-[50px] mx-20 justify-center gap-20 border-b-[2px] border-[#a6a6a6]">
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

            <div className="pt-10 overflow-y-auto flex justify-center">
              <ul className="flex flex-wrap gap-6 justify-center">
                {jobNames.map((i) => (
                  <li className="cursor-pointer text-[#ffffff] hover:underline text-center">
                    {i}
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
