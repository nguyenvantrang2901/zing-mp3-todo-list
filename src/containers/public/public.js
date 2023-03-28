import React from 'react'
import {Outlet} from 'react-router-dom';
import {Header, Player, SideBarLeft, SideBarRight} from '../../components/index';

const Public = () => {
  return (
    <div className='w-full relative h-screen flex flex-col bg-main-300'>
      <div className='w-full h-full flex flex-auto'>
        <div className='w-[240px] h-full flex-none border border-blue-500'>
          <SideBarLeft/>
        </div>
        <div className='flex-auto border border-pink-500'>
            <div className='h-[70px] text-white px-[59px] flex items-center mb-5'>
              <Header/>
            </div>
          <Outlet/>
        </div>
        <div className='w-[329px] flex-none border border-gray-500 hidden 1600:flex animate-slide-left'>
          <SideBarRight/>
        </div>
      </div>

      <div className='fixed bottom-0 left-0 right-0 h-[90px]'>
        <Player/>
      </div>

    </div>
  )
}

export default Public;