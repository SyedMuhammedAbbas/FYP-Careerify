import abbas from "@/images/team/abbas-06.png";
import rafay from "@/images/team/Rafay-04.png";
import osama from "@/images/team/osama-05.png";
import Image from "next/image";

export default function Teams() {
  const team = [
    { name: "Syed Mohammad Abbas", picture: abbas, role: "Team Member" },
    { name: "Abdul Rafay", picture: rafay, role: "Team Lead" },
    { name: "Syed Osama Hussain", picture: osama, role: "Team Member" },
  ];

  return (
    <>
      <div className="flex flex-col justify-center items-center bg-[#ffffff] p-10 py-20 gap-10 relative">
        <div>
          <div className="text-[#F15A24] font-sfpro font-bold text-[35px] flex justify-center">
            Meet The Team
          </div>
          <div className="text-[#777777] font-sfpro text-[20px] flex justify-center">
            A dynamic and passionate group working together to bring innovative
            solutions to life
          </div>
        </div>

        <div className="flex justify-center items-center flex-wrap gap-14">
          {team.map((member, index) => {
            return (
              <div key={index} className="flex flex-col justify-center gap-5">
                <div>
                  <Image src={member.picture} className="w-[330px] h-[350px]" />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="text-[#363636] font-sfpro font-semibold text-[25px] flex justify-center">
                    {member.name}
                  </div>
                  <div className="text-[#363636] font-sfpro font-normal text-[20px] flex justify-center">
                    {member.role}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
