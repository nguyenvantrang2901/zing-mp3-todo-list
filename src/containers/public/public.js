import React, { useState } from 'react'
import {Outlet} from 'react-router-dom';
import {Header, Player, SideBarLeft, SideBarRight, LoadingData} from '../../components/index';
import { useSelector } from 'react-redux';
import { Scrollbars } from 'react-custom-scrollbars-2';

const Public = () => {
  const [isShowRightSideBar, setIsShowRightSideBar] = useState(true)
  const {isLoadingData} = useSelector(state=>state.app)
  return (
    <div className='w-full relative h-screen flex flex-col bg-main-300'>
      <div className='w-full h-full flex flex-auto'>
        <div className='w-[240px] h-full flex-none border border-blue-500'>
          <SideBarLeft/>
        </div>
        <div className='relative flex-auto flex flex-col border border-pink-500'>
          {/* Ràng buộc 2 điều kiện song song thì thực hiện */}
            {isLoadingData && 
              <div className="flex items-center justify-center absolute top-0 bottom-0 left-0 right-0 z-20 bg-main-200">
                <LoadingData/>
              </div>
            }
            <div className='h-[70px] flex-none px-[59px] flex items-center'>
              <Header/>
            </div>
            <div className='flex-auto w-full'>
              <Scrollbars autoHide style={{ width: "100%", height: "100%" }}>
                <Outlet/>
              </Scrollbars>
            </div>
            <div className='w-full h-[100px]'></div>
        </div>
        {
          //Khi click btn ở bên Player(ds phát) sẽ ẩn hiển cả SideBar
          isShowRightSideBar && 
            <div className='w-[329px] flex-none border border-gray-500 hidden 1600:flex animate-slide-left'>
              <SideBarRight/>
            </div>
        }
      </div>

      <div className='z-50 fixed bottom-0 left-0 right-0 h-[90px]'>
      {/* Truyển props xuống để lấy đc dữ liệu bên player.js để ẩn hiện thanh RightBar*/}
        <Player setIsShowRightSideBar={setIsShowRightSideBar}/>
      </div>

    </div>
  )
}

export default Public;