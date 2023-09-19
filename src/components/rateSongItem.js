import React, { memo } from 'react'
import moment from 'moment'
import 'moment/locale/vi' //Chuyển về tiếng việt(trường releaseDate)
import * as actions from '../store/actions'
import { useDispatch } from 'react-redux'

//Truyển props để lấy dữ liệu từ file newRelase xuống.
//tạo componets SongItem để sử dụng đc nhiều lần
const RateSongItem = ({thumbnail, artists, title, songData, order, percent}) => {
  const dispatch = useDispatch()
  return (
    <div 
      className='justify-between items-center bg-purple-500 flex flex-4 w-[100%] min-[1024px] p-[10px] gap-2 hover:bg-purple-400 rounded-md mb-[10px]'
      onClick={()=>{
            dispatch(actions.setCurSongId(songData?.encodeId))
            dispatch(actions.play(true))
            dispatch(actions.playAlbum(true))
        }} 
      >
      <div className="flex gap-4">
        {order && <span 
          className={`${order===1? 'text-shadow-no1':order===2?'text-shadow-no2':'text-shadow-no3'} text-[rgba(77,34,104,0.9)] text-bold text-white text-[32px]`}
        >
          {order}
        </span>}
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
      
      {percent && <span className="text-bold text-white text-[16px]">{percent}%</span>}
    </div>
  )
}

export default memo(RateSongItem)