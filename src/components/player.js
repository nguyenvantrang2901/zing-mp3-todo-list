import React,{useEffect, useState, useRef} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import * as apis from '../apis';
import icons from '../ultis/icons';
import * as actions from '../store/actions'
import moment from 'moment';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const {
  AiOutlineHeart,
  HiDotsHorizontal,
  CiRepeat,
  MdSkipPrevious,
  MdSkipNext,
  BsShuffle,
  BsPlayFill,
  BsPauseFill,
  TbRepeatOnce
} = icons;

var intervalId 
const Player = () => {
  const dispatch = useDispatch()
  const {curSongId, isPlaying, songs} = useSelector(state=>state.music)
  const [songInfo, setSongInfo] = useState(null)
  const [audio, setAudio] = useState(new Audio())
  const [currentSeconds, setCurrentSeconds] = useState(0)
  const [isShuffle, setIsShuffle] = useState(false)
  const [repeatMode, setRepeatMode] = useState(0)

  //Thanh nằm bên trên của trình phát nhạc
  const thumbRef = useRef()
  //
  const trackRef = useRef()

  // console.log(curSongId)
  //useEffect ko đc phép sư dụng bất đồng bộ 
  // mà phải định nghĩa hàm để xử lý việc đó.
  useEffect(() => { 
    const fetchDetailSong = async()=>{
      const [res1, res2] = await Promise.all([
        apis.apiGetInfoSong(curSongId),
        apis.apiGetSong(curSongId)
      ])
      if(res1.data.err === 0 ){
        setSongInfo(res1.data.data)
      }
      if(res2.data.err === 0){
        audio.pause()
        setAudio(new Audio(res2.data.data['128']))
      } else {
        setAudio(new Audio())
        audio.pause()
        dispatch(actions.play(false))
        toast.warn(res2?.data?.msg)
        setCurrentSeconds(0)
        thumbRef.current.style.cssText = `right: 100%`
      }
    }
    fetchDetailSong()
  },[curSongId])
  useEffect(()=>{
    const handleEnd = () =>{
      // console.log(isShuffle);
      if(isShuffle){
        handleShuffle()
      }
      else if(repeatMode){
        repeatMode === 1 ? handleRepeatOne() : handleNextSong()
      }
      else {
        audio.pause()
        dispatch(actions.play(false))
      }
    }
    audio.addEventListener('ended', handleEnd)
    return ()=>{
      audio.removeEventListener('ended', handleEnd)
    }
  },[audio, isShuffle, repeatMode])

  //set dependence là audio vì khi thay đổi bài nhạc sẽ set lại state của bài hát thay vì isPlaying
  // vì nếu lấy isPlaying thì khi click 1 bài khác thì isPlaying vẫn ở trạng thái True nên ko load lại số giây
  useEffect(() => {
    intervalId && clearInterval(intervalId)
    audio.pause()
    audio.load()
    if(isPlaying && thumbRef.current){
      audio.play()
      intervalId = setInterval(() => { 
        let percent = Math.round(audio.currentTime * 10000 / songInfo?.duration) / 100
        thumbRef.current.style.cssText = `right: ${100 - percent}%`
        setCurrentSeconds(Math.round(audio.currentTime))
      },200)
    }
  },[audio])

  const handleTogglePlayMusic = () => { 
    if (isPlaying){
      audio.pause()
      dispatch(actions.play(false))
    }
    else{
      audio.play()
      dispatch(actions.play(true))
    }
  }
  const handleProgressBar =(e)=>{
    //Lấy tọa độ nằm ngang của thanh nhạc khi click chuột vào thanh đó.
    const trackRect = trackRef.current.getBoundingClientRect()
    const percent = Math.round((e.clientX - trackRect.left) * 10000 / trackRect.width) / 100
    // console.log(percent);
    thumbRef.current.style.cssText = `right: ${100 - percent}%`
    audio.currentTime = percent * songInfo.duration / 100
    setCurrentSeconds(Math.round(audio.currentTime))
  } 
  // Handle bài hát tiếp theo
  const handleNextSong = () => {
    if (songs){
      let currentSongIndex
      songs?.forEach((item, index)=>{
        if(item.encodeId === curSongId) 
          currentSongIndex = index
      })
      // console.log(currentSongIndex);
      dispatch(actions.setCurSongId(songs[currentSongIndex + 1].encodeId))
      dispatch(actions.play(true))
    }
   }
  // Handle Bài hát trước đó
  const handlePreviewSong = () => { 
    
    if(songs) {
      let currentSongsIndex
      songs?.forEach((item,index)=>{
        if(item.encodeId === curSongId)
          currentSongsIndex = index
      })
      dispatch(actions.setCurSongId(songs[currentSongsIndex - 1].encodeId))
      dispatch(actions.play(true))
    } 
  }

  //Bật phát ngẫu nhiên
  const handleShuffle = () => { 
    const randomIndex = Math.round(Math.random()*songs?.length) -1
    dispatch(actions.setCurSongId(songs[randomIndex].encodeId))
    dispatch(actions.play(true))
  }

  //Bật phát lại 1 lần
  const handleRepeatOne=()=>{
    // console.log('repeat one')
    audio.play(true)
  }

  //Bật phát lại tất cả
  const handlerRepeat = () => { 
    alert("Phát tát cả")
  }
  return (
    <div className="bg-main-400 px-5 h-full flex">

      <div className='w-[30%] flex-auto flex items-center gap-3'>
        <img src={songInfo?.thumbnail} alt="Images Song" className='w-16 h-16 object-cover rounded-md' />
        <div className='flex flex-col'>
          <span className='text-sm font-semibold text-gray-700'>
            {songInfo?.title}
          </span>
          <span className='text-xs font-semibold text-gray-500'>
            {songInfo?.artistsNames}
          </span>
        </div>
        <div className='flex gap-3 pl-'>
          <span>
            <AiOutlineHeart size={16}/>
          </span>
          <span>
            <HiDotsHorizontal/>
          </span>
        </div>
      </div>

      <div className='w-[40%] flex flex-auto flex-col border border-red-500 items-center justify-center py-2'>
        <div className='flex gap-8 justify-center items-center'>

          <span 
              className={`cursor-pointer ${isShuffle ? 'text-purple-900' : 'text-gray-600'}`}
              title="Bật phát ngẫu nhiên"
              onClick ={()=>setIsShuffle(prev => !prev)}
          >
            <BsShuffle size={24}/>
          </span>

          <span   
            className='cursor-pointer'
            onClick={handlePreviewSong}
          >
            <MdSkipPrevious size={24}/>
          </span>

          <span
             className='p-1 border border-gray-700 rounded-full hover:text-main-500 cursor-pointer'
              onClick={handleTogglePlayMusic}   
          >
            {isPlaying ? <BsPauseFill size={30}/> : <BsPlayFill size={30}/>}
          </span>

          <span 
            className={`${!songs ? 'text-gray-500' : 'cursor-pointer'}`}
            onClick={handleNextSong}
          >
            <MdSkipNext size={24}/>
          </span>
          
          <span 
            className={`cursor-pointer ${repeatMode  && 'text-purple-600'}` }
            title="Bật phát lại tất cả"
            onClick ={()=>setRepeatMode(prev => prev === 2 ? 0 : prev + 1 )}
          >
            { repeatMode === 1 ? <TbRepeatOnce size={24}/> : <CiRepeat size={24}/> }
          </span>

        </div>
        <div className='w-full flex pt-1 items-center justify-center gap-3 text-sm'>
          <span>{moment.utc(currentSeconds*1000).format('mm:ss')}</span>

          <div 
            className='rounded-r-full rounded-l-full hover:h-[8px] cursor-pointer w-3/5 h-[3px] bg-[rgba(0,0,0,0.1)] relative'
            onClick={handleProgressBar}
            ref = {trackRef}
          >
            <div ref={thumbRef} className='rounded-r-full rounded-l-full absolute top-0 bottom-0 left-0 bg-[#0e8080]'></div>
          </div>

          <span> {moment.utc(songInfo?.duration*1000).format('mm:ss')}</span>
        </div>
      </div>

      <div className='w-[30%] flex-auto border border-red-500'>
        Volume
      </div>


      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  )
}

export default Player