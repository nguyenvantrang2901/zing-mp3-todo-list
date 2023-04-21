import React from 'react';
import { Slider } from '../../components';
import Section from '../../components/section';
import { useSelector } from 'react-redux';

const Home = () => {
  const {chill,artists,power,top100} = useSelector(state=>state.app)
  return (
    <div className='overflow-y-auto w-full h-full'>
        <Slider />
        <Section data={chill}/>
        <Section data={artists}/>
        <Section data={power}/>
        <Section data={top100}/>
    </div>
  )
}

export default Home