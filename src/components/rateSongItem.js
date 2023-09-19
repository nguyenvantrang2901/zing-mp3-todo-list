import React, { memo } from 'react'
import moment from 'moment'
import 'moment/locale/vi' //Chuyển về tiếng việt(trường releaseDate)
import * as actions from '../store/actions'
import { useDispatch } from 'react-redux'

//Truyển props để lấy dữ liệu từ file newRelase xuống.
//tạo componets SongItem để sử dụng đc nhiều lần
const RateSongItem = ({thumbnail, artists, title, releaseDate, songData}) => {
  const dispatch = useDispatch()
  return (
    <div 
      className='bg-purple-500 flex flex-4 w-[100%] min-[1024px] p-[10px] gap-2 hover:bg-purple-400 rounded-md mb-[10px]'
      onClick={()=>{
            dispatch(actions.setCurSongId(songData?.encodeId))
            dispatch(actions.play(true))
            dispatch(actions.playAlbum(true))
        }} 
      >
      <h1>#</h1>
      <img src={thumbnail} alt="Thumbnail" className='w-[60px] h-[60px] object-cover rounded-md' />
      <div className='flex flex-col'> 
        <span className='font-semibold text-white text-sm'>{title?.length > 20 ? `${title.slice(0,20)}...` : title}</span>
        {artists?.map(item=>{
            return (
                <>
                    <span className='text-xs text-gray-300 cursor-pointer'>{item?.name}</span>
                </>
            )
        })}
      </div>
    </div>
  )
}

export default memo(RateSongItem)