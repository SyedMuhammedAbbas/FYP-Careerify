import Karachi_logo from "@/images/karachi_logo_orange.png";
import sample1 from "@/images/sample1.jpg";
import Image from "next/image";
import Islamabad_Logo from "@/images/islamabad_logo.png";
import Lahore_Logo from "@/images/lahore_logo.png";

export default function JobTrendingCities() {
  return (
    <>
      <div className="flex justify-center py-20">
        <div className="grid">
          <div className="text-[30px] flex justify-center py-20 font-sfpro text-[#F15A24] font-bold">
            Job Trends in Popular Cities
          </div>
          <div className="flex gap-10">
            <div className="bg-[#efefef] grid justify-center items-center w-[300px] h-[300px] shadow-xl rounded-[20px]">
              <div className="flex justify-center items-center">
                <Image
                  src={Karachi_logo}
                  width={200}
                  height={200}
                  className="w-[100px]"
                />
              </div>
              <div className="text-[30px] mt-[-100px] text-[#F15A24] font-sfpro font-bold">
                Karachi
              </div>
            </div>

            <div className="bg-[#efefef] grid justify-center items-center w-[300px] h-[300px] shadow-xl rounded-[20px]">
              <div className="flex justify-center items-center">
                <Image
                  src={Lahore_Logo}
                  width={200}
                  height={200}
                  className="w-[100px]"
                />
              </div>
              <div className="text-[30px] mt-[-100px] text-[#F15A24] font-sfpro font-bold">
                Lahore
              </div>
            </div>

            <div className="bg-[#efefef] grid justify-center items-center w-[300px] h-[300px] shadow-xl rounded-[20px]">
              <div className="flex justify-center items-center">
                <Image
                  src={Islamabad_Logo}
                  width={200}
                  height={200}
                  className="w-[100px]"
                />
              </div>
              <div className="text-[30px] mt-[-100px] text-[#F15A24] font-sfpro font-bold">
                Islamabad
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
