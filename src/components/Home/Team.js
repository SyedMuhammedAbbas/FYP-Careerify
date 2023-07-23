import abbas from "@/images/team/abbass-06.png";
import rafay from "@/images/team/Rafayy-04.png";
import osama from "@/images/team/osamaa-05.png";
import Image from "next/image";

import { ImFacebook } from "react-icons/im";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";

export default function Teams() {
  const team = [
    { name: "Syed Mohammad Abbas", picture: abbas, role: "Team Member" },
    { name: "Abdul Rafay", picture: rafay, role: "Team Lead" },
    { name: "Syed Osama Hussain", picture: osama, role: "Team Member" },
  ];

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="flex flex-col bg-[#202736] shadow-lg rounded-[20px] mb-10 w-[70vw] mobile:w-[90vw] justify-center items-center p-8 gap-10 relative">
          <div className="flex flex-col justify-center">
            <div className="text-[#F15A24] font-sfpro font-bold text-[35px] flex justify-center">
              Meet The Team
            </div>
            <div className="text-[#777777] font-sfpro text-[20px] flex justify-center">
              A dynamic and passionate group working together to bring
              innovative solutions to life
            </div>
          </div>

          <div className="flex justify-center items-center flex-wrap gap-14">
            {team.map((member, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col relative justify-center gap-5"
                >
                  <div className="">
                    <Image
                      src={member.picture}
                      className="w-[230px] h-[250px]"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="text-[#F15A24] font-sfpro font-semibold text-[25px] flex justify-center">
                      {member.name}
                    </div>

                    <div className="text-[#777777] font-sfpro font-normal text-[20px] flex justify-center">
                      {member.role}
                    </div>

                    <div className="flex gap-3 justify-center items-center pt-4">
                      <div className="bg-[#ffffff] rounded-[50%] bg-opacity-10 shadow-xl p-2 text-[20px] cursor-pointer text-[#ffffff]">
                        <ImFacebook />
                      </div>
                      <div className="bg-[#ffffff] rounded-[50%] bg-opacity-10 shadow-xl p-2 text-[20px] cursor-pointer text-[#ffffff]">
                        <IoLogoInstagram />
                      </div>
                      <div className="bg-[#ffffff] rounded-[50%] bg-opacity-10 shadow-xl p-2 text-[20px] cursor-pointer text-[#ffffff]">
                        <FaLinkedinIn />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
