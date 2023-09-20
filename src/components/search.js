import React, { useEffect, useState, useRef } from 'react'
import icons from '../ultis/icons';
import { apiSearch } from '../apis';

const {BsSearch} = icons;

const Search = () => {
  const [keyword, setKeyword] = useState("")
  const inputRef = useRef()
  const handleSearch = async(e) =>{
    if(e.keyCode ===13){
      const response = await apiSearch(keyword)
      console.log(response)
    }
    setKeyword("")
    
    console.log(keyword)
  }

  return (
    <div className='w-full flex items-center'>
    <span className='flex items-center h-10 pl-4 bg-[#DDE4E4] justify-center rounded-l-[20px] text-gray-500'>
      <BsSearch size={24}/>
    </span>
      <input 
        placeholder='Tìm kiếm bài hát, nghệ sĩ, lời bài hát ...' 
        type="text" 
        className='outline-none bg-[#DDE4E4] px-4 py-2 w-full rounded-r-[20px] h-10 text-gray-500' 
        value={keyword}
        onChange={e=>setKeyword(e.target.value)}
        onKeyUp={handleSearch}
        ref={inputRef}
        />
    </div>
  )
}

export default Search