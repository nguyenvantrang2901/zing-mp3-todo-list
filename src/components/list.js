import moment from 'moment'
import React, {memo} from 'react'
//import memo để ko bị re-render lại component vì mình truyền Props xuống.
import icons from '../ultis/icons'
import * as actions from '../store/actions'
import { useDispatch } from 'react-redux'

const {BsMusicNoteBeamed} = icons

const List = ({songData}) => {
    // console.log(songData)
    const dispatch = useDispatch()
  return (
    <div 
        onClick={()=>{
            dispatch(actions.setCurSongId(songData?.encodeId))
            dispatch(actions.play(true))
        }}   
        className='flex justify-between items-center p-[10px] border-t border-[rgba(0,0,0,0.05)] hover:bg-[#DDE4EA] cursor-pointer'
    >
        <div className='flex items-center gap-3 flex-1'>
            <span><BsMusicNoteBeamed/></span>
            <img src={songData?.thumbnail} alt="Thumbnail" className='w-10 h-10 object-cover rounded-md' />
            <span className='flex flex-col w-full'>
                <span className='text-sm font-bold flex items-center'>
                    {songData?.title?.length > 30 ? `${songData?.title?.slice(0,30)}...` : songData?.title}
                </span>
                <span className=''>{songData?.artistsNames}</span>
            </span>
        </div>
        <div className='flex-1 flex items-center justify-center'>
            {songData?.album?.title?.length > 30 ? `${songData?.album?.title?.slice(0,30)}...` : songData?.album?.title}
        </div>
        <div className='flex-1 flex justify-end' >
            {moment.utc(songData?.duration*1000).format('mm:ss')}
        </div>
    </div>
  )
}

export default memo(List)
