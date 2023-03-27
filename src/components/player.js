import React,{useEffect, useState} from 'react'
import {useSelector} from 'react-redux';
import * as apis from '../apis';
import icons from '../ultis/icons';

const {AiOutlineHeart,AiFillHeart,HiDotsHorizontal} = icons;


const Player = () => {
  const {curSongId} = useSelector(state=>state.music)
  const [songInfo, setSongInfo] = useState('')
  // console.log(curSongId)
  //useEffect ko đc phép sư dụng bất đồng bộ 
  // mà phải định nghĩa hàm để xử lý việc đó.
  useEffect(() => { 
    const fetchDetailSong = async()=>{
      const response = await apis.getInfoSong(curSongId)
      // console.log(response)
      if(response.data.err === 0 ){
        setSongInfo(response.data.data)
      }
    }
    fetchDetailSong()
  },[curSongId])

  return (
    <div className="bg-main-400 px-5 h-full flex">

      <div className='w-[30%] flex-auto border border-red-500 flex items-center gap-3'>
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

      <div className='w-[30%] flex-auto border border-red-500'>
        Main Player
      </div>

      <div className='w-[30%] flex-auto border border-red-500'>
        Volume
      </div>

    </div>
  )
}

export default Player