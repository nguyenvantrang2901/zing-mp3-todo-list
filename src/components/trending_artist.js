import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const TrendingArtist = () => {
    const artists = useSelector(state=>state.app)
    // console.log("artists",artists)
    const navigate = useNavigate()
  return (
    <div className='flex flex-col px-[59px] mt-8'>
        <div>
            <h3 className="font-bold text-[20px]">
                {artists?.artists?.title}
            </h3>
        </div>
        <div className='flex mb-5 gap-5 items-center cursor-pointer'>
            {
                artists?.artists?.items?.map(item=>(
                    <div
                        className='w-1/5 gap-5 justify-center items-center' 
                        key={item?.encodeId}
                        onClick={()=>{
                            navigate(item?.link?.split('.')[0])
                        }}
                    >
                        <img className='w-full h-auto rounded-lg mt-3' src={item?.thumbnailM} alt="avatar" />
                        <span className='text-sm items-center text-gray-600'>{item?.sortDescription}</span>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default TrendingArtist