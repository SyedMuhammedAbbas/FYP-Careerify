import Karachi_logo from "@/images/karachi_logo_orange.png";
// import sample1 from "@/images/sample1.jpg";
import Image from "next/image";
import Islamabad_Logo from "@/images/islamabad_logo.png";
import Lahore_Logo from "@/images/lahore_logo.png";
import PopUp1 from "../Common/PopUp1";
import { useState } from "react";

export default function JobTrendingCities() {
  const popularCities = [
    { image: Karachi_logo, title: "Karachi" },
    { image: Lahore_Logo, title: "Lahore" },
    { image: Islamabad_Logo, title: "Islamabad" },
  ];

  const [openPopUp, setOpenPopUp] = useState(false);
  const [city, setCity] = useState();

  const handleCity = (title) => {
    setOpenPopUp(openPopUp !== true);
    setCity(title);
  };

  return (
    <>
      <div className="flex justify-center py-20">
        <div className="grid">
          <div className="text-[30px] flex justify-center py-20 font-sfpro text-[#F15A24] font-bold">
            Job Trends in Popular Cities
          </div>
          <div className="flex gap-10 flex-wrap">
            {popularCities.map((city, index) => {
              return (
                <>
                  <div
                    key={index}
                    className="bg-[#efefef] cursor-pointer grid justify-center items-center w-[300px] h-[300px] shadow-xl rounded-[20px]"
                    onClick={() => handleCity(city.title)}
                  >
                    <div className="flex justify-center items-center">
                      <Image
                        src={city.image}
                        width={200}
                        height={200}
                        className="w-[100px]"
                      />
                    </div>
                    <div className="text-[30px] mt-[-100px] text-[#F15A24] font-sfpro font-bold">
                      {city.title}
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <PopUp1
            jobTitle={null}
            jobType={null}
            city={city}
            openPopUp={openPopUp}
            setOpenPopUp={setOpenPopUp}
          />
        </div>
      </div>
    </>
  );
}
