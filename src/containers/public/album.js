import React, { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import * as apis from "../../apis";
import moment from 'moment';
import {Lists} from '../../components';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { useDispatch, useSelector } from "react-redux";
import * as actions from '../../store/actions';

const Album = () => {
  const {curSongId, songs, isPlaying} = useSelector(state=>state.music)
  const { title, playlistId } = useParams();
  const [playlistData, setPlaylistData] = useState({})
  const dispatch = useDispatch()

  // console.log(title, playlistId)
  useEffect(() => {
    const fetchDetailPlayList = async () => {
      const response = await apis.apiGetDetailPlaylist(playlistId);
    //   console.log(response);
        if(response?.data?.err === 0){
            setPlaylistData(response.data?.data)
            dispatch(actions.setPlaylist(response?.data?.data?.song?.items))
        }
    };
    fetchDetailPlayList();
  }, [playlistId]);
  return (
    
    <div className="flex w-full h-full gap-8 px-[59px]">
        <div className="w-[30%] border border-red-400 flex flex-none flex-col items-center gap-2">
          <img 
              className={`w-full object-contain ${isPlaying ? 'rounded-full animate-rotate-center' : 'rounded-md animate-rotate-center-pause'} shadow-md`}
              src={playlistData?.thumbnailM} 
              alt="Images Album" 

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
                  {playlistData?.like > 1000 ? `${Math.round(playlistData?.like/1000)}K người yêu thích` : `${playlistData?.like} người yêu thích`} 
              </span>
          </div>
        </div>
        <Scrollbars  style={{ width: "100%", height: "80%" }}>
        <div className="border border-red-400 flex-auto">
          <span className="text-sm">
            <span className="text-gray-700">Lời tựa </span>
            <span className="font-semibold">{playlistData?.sortDescription}</span>
          </span>

          <Lists 
            // songs={playlistData?.song?.items} 
            totalDuration={playlistData?.song?.totalDuration}
          /> 
        </div>
        </Scrollbars>
      </div>
  );
};

export default Album;
