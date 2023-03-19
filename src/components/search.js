import React from 'react'
import icons from '../ultis/icons';

const {BsSearch} = icons;

const Search = () => {
  return (
    <div className='w-full flex items-center'>
    <span className='flex items-center h-10 pl-4 bg-[#DDE4E4] justify-center rounded-l-[20px] text-gray-500'>
      <BsSearch size={24}/>
    </span>
      <input 
        placeholder='Tìm kiếm bài hát, nghệ sĩ, lời bài hát ...' 
        type="text" 
        className='outline-none bg-[#DDE4E4] px-4 py-2 w-full rounded-r-[20px] h-10 text-gray-500' 
        
        />
    </div>
  )
}

export default Search