import React, { memo, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import icons from '../ultis/icons'

const SectionItem = ({ encodeId, link, thumbnailM, sortDescription,title }) => {
    const {AiOutlineHeart,AiFillHeart,BsPlayFill,BsThreeDots} =  icons
  const navigate = useNavigate();
  const imageRef = useRef()
  const [isHover, setIsHover] = useState(false)
  const handleHover = (e) => {
    setIsHover(true)
    imageRef.current.classList?.remove('animate-scale-down-image')
    imageRef.current.classList?.add('animate-scale-up-image')
  }
  const handleLeave=()=>{
    setIsHover(false)
    imageRef.current.classList?.add('animate-scale-down-image')
    imageRef.current.classList?.remove('animate-scale-up-image')
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
            className="w-full relative overflow-hidden rounded-lg"
        >
            {isHover && 
                <div className="absolute top-0 bottom-0 left-0 right-0 bg-overlay-30 rounded-md z-40 flex text-white items-center justify-center gap-4">
                    <span><AiOutlineHeart size={24} title="Thêm vào thư viện"/></span>
                    <span>
                        <BsPlayFill 
                            size={35} 
                            className="p-1 border border-white rounded-full" 
                            title={title}
                        />
                    </span>
                    <span><BsThreeDots size={20} title="Khác" /></span>
                </div>
            }
          <img
            ref={imageRef}
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
