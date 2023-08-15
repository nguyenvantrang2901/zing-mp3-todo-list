import React, { useEffect, useState } from "react";
import icons from "../ultis/icons";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../store/actions";
import * as apis from "../apis";
import { useParams } from "react-router-dom";
import { Dispatch } from "react";

const { FiClock, BsThreeDots } = icons;

const SideBarRight = () => {
  const { isPlaying, songs } = useSelector((state) => state.music);
  const [playListData, setPlayListData] = useState({});
  console.log("playListDataplayListData", playListData);
  const { playListId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchDetailPlayList = async () => {
      // Khi đang load data thì cho bằng True(Hiển thị icon Loading)
      dispatch(actions.loadingData(true));

      const response = await apis.apiGetDetailPlaylist(playListId);

      // Load data thành công thì sẽ set lại bằng False (Ko hiển thị Loading nữa)
      dispatch(actions.loadingData(false));

      //   console.log(response);
      if (response?.data?.err === 0) {
        setPlayListData(response.data?.data);
        dispatch(actions.setPlaylist(response?.data?.data?.song?.items));
      }
    };
    fetchDetailPlayList();
  }, [playListId]);

  // console.log("Song sidebarRight", songs);
  return (
    <div className="flex flex-col">
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

      <div className="flex flex-col">
        <span>Tiếp theo</span>
        <span>Từ playlist {playListData?.title} </span>
      </div>
    </div>
  );
};

export default SideBarRight;
