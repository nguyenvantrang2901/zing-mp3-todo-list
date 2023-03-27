import React,{useEffect, useState} from 'react'
import {useSelector} from 'react-redux';
import * as apis from '../apis';
import icons from '../ultis/icons';

const {
  AiOutlineHeart,
  AiFillHeart,
  HiDotsHorizontal,
  CiRepeat,
  MdSkipPrevious,
  MdSkipNext,
  BsShuffle,
  BsPlayFill,
  BsPauseFill,
  HiPause
} = icons;


const Player = () => {
  const audioElement = new Audio()
  // console.log(audioElement)
  const {curSongId, isPlaying} = useSelector(state=>state.music)
  const [songInfo, setSongInfo] = useState(null)
  const [source, setSource] = useState(null)
  // const [isPlaying, setisPlaying] = useState(false)
  // console.log(curSongId)
  //useEffect ko đc phép sư dụng bất đồng bộ 
  // mà phải định nghĩa hàm để xử lý việc đó.
  useEffect(() => { 
    const fetchDetailSong = async()=>{
      const [res1, res2] = await Promise.all([
        apis.getInfoSong(curSongId),
        apis.getSong(curSongId)
      ])
      if(res1.data.err === 0 ){
        setSongInfo(res1.data.data)
      }
      if(res2.data.err === 0){
        setSource(res2.data.data['128'])
      }
    }
    fetchDetailSong()
  },[curSongId])

  useEffect(() => { 

  },[curSongId])

  const handleTogglePlayMusic = () => { 
    audioElement.play()
  }

  return (
    <div className="bg-main-400 px-5 h-full flex">

      <div className='w-[30%] flex-auto flex items-center gap-3'>
        <img src={songInfo?.thumbnail} alt="Image Song" className='w-16 h-16 object-cover rounded-md' />
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

          <span className='cursor-pointer' title="Bật phát ngẫu nhiên">
            <BsShuffle size={24}/>
          </span>

          <span className='cursor-pointer'>
            <MdSkipPrevious size={24}/>
          </span>

          <span
             className='p-1 border border-gray-700 rounded-full hover:text-main-500 cursor-pointer'
              onClick={handleTogglePlayMusic}   
          >
            {isPlaying ? <BsPauseFill size={30}/> : <BsPlayFill size={30}/>}
          </span>

          <span className='cursor-pointer'>
            <MdSkipNext size={24}/>
          </span>
          
          <span className='cursor-pointer' title="Bật phát lại tất cả">
            <CiRepeat size={24}/>
          </span>

        </div>
        <div>
          <span>
            Phát nhạc
          </span>
        </div>
      </div>

      <div className='w-[30%] flex-auto border border-red-500'>
        Volume
      </div>

    </div>
  )
}

export default Player