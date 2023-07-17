import Karachi_logo from "@/images/karachi_logo_orange.png";
import sample1 from "@/images/sample1.jpg";
import Image from "next/image";
import pic1 from "@/images/analyzeJobMarket/1.jpg";
import pic2 from "@/images/analyzeJobMarket/2.jpg";
import pic3 from "@/images/analyzeJobMarket/3.jpg";
import pic4 from "@/images/analyzeJobMarket/4.jpg";
import pic5 from "@/images/analyzeJobMarket/5.jpg";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className={(className, "bottom-[-60px]")}
      onClick={onClick}
      style={{
        fontSize: "40px",
        opacity: "1",
        color: "#FFB636",
        position: "absolute",
        left: "45%",
        // left: "70%",
        // top: "60px",
      }}
    >
      <button className="nextButton">
        <BsChevronRight size={15} color="#fff" />
      </button>
    </button>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={(className, "absolute bottom-[-60px]  right-[57%]")}
      onClick={onClick}
      style={{
        // ...style,
        fontSize: "40px",
        opacity: "1",
        color: "#FFB636",
        position: "absolute",
      }}
    >
      <button className="prevButton">
        <BsChevronLeft size={15} color="#fff" />
      </button>
    </div>
  );
}

export default function AnalyzeJobMarket() {
  var settings = {
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    initialSlide: 0,
    // centerMode: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const analyzeJob = [
    {
      id: 1,
      imageName: pic1,
      heading: "Unparalleled Insights",
      description:
        "Discover the power of Careerify as we provide you with unparalleled insights into the dynamic IT job market in Pakistan. Our carefully curated data, gathered from various job posting sites, allows you to gain a comprehensive understanding of the current trends and demands.",
    },
    {
      id: 2,
      imageName: pic2,
      heading: "Visualize Trends",
      description:
        "Experience the job market like never before through our intuitive graphs and visualizations. Careerify transforms complex data into easy-to-understand visuals, helping you identify emerging trends, popular technologies, and the most sought-after job roles.",
    },
    {
      id: 3,
      imageName: pic3,
      heading: "Informed Decision-making",
      description:
        "Careerify empowers you to make informed decisions about your career path. With our in-depth analysis, you can explore which areas of the IT industry are thriving, identify lucrative opportunities, and align your skills with the demands of the market.",
    },
    {
      id: 4,
      imageName: pic4,
      heading: "Stay Competitive",
      description:
        "Gain a competitive edge by staying informed about the latest developments in the IT job market. Careerify equips you with the knowledge to navigate the ever-changing landscape, allowing you to position yourself strategically and seize the best opportunities.",
    },
    {
      id: 5,
      imageName: pic5,
      heading: "Plan Your Future",
      description:
        "Let Careerify be your guide as you plan your future in the IT industry. Whether you're a student, a fresh graduate, or an experienced professional, our comprehensive data and insights help you chart a successful career path and make informed decisions at every stage.",
    },
  ];

  return (
    <>
      <div className="grid justify-center items-center py-[5%] z-20">
        <div className="w-[100vw] bg-transparent flex justify-center">
          <div className="w-[600px] text-[#ffffff] grid gap-2 text-center justify-center p-10">
            <div className="text-[30px] font-sfpro text-[#F15A24] font-bold">
              Why Careerify is the right way to analyze job market?
            </div>
            <div className="text-[15px] font-sfpro text-[#909090] ">
              Embrace Careerify and unlock the potential of the IT job market in
              Pakistan. Explore, analyze, and thrive in the ever-evolving world
              of IT employment with confidence and clarity.
            </div>
          </div>
        </div>

        <div className="w-[85vw] mx-auto mb-10 ">
          <Slider {...settings}>
            {analyzeJob.map((item, index) => {
              return (
                <div key={index} className="mx-auto ">
                  <div className="flex justify-center tablet2.1:grid">
                    <div className={`z-20 mt-7 `}>
                      <Image
                        src={item.imageName}
                        className="w-[350px] h-[280px] lg:w-[250px] lg:h-[180px] object-cover rounded-[20px]"
                      />
                    </div>

                    <div className="w-[500px] h-[400px] lg:w-[350px] lg:h-[500px] shadow-2xl z-10 -ml-[40px] tablet2.1:ml-0 tablet2.1:-mt-8 bg-[#1F1B24] rounded-[20px] p-10 pl-20">
                      <div className="grid ">
                        <div className="text-[30px] font-sfpro text-[#909090] font-bold">
                          <span className="text-[60px] text-[#a9a9a9] pr-3">
                            {item.id}
                          </span>{" "}
                          {item.heading}
                        </div>
                        <div className="text-[18px] font-sfpro text-[#696969]">
                          {item.description}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
}
