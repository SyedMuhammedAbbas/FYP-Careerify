import Karachi_logo from "@/images/karachi_logo_orange.png";
import sample1 from "@/images/sample1.jpg";
import Image from "next/image";

export default function AnalyzeJobMarket() {
  return (
    <>
      <div className="w-[100vw] flex justify-center">
        <div className="bg-[#ffffff] w-[600px] text-[#000000] grid gap-2 text-center justify-center p-10">
          <div className="text-[30px] font-sfpro text-[#F15A24] font-bold">
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
            <div className="text-[30px] font-sfpro text-[#F15A24] font-bold">
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
            <div className="text-[30px] font-sfpro text-[#F15A24] font-bold">
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
            <div className="text-[30px] font-sfpro text-[#F15A24] font-bold">
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
    </>
  );
}
