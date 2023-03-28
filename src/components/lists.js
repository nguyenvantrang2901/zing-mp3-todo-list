import React, { memo } from 'react'
import {List} from './index'
import icons from '../ultis/icons';
const {BiSortAlt2} = icons

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
        {/* <hr/> */}
        <div className='flex flex-col'>
        {songs?.map(item=>{
            return (
              <>
                <hr/>
                <List key={item.encodeId} songData={item}/>
              </>
            )
          })
        }
        </div>
    </div>
  )
}

export default memo(Lists)