import React from 'react'
import logo from '../assests/logo.png';
import { menuSideBar } from '../ultis/menu';
import {NavLink} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import path from '../ultis/path';

const notActivestyle = 'py-2 px-[25px] font-bold flex items-center gap-[10px] text-[#32323D] text-[13px]';
const activeStyle = 'py-2 px-[25px] font-bold flex items-center gap-[10px] text-[#0F7070] text-[13px]'

const SideBarLeft = () => {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col h-full bg-main-200">
      <div 
        className="w-full h-[70px] py-[15px] px-[25px] flex justify-start items-center cursor-pointer"
        onClick={()=>navigate(path.HOME)}
      >
        <img src={logo} alt="logo" className="w-[120px] h-10" />
      </div>

      <div className='flex flex-col'>
        {menuSideBar.map((item) => {
          return (
            <NavLink 
              to={item.path} 
              className={({isActive})=> isActive ? activeStyle : notActivestyle}
              key={item.path}
              end={item.end}
            >
              {item.icons}
              <span className='font-sans'>{item.text}</span>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}

export default SideBarLeft;
