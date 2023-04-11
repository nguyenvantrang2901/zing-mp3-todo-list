import React from 'react'
import icons from '../ultis/icons';
import Search from './search';
import { useNavigate } from 'react-router-dom';

const {HiArrowNarrowLeft,HiArrowNarrowRight} = icons;

const Header = () => {
  const navigate = useNavigate();
  const handleBackHome = ()=>{
    navigate('/')
  }
  return (
    <div className='flex justify-between w-full items-center'>
        <div className='flex gap-6 w-full items-center'>
            <div className='flex gap-6 text-gray-400'>
                <span 
                  className='cursor-pointer'
                  title='Back to home'
                  onClick={handleBackHome}
                ><HiArrowNarrowLeft className='text-gray-700' size={24}/></span>
                <span><HiArrowNarrowRight size={24}/></span>
            </div>
            <div className='w-1/2'>
                <Search/>
            </div>
        </div>
        <div>
          <button className="items-center text-gray-600 justify-center bg-blue-500 border rounded-lg"> Login </button>
        </div>
    </div>
  )
}

export default Header