import React from 'react';
import { Slider, NewRelease } from '../../components';
import Section from '../../components/section';
import { useSelector } from 'react-redux';

const Home = () => {
  const {chill,artists,power,top100} = useSelector(state=>state.app)
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
        
        {/* <div>Album hot</div>
        <div>Radio nổi bật</div> */}
    </div>
  )
}

export default Home