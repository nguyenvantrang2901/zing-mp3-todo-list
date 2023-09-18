import React, { memo } from 'react'
import SectionItem from './sectionItem'

const Section = ({data}) => {
   
  return (
    <div className='flex flex-col mt-12 px-[59px] gap-5'>
        <div>
            <div className='flex  text-sm justify-between items-center'>
                <h3 className='font-bold text-[20px] mb-5'>{data?.title}</h3>
                {/* <span className='cursor-pointer text-xs '>TẤT CẢ</span> */}
            </div>
            <div className='items-start flex mb-5 gap-7 justify-between'>
                {data?.items?.slice(0,5)?.map(item=>(
                    <SectionItem
                        key={item?.encodeId}
                        encodeId = {item?.encodeId}
                        thumbnailM = {item?.thumbnailM}
                        link = {item?.link}
                        sortDescription = {item?.sortDescription}
                        title={item?.title}
                    />
                ))}
            </div>
        </div>
    </div>
  )
}

export default memo(Section)