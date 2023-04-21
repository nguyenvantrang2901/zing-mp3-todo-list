import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'

const Section = ({data}) => {
    const navigate = useNavigate()
    // console.log("data",data)
  return (
    <div className='flex flex-col mt-12 px-[59px] gap-5'>
        <div>
            <div className='flex  text-sm justify-between items-center'>
                <h3 className='font-bold text-[20px] mb-5'>{data?.title}</h3>
                {/* <span className='cursor-pointer text-xs '>TẤT CẢ</span> */}
            </div>
            <div className='flex mb-5 gap-7 items-center justify-between'>
                {data?.items?.slice(0,5)?.map(item=>(
                    <div 
                        key={item.encodeId}
                        className='w-1/5 text-sm flex flex-auto flex-col gap-3 cursor-pointer'
                        onClick={()=>{
                            navigate(item?.link?.split('.')[0])
                        }}
                    >
                        <img className='h-auto w-full rounded-lg' src={item?.thumbnailM} alt="avatar" />
                        <span className='flex flex-col'>
                            <span>{item?.sortDescription.length> 40 ? `${item?.sortDescription.slice(0,40)}...` : item?.sortDescription }</span>
                        </span>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default memo(Section)