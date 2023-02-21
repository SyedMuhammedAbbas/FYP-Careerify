import Header from "../Common/Header";
import { BiSearch } from "react-icons/bi";
import Logo from "../../images/logo_white.png";
import Image from "next/image";
import Footer from "../Common/Footer";
import sample1 from "@/images/sample1.jpg";

export default function Home_Section() {
  return (
    <>
      {/* <Header /> */}
      <div className="overflow-x-hidden w-[100vw] grid">
        <div className="bg-[url('../images/background_code.jpg')] bg-[length:100%_100%] min-h-[100vh] max-h-[100%] overflow-x-hidden bg-no-repeat flex items-center justify-center">
          <div className="grid justify-center gap-1 bg-opacity-80 backdrop-blur-[6px]">
            <div className="flex flex-col gap-5 items-center justify-center w-[100vw] h-[70vh] pt-20">
              <Image src={Logo} alt="logo" width={400} height={150} />
              <form className="bg-[#c7c7c7] flex items-center rounded-[20px] w-[40vw] h-[5rem]">
                <input
                  className="bg-[#c7c7c7] rounded-[20px] outline-none w-[35vw] h-[5rem] placeholder:text-[25px] placeholder:text-[#6a6a6a] pl-6 text-[25px] text-[#000000]"
                  placeholder="Enlighten your careers here...."
                />
                <button className="rounded-[20px] flex justify-center text-[#6a6a6a] text-[50px] px-2">
                  <BiSearch />
                </button>
              </form>
            </div>

            <div className="w-[100vw] flex justify-center p-10">
              <div className="bg-[#c7c7c7] flex justify-center rounded-[20px] w-[70vw] h-[400px] p-5 px-10">
                <div className="">
                  <div className="flex border-b-[2px] border-[#505050]">
                    <div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100vw] flex justify-center">
        <div className="bg-[#ffffff] w-[600px] text-[#000000] grid gap-2 text-center justify-center p-10">
          <div className="text-[30px] font-sfpro text-[#000000] font-bold">
            Why Careerify is the right way to analyze job market?
          </div>
          <div className="text-[15px] font-sfpro text-[#909090] ">
            Lorem ipsum dolor sit amet. Et consequatur quas ut temporibus omnis
            et illum dignissimos nam dolorem voluptatem a repellendus veritatis
            ut nemo rerum sit illum tenetur. Et suscipit voluptatem et quia illo
            ea saepe internos. Et molestiae consequatur ut quae ullam est
            molestias vitae ut dolor dolores nam aperiam quas et sint voluptas
            est provident fuga.
          </div>
        </div>
      </div>
      <div className="grid">
        <div className="flex gap-20 items-center justify-center">
          <div className="w-[350px] h-[300px]">
            <Image
              src={sample1}
              width={200}
              height={200}
              className="w-[350px] h-[280px] rounded-[20px]"
            />
          </div>
          <div className="grid w-[400px]">
            <div className="text-[30px] font-sfpro text-[#000000] font-bold">
              <span className="text-[60px] text-[#a9a9a9] pr-3">1</span> New
              Trends Alert
            </div>
            <div className="text-[18px] font-sfpro text-[#909090]">
              Lorem ipsum dolor sit amet. Et consequatur quas ut temporibus
              omnis et illum dignissimos nam dolorem voluptatem a repellendus
              veritatis ut nemo rerum sit illum tenetur. Et suscipit voluptatem
              et quia illo ea saepe internos.
            </div>
          </div>
        </div>

        <div className="flex gap-20 items-center justify-center">
          <div className="grid w-[400px]">
            <div className="text-[30px] font-sfpro text-[#000000] font-bold">
              <span className="text-[60px] text-[#a9a9a9] pr-3">2</span> New
              Trends Alert
            </div>
            <div className="text-[18px] font-sfpro text-[#909090]">
              Lorem ipsum dolor sit amet. Et consequatur quas ut temporibus
              omnis et illum dignissimos nam dolorem voluptatem a repellendus
              veritatis ut nemo rerum sit illum tenetur. Et suscipit voluptatem
              et quia illo ea saepe internos.
            </div>
          </div>

          <div className="w-[350px] h-[300px]">
            <Image
              src={sample1}
              width={200}
              height={200}
              className="w-[350px] h-[280px] rounded-[20px]"
            />
          </div>
        </div>

        <div className="flex gap-20 items-center justify-center">
          <div className="w-[350px] h-[300px]">
            <Image
              src={sample1}
              width={200}
              height={200}
              className="w-[350px] h-[280px] rounded-[20px]"
            />
          </div>
          <div className="grid w-[400px]">
            <div className="text-[30px] font-sfpro text-[#000000] font-bold">
              <span className="text-[60px] text-[#a9a9a9] pr-3">3</span> New
              Trends Alert
            </div>
            <div className="text-[18px] font-sfpro text-[#909090]">
              Lorem ipsum dolor sit amet. Et consequatur quas ut temporibus
              omnis et illum dignissimos nam dolorem voluptatem a repellendus
              veritatis ut nemo rerum sit illum tenetur. Et suscipit voluptatem
              et quia illo ea saepe internos.
            </div>
          </div>
        </div>
      </div>

      <div>
        <div>
          <div></div>
          <div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
