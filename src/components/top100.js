import React from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

const Top100 = () => {
  const top100 = useSelector(state=>state.app)
  // console.log("top100",top100)
  const navigate = useNavigate()
  return (
    <div className='px-[59px] pt-5 flex flex-col gap-5'>
        <div>
          <div className='flex items-center text-sm justify-between '>
              <h3 className='font-bold text-[20px]'>{top100?.top100?.title}</h3>
              
          </div>
          <div className='flex gap-7 mt-5 items-center justify-center'>
            
              {top100?.top100?.items?.slice(0,5)?.map(item=>(
                <div 
                  className='w-1/5 flex flex-col flex-auto gap-3 text-sm cursor-pointer' 
                  key={item.encodeid}
                  onClick={()=>{
                    navigate(item?.link.split('.')[0])
                  }}  
                >
                  <img className='h-full rounded-lg' src={item?.thumbnailM} alt="avatar" />
                  <span className='flex flex-col'>{item?.sortDescription?.length> 30 ? `${item?.sortDescription.slice(0,30)}...` : item?.sortDescription}</span>
                </div>
              ))}
           
          </div>
        </div>
    </div>
  )
}

export default Top100