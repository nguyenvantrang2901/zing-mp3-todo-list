import React from 'react';
import {PositiveEnergy, Slider } from '../../components';
import Section from '../../components/section';
import TrendingArtist from '../../components/trending_artist';

const Home = () => {
 
  return (
    <div className='overflow-y-auto w-full'>
        <Slider/>
        <TrendingArtist/>
        <Section/>
        <PositiveEnergy/>
    </div>
  )
}

export default Home