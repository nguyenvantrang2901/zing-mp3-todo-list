import React, {useEffect} from 'react';
import { Header } from '../../components';
import * as apis from '../../apis/index';

const Home = () => {
  useEffect(()=>{
    const fetchHomeData = async()=>{
      const response = await apis.getHome()
      console.log(response)
    }
    fetchHomeData()
  },[])
  return (
    <div className='overflow-y-auto'>
      <div className='h-[70px] text-white px-[59px] flex items-center'>
        <Header/>
      </div>
    </div>
  )
}

export default Home