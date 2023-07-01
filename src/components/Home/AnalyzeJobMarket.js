import Karachi_logo from "@/images/karachi_logo_orange.png";
import sample1 from "@/images/sample1.jpg";
import Image from "next/image";

export default function AnalyzeJobMarket() {
  const analyzeJob = [
    {
      id: 1,
      imageName: sample1,
      heading: "Unparalleled Insights",
      description:
        "Discover the power of Careerify as we provide you with unparalleled insights into the dynamic IT job market in Pakistan. Our carefully curated data, gathered from various job posting sites, allows you to gain a comprehensive understanding of the current trends and demands.",
    },
    {
      id: 2,
      imageName: sample1,
      heading: "Visualize Trends",
      description:
        "Experience the job market like never before through our intuitive graphs and visualizations. Careerify transforms complex data into easy-to-understand visuals, helping you identify emerging trends, popular technologies, and the most sought-after job roles.",
    },
    {
      id: 3,
      imageName: sample1,
      heading: "Informed Decision-making",
      description:
        "Careerify empowers you to make informed decisions about your career path. With our in-depth analysis, you can explore which areas of the IT industry are thriving, identify lucrative opportunities, and align your skills with the demands of the market.",
    },
    {
      id: 4,
      imageName: sample1,
      heading: "Stay Competitive",
      description:
        "Gain a competitive edge by staying informed about the latest developments in the IT job market. Careerify equips you with the knowledge to navigate the ever-changing landscape, allowing you to position yourself strategically and seize the best opportunities.",
    },
    {
      id: 5,
      imageName: sample1,
      heading: "Plan Your Future",
      description:
        "Let Careerify be your guide as you plan your future in the IT industry. Whether you're a student, a fresh graduate, or an experienced professional, our comprehensive data and insights help you chart a successful career path and make informed decisions at every stage.",
    },
  ];

  return (
    <>
      <div className="w-[100vw] flex justify-center">
        <div className="bg-[#ffffff] w-[600px] text-[#000000] grid gap-2 text-center justify-center p-10">
          <div className="text-[30px] font-sfpro text-[#F15A24] font-bold">
            Why Careerify is the right way to analyze job market?
          </div>
          <div className="text-[15px] font-sfpro text-[#909090] ">
            Embrace Careerify and unlock the potential of the IT job market in
            Pakistan. Explore, analyze, and thrive in the ever-evolving world of
            IT employment with confidence and clarity.
          </div>
        </div>
      </div>

      <div className="grid">
        {analyzeJob.map((item, index) => {
          return (
            <div
              key={index}
              className="flex gap-20 items-center justify-center"
            >
              <div
                className={`w-[350px] h-[300px] ${
                  item.id % 2 === 1 ? "order-last" : ""
                }`}
              >
                <Image
                  src={item.imageName}
                  width={200}
                  height={200}
                  className="w-[350px] h-[280px] rounded-[20px]"
                />
              </div>
              <div className="grid w-[400px]">
                <div className="text-[30px] font-sfpro text-[#F15A24] font-bold">
                  <span className="text-[60px] text-[#a9a9a9] pr-3">
                    {item.id}
                  </span>{" "}
                  {item.heading}
                </div>
                <div className="text-[18px] font-sfpro text-[#909090]">
                  {item.description}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
