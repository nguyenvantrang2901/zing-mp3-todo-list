import React, { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import * as apis from "../../apis";
import { Header } from "../../components";
import moment from 'moment';

const Album = () => {
  const { title, playlistId } = useParams();
  const [playlistData, setPlaylistData] = useState({})
  // console.log(title, playlistId)
  useEffect(() => {
    const fetchDetailPlayList = async () => {
      const response = await apis.apiGetDetailPlaylist(playlistId);
    //   console.log(response);
        if(response?.data?.err === 0){
            setPlaylistData(response.data?.data)
        }
    };
    fetchDetailPlayList();
  }, [playlistId]);
  return (
    <div className="flex w-full gap-8 px-[59px]">
      <div className="w-1/4 border border-red-400 flex flex-none flex-col items-center gap-2">
        <img 
            className="w-full object-contain rounded-md shadow-md"
            src={playlistData?.thumbnailM} alt="Images Album" 
        />
        <div className="flex flex-col items-center gap-1">
            <h3 className="text-gray-800 text-[20px] font-bold">{playlistData?.title}</h3>
            <span className="flex gap-2 items-center text-gray-500 text-xs font-semibold">
                <span>Cập nhật: </span>
                <span>
                    {moment.unix(playlistData?.contentLastUpdate).format("DD/MM/YYYY")}
                </span>
            </span>
            <span className="flex gap-2 items-center text-gray-500 text-xs font-semibold">{playlistData?.artistsNames}</span>
            <span className="flex gap-2 items-center text-gray-500 text-xs font-semibold">
                {`${Math.round(playlistData?.like/1000)}K người yêu thích`} 
            </span>
        </div>
      </div>
      <div className="border border-red-400 flex-auto">
        Detail 
      </div>
    </div>
  );
};

export default Album;
