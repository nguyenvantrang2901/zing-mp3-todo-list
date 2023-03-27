import React from 'react'
import {Outlet} from 'react-router-dom';
import {Player, SideBarLeft, SideBarRight} from '../../components/index';

const Public = () => {
  return (
    <div className='w-full min-h-screen flex flex-col bg-main-300'>

      <div className='w-full h-full flex flex-auto'>
        <div className='w-[240px] flex-none border border-blue-500'>
          <SideBarLeft/>
        </div>
        <div className='flex-auto border border-pink-500'>
          <Outlet/>
        </div>
        <div className='w-[329px] flex-none border border-gray-500 hidden 1600:flex animate-slide-left'>
          <SideBarRight/>
        </div>
      </div>

      <div className='flex-none h-[90px]'>
        <Player/>
      </div>

    </div>
  )
}

export default Public;