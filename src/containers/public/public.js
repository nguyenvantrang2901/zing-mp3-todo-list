import React from 'react'
import {Outlet} from 'react-router-dom';
import {SideBarLeft, SideBarRight} from '../../components/index';

const Public = () => {
  return (
    <div className='w-full flex overflow-y-auto'>
      <div className='w-[240px] flex-none border border-blue-500'><SideBarLeft/></div>
      <div className='flex-auto border border-pink-500'><Outlet/></div>
      <div className='w-[329px] flex-none border border-gray-500'><SideBarRight/></div>
    </div>
  )
}

export default Public;