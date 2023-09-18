import React from 'react';
import { Slider, NewRelease, ChartSection } from '../../components';
import Section from '../../components/section';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Home = () => {
  const {chill,artists,power,top100,weekChart,favourite} = useSelector(state=>state.app)
  // console.log("weekChart", weekChart)
  return (
    <div className='overflow-y-auto w-full h-full'>
        <Slider />
        {/* <div>Gần đây</div>
        <div>Có thể bạn muốn nghe</div>
        <div>Mới phát hành</div> */}
        <NewRelease/>
        <Section data={chill}/>
        <Section data={power}/>
        <Section data={artists}/>
        <ChartSection/>
        <Section data={top100}/>
        <div className='flex items-center px-[43px] w-full mt-12'>
          {weekChart?.map(item=>(
            <Link to={item?.link?.split('.')[0]} key={item?.link} className='flex-1 px-4'>
              <img src={item?.cover} alt="Cover" className='w-full object-cover rounded-md'/>
            </Link>
          ))}
        </div>
        
        {/* Nghệ sĩ yêu thích */}
        <div className='px-[59px] mt-12 flex flex-col gap-5'>
            <div className='flex text-sm justify-between items-center'>
                <h3 className='font-bold text-[20px] mb-5'>{favourite?.title}</h3>
                {/* <span className='cursor-pointer text-xs '>TẤT CẢ</span> */}
            </div>
            <div className='flex mx-[-16px]'>
              {favourite?.items?.filter((item,index) => index<=4).map(singer=>{
                return(
                  <div key={singer?.encodeId} className='flex-1 px-4'>
                    <img src={singer?.thumnail} alt="single" className='object-contain w-full rounded-md'/>
                    <div className='absolute bottom-[12px] flex justify-evenly pr-8 w-full '>
                      <img src={singer?.song?.singer[0]?.thumnail} alt="singer-min" className='w-[25%] object-cover rounded-md' />
                      <img src={singer?.song?.singer[1]?.thumnail} alt="singer-min" className='w-[25%] object-cover rounded-md' />
                      <img src={singer?.song?.singer[2]?.thumnail} alt="singer-min" className='w-[25%] object-cover rounded-md' />
                    </div>
                  </div>
                )
              })}
            </div>
        </div>

        {/* <div>Album hot</div>
        <div>Radio nổi bật</div> */}
    </div>
  )
}

export default Home