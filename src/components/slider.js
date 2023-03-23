import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import { getArrSlider } from '../ultis/helper';

const Slider = () => {
  const {banner} = useSelector(state=>state.app)
  // console.log(banner)
  useEffect(()=>{
    const sliderElements = document.getElementsByClassName('slider-item')
    let min = 0;
    let max = 2;
    const intervalId = setInterval(()=>{
      const list = getArrSlider(min, max, sliderElements.length -1)
      for(let i=0; i<sliderElements.length; i++){
        if(list.some(item=>item ===i)){
          sliderElements[i].style.cssText = 'display:block'
        }else{
          sliderElements[i].style.cssText = 'display:none'
        }
      }
      if(min === sliderElements.length - 1){
        min = 0
      }else{
        min += 1
      }
      if(max === sliderElements.length - 1){
        max = 0
      }else{
        max += 1
      }
      console.log(list)
    },1000)
    console.log(sliderElements)
  },[])
  return (
    <div className='flex gap-4 w-full overflow-hidden px-[59px] pt-8'>
      {banner?.map(item => (
        <img
          src={item.banner}
          key={item.encodeId}
          className="slider-item flex-1 object-contain w-1/3 rounded-lg"
        />
      ))}
    </div>
  )
}

export default Slider