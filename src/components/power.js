import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const PositiveEnergy = () => {
  const power = useSelector(state => state.app)
  // console.log("Power", power)
  const navigate = useNavigate()
  return (
    <div className='px-[59px] flex flex-col mt-5'>
      <div>
        <h3 className='mt-5 mb-5 text-[20px] font-bold'>{power?.power?.title}</h3>
      </div>
      <div className='flex items-center gap-7 mb-5'>
        {
          power?.power?.items?.map(item=>(
            <div
              key={item?.encodeId}
              className='w-1/5 text-sm flex flex-col flex-auto gap-3'  
            >
              <img 
                src={item?.thumbnailM} 
                alt="avatar" 
                className='h-auto w-full rounded-lg cursor-pointer'
                onClick={()=>{
                  navigate(item?.link?.split('.')[0])
                }}
              />
              <div>{item?.sortDescription.length > 30 ? `${item?.sortDescription.slice(0,30)}...` : item?.sortDescription}</div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default PositiveEnergy