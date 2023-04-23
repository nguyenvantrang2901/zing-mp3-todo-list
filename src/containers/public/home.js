import React from 'react';
import { Slider, NewRelease } from '../../components';
import Section from '../../components/section';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Home = () => {
  const {chill,artists,power,top100,weekChart} = useSelector(state=>state.app)
  console.log("weekChart", weekChart)
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
        <Section data={top100}/>
        <div className='flex items-center px-[43px] w-full mt-12'>
          {weekChart?.map(item=>(
            <Link to={item?.link?.split('.')[0]} key={item?.link} className='flex-1 px-4'>
              <img src={item?.cover} alt="Cover" className='w-full object-cover rounded-md'/>
            </Link>
          ))}
        </div>
        {/* <div>Album hot</div>
        <div>Radio nổi bật</div> */}
    </div>
  )
}

export default Home