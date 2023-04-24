import React, { memo, useState } from "react";
import { useNavigate } from "react-router-dom";

const SectionItem = ({ encodeId, link, thumbnailM, sortDescription }) => {
  const navigate = useNavigate();
  const [isHover, setIsHover] = useState(false)
  const handleHover = (e) => {
    setIsHover(true)
  }
  const handleLeave=()=>{
    setIsHover(false)
  }
  return (
      <div
        key={encodeId}
        className="w-1/5 text-sm flex flex-auto flex-col gap-3 cursor-pointer"
        onClick={() => {
          navigate(link?.split(".")[0]);
        }}
      >
        <div   
            onMouseEnter={handleHover} 
            onMouseLeave={handleLeave}
            className="w-full relative"
        >
          {isHover && <div className="absolute top-0 bottom-0 left-0 right-0 bg-overlay-30 rounded-md"></div>}
          <img
            className="h-auto w-full rounded-lg"
            src={thumbnailM}
            alt="avatar"
          />
        </div>
        <span className="flex flex-col">
          <span>
            {sortDescription.length > 40  ? `${sortDescription.slice(0, 40)}...` : sortDescription}
          </span>
        </span>
      </div>
  );
};

export default memo(SectionItem);
