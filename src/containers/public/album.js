import React, { useEffect,useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import * as apis from "../../apis";
import moment from 'moment';
import {Lists, AudioLoading} from '../../components';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { useDispatch, useSelector } from "react-redux";
import * as actions from '../../store/actions';
import icons from '../../ultis/icons';
import LoadingSong from "../../components/loadingSong";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Modal } from 'antd';

const Album = () => {
  const {
      BsPlayFill,BsPauseFill,AiFillHeart,AiOutlineHeart,HiDotsHorizontal,FaRegComment,VscDesktopDownload,
      TbShare3,MdContentCopy,BiCommentAdd
  } = icons
  const {isPlaying, songs} = useSelector(state=>state.music)
  const {playlistId } = useParams();
  const [playlistData, setPlaylistData] = useState({})
  const dispatch = useDispatch()
  const location = useLocation()
  // console.log("Songsssss", songs)
  const [isLike, setIsLike] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  //
  useEffect(()=>{
    if(location?.state?.playAlbum){
      const randomSong = Math.round(Math.random() * playlistData?.song?.items?.length) -1
      dispatch(actions?.setCurSongId(playlistData?.song?.items[randomSong]))
      dispatch(actions?.play(true))
    }
  },[playlistData, playlistId])
  useEffect(() => {
    const fetchDetailPlayList = async () => {

      // Khi đang load data thì cho bằng True(Hiển thị icon Loading)
      dispatch(actions.loadingData(true))
      
      const response = await apis.apiGetDetailPlaylist(playlistId);

      // Load data thành công thì sẽ set lại bằng False (Ko hiển thị Loading nữa)
      dispatch(actions.loadingData(false))

    //   console.log(response);
        if(response?.data?.err === 0){
            setPlaylistData(response.data?.data)
            dispatch(actions.setPlaylist(response?.data?.data?.song?.items))
        }
    };
    fetchDetailPlayList();
  }, [playlistId]);

  const handleRandomPlay =()=>{
    // alert("Phát ngẫu nhiên")
    const randomMusic = Math.round(Math.random()*songs?.length)-1
    dispatch(actions.setCurSongId(songs[randomMusic].encodeId))
    dispatch(actions.play(true))
  }
  const handleLike=()=>{
    setIsLike(prev=>!prev)
    toast.success("Đã thêm playlist vào thư viện")
  }
  const handleShowModal=()=>{
    setIsModalOpen(true)
  }
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    
    <div className="flex w-full h-full gap-8 px-[59px]">
        <div className="w-[30%] flex flex-none flex-col items-center gap-2">
          <div className="w-full relative overflow-hidden">
            <img 
                className={`w-full object-contain ${isPlaying ? 'rounded-full animate-rotate-center' : 'rounded-md animate-rotate-center-pause'} shadow-md`}
                src={playlistData?.thumbnailM} 
                alt="Images Album" 
            />
            <div className={`flex justify-center items-center absolute top-0 right-0 left-0 bottom-0 hover:bg-overlay-30 text-white ${isPlaying && 'rounded-full'}`}>
            <span className="p-3 border border-white rounded-full">

              {isPlaying ? <AudioLoading/> : <BsPlayFill size={20}/>}
            </span>
            </div>
          </div>
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
              <div className="flex flex-col mt-3">
                <span className="cursor-pointer border items-center rounded-full w-[210px] h-10 text-center p-2 gap-3 flex px-[20px] bg-purple-500 text-white">
                  <BsPlayFill size={24}/>
                  <span className="text-sm font-semibold" onClick={handleRandomPlay}>PHÁT NGẪU NHIÊN</span>
                </span>
                <span className="flex gap-4 mt-2 items-center justify-center">
                  <AiOutlineHeart title="Thêm vào thư viện" className={`flex border items-center rounded-full w-10 h-10 p-2 cursor-pointer ${isLike ? 'text-purple-900' : 'text-gray-600'}`} size={30} onClick={handleLike}/>
                  <HiDotsHorizontal title="Khác" className="flex border items-center rounded-full w-10 h-10 p-2 cursor-pointer" size={22} onClick={handleShowModal}/>
                  <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} className="rounded-md">
                    <p className="flex flex-col gap-2 ">
                      <span className="cursor-pointer border bg-gray-300 flex gap-3 items-center rounded-full w-[450px] h-10 text-center p-2  px-[20px">
                        <BiCommentAdd size={20}/>
                        <span className="text-sm font-semibold">Thêm vào danh sách phát</span>
                      </span>

                      <span className="cursor-pointer border bg-gray-300 flex gap-3 items-center rounded-full w-[450px] h-10 text-center p-2  px-[20px">
                        <FaRegComment size={20}/>
                        <span className="text-sm font-semibold">Bình luận</span>
                      </span>

                      <span className="cursor-pointer border bg-gray-300 flex gap-3 items-center rounded-full w-[450px] h-10 text-center p-2  px-[20px">
                        <VscDesktopDownload size={20}/>
                        <span className="text-sm font-semibold">Tải xuống</span>
                      </span>

                      <span className="cursor-pointer border bg-gray-300 flex gap-3 items-center rounded-full w-[450px] h-10 text-center p-2  px-[20px">
                        <MdContentCopy size={20}/>
                        <span className="text-sm font-semibold">Sao chép link</span>
                      </span>

                      <span className="cursor-pointer border bg-gray-300 flex gap-3 items-center rounded-full w-[450px] h-10 text-center p-2  px-[20px">
                        <TbShare3 size={20}/>
                        <span className="text-sm font-semibold">Chia sẻ</span>
                      </span>
                    </p>
                  </Modal>
                </span>
              </div>
          </div>
        </div>
        <Scrollbars  style={{ width: "100%", height: "100%" }}>
        <div className=" flex-auto">
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
