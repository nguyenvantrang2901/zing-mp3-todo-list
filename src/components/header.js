import React from 'react'
import icons from '../ultis/icons';
import Search from './search';
import { useNavigate } from 'react-router-dom';
import logoProfile from '../assests/logo_profile.jpg';

const {HiArrowNarrowLeft,HiArrowNarrowRight, VscDesktopDownload,FiSettings,RiVipDiamondLine} = icons;

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
        <div className='flex gap-2 items-center cursor-pointer'>
          <span className='border items-center rounded-full w-[190px] h-10 text-center p-2 gap-3 flex px-[20px] hover:text-gray-700'>
            <VscDesktopDownload size={24}/>
            <span className='text-sm font-semibold'>Tải bản Windows</span>
          </span>
          <span className=' flex border items-center rounded-full w-10 h-10 p-2'>
            <RiVipDiamondLine size={24} title='Nâng cấp VIP'/>
          </span>
          <span className='border items-center rounded-full w-10 h-10 p-2'>
            <FiSettings size={24} title='Cài đặt'/>
          </span>
          <span className='border items-center rounded-full w-10 h-10 cursor-pointer'>
            <img src={logoProfile} alt="Images-profile" className='border items-center rounded-full w-10 h-10'/>
          </span>
        </div>
    </div>
  )
}

export default Header