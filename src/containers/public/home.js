import React from 'react';
import { Slider, Top100 } from '../../components';
import Section from '../../components/section';
import TrendingArtist from '../../components/trending_artist';
import PositiveEnergy from '../../components/power';

const Home = () => {
 
  return (
    <div className='overflow-y-auto w-full h-full'>
        <Slider/>
        <TrendingArtist/>
        <Section/>
        <PositiveEnergy/>
        <Top100/>
    </div>
  )
}

export default Home