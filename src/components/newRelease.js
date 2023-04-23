import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import SongItem from './songItem'

const NewRelease = () => {
    const {newRelease} = useSelector(state=>state.app)
    // console.log('newRelease', newRelease);
    //Để mặc định nếu 0 là Việt Nam(btn)
    //Khi click vào btn Việt Nam sẽ set là 0 và render ra list bài hát
    
    const [isActive, setIsActive] = useState(0)
    const [songs, setSongs] = useState([])
    // console.log("songs", songs)
    //Lấy dữ liệu khi click vào btn nào để render db
    // Thay đổi khi isActive thay đổi(0 và 1)
    //Khi newRelease thay đổi
    useEffect(()=>{
        // if(isActive===0){
        //     setSongs(newRelease?.items?.all)
        // }
        // else if(isActive ===1){
        //     setSongs(newRelease?.items?.vPop)
        // }
        // else {
        //     setSongs(newRelease?.items?.others)
        // }
        isActive === 0  ? setSongs(newRelease?.items?.all) : (isActive === 1 ? setSongs(newRelease?.items?.vPop) : setSongs(newRelease?.items?.others))
    },[isActive, newRelease])
  return (
    <div className='flex flex-col mt-12 px-[59px] gap-5'>
        <div className='flex items-center justify-between'>
            <h3 className='text-[20px] font-bold'>{newRelease?.title}</h3>
            <span className='text-xs'>TẤT CẢ</span>
        </div>
        <div className='flex items-center gap-5 text-xs'>
            <button 
                type='button' 
                onClick={()=>setIsActive(0)}
                className={`py-1 px-4 rounded-l-full rounded-r-full border border-gray-400 bg-transparent ${isActive === 0 && 'bg-blue-800 text-white'}`}>
                TẤT CẢ
            </button>
            <button 
                type='button' 
                onClick={()=>setIsActive(1)}
                className={`py-1 px-4 rounded-l-full rounded-r-full border border-gray-400 bg-transparent ${isActive === 1 && 'bg-blue-800 text-white'}`}>
                VIỆT NAM
            </button>
            <button 
                type='button' 
                onClick={()=>setIsActive(2)}
                className={`py-1 px-4 rounded-l-full rounded-r-full border border-gray-400 bg-transparent ${isActive === 2 && 'bg-blue-800 text-white'}`}>
                QUỐC TẾ
            </button>
        </div>
        <div className="flex flex-wrap gap-3 w-full">
            {songs?.map(item=>(
                <SongItem 
                    key={item?.encodeId}
                    title={item?.title}
                    artistsNames={item?.artistsNames}
                    thumbnail={item?.thumbnail}
                    releaseDate={item?.releaseDate}
                    link={item?.link}
                    songData = {item}
                />
            ))}
        </div>
    </div>
  )
}

export default NewRelease