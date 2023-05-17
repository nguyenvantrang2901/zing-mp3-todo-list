import React from "react";
import icons from "../ultis/icons";
const { FiClock, BsThreeDots } = icons;
const SideBarRight = () => {
  return (
    <div className="flex gap-2 p-2 mt-2 cursor-pointer">
      <span className="flex text-sm font-semibold">
        <span className="border text-center justify-center p-1 items-center rounded-full w-[118px] h-[34px]">
          Danh sách phát
        </span>
        <span className="border text-center justify-center p-1 items-center rounded-full w-[108px] h-[34px]">
          Nghe gần đây
        </span>
      </span>
      <span className="border items-center rounded-full w-8 h-8 p-1">
        <FiClock size={20} title="Hẹn giờ dừng phát nhạc" />
      </span>
      <span className="border items-center rounded-full w-8 h-8 p-1">
        <BsThreeDots size={20} title="Khác" />
      </span>
    </div>
  );
};

export default SideBarRight;
