import { useState } from "react";

// Card component
const Card = ({ item }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = (bool) => {
    setIsFlipped(bool);
  };

  return (
    <div className="w-[200px] bg-transparent group cursor-pointer">
      <div
        className={`w-[150px] rounded-[10px] relative h-[149px] transition-all duration-500 [transform-style:preserve-3d] bg-[#474747] bg-opacity-30 z-10 shadow-md  ${
          isFlipped ? "group-hover:[transform:rotateY(180deg)]" : ""
        }`}
        onMouseEnter={() => handleFlip(true)}
        onMouseLeave={() => handleFlip(false)}
      >
        <div
          className={`w-[180px] rounded-[10px] absolute left-[-15px] z-20 h-[140px] bg-[#ffffff] shadow-md ${
            isFlipped ? "hidden" : "block"
          }`}
        >
          <div className="grid items-center p-3">
            <div className="text-[30px] text-[#0B9588]">{item.icon}</div>
            <div className="text-[40px] font-semibold text-[#000000]">
              {item.data}
            </div>
            <div className="text-[15px] font-[400] text-[#7e7e7e]">
              {item.name}
            </div>
          </div>
        </div>
        <div
          className={`w-[180px] rounded-[10px] absolute left-[-15px] z-20 h-[140px] bg-[#ffffff] shadow-md ${
            isFlipped
              ? "block [transform:rotateY(180deg)] [backface-visibility:hidden]"
              : "hidden"
          }`}
        >
          <div className="grid items-center p-3">
            <div className="text-[15px] font-[400] text-[#7e7e7e]">
              {item.description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
