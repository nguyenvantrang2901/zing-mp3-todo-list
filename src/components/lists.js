import React, { memo } from 'react'
import {List} from './index'
import icons from '../ultis/icons';
import moment from 'moment';
const {BiSortAlt2,BsDot} = icons

const Lists = ({songs, totalDuration}) => {
  // console.log({songs, totalDuration})
  return (
    <div className='w-full flex-col flex text-xs text-gray-600'>
        <div className='flex justify-between items-center p-[10px]'>
            <span className='flex gap-3'>
              <span><BiSortAlt2 size={16}/></span>
              <span>BÀI HÁT</span>
            </span>
            <span>ALBUM</span>
            <span>THỜI GIAN</span>
        </div>
        <div className='flex flex-col'>
        {songs?.map((item, index)=>{
            return (
              <>
                <List key={item.encodeId} songData={item}/>
              </>
            )
          })
        }
        </div>
        <span className='flex gap-1 font-sans text-xs py-[10px] border-t border-[rgba(0,0,0,0.05)]'>
          <span>{`${songs?.length} bài hát`}</span>
          <span className='justify-center'><BsDot size={16}/></span>
          <span>{moment.utc(totalDuration*1000).format('hh:mm:ss')}</span>
        </span>
    </div>
  )
}

export default memo(Lists)