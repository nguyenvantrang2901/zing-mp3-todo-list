import React, { memo } from 'react'
import moment from 'moment'
import 'moment/locale/vi' //Chuyển về tiếng việt(trường releaseDate)
import * as actions from '../store/actions'
import { useDispatch } from 'react-redux'

//Truyển props để lấy dữ liệu từ file newRelase xuống.
//tạo componets SongItem để sử dụng đc nhiều lần
const SongItem = ({thumbnail, artistsNames, title, releaseDate, songData}) => {
  const dispatch = useDispatch()
  return (
    <div 
      className='flex flex-auto w-[45%] min-[1024px]:w-[30%] border p-[10px] gap-2 hover:bg-main-200 rounded-md cursor-pointer'
      onClick={()=>{
            dispatch(actions.setCurSongId(songData?.encodeId))
            dispatch(actions.play(true))
            dispatch(actions.playAlbum(true))
        }} 
      >
      <img src={thumbnail} alt="Thumnail" className='w-[60px] h-[60px] object-cover rounded-md' />
      <div className='flex flex-col'> 
        <span className='font-semibold text-sm'>{title?.length > 20 ? `${title.slice(0,20)}...` : title}</span>
        <span className='text-xs text-gray-700'>{artistsNames}</span>
        <span className='text-xs'>{moment(releaseDate*1000).fromNow()}</span>
      </div>
    </div>
  )
}

export default memo(SongItem)