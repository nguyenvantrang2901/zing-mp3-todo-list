import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getArrSlider } from '../ultis/helper';
import * as actions from '../store/actions';
import { useNavigate } from 'react-router-dom';

const Slider = () => {
  const {banner} = useSelector(state=>state.app)
  // console.log(banner)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(()=>{
    const sliderElements = document.getElementsByClassName('slider-item')
    let min = 0;
    let max = 2;
    const intervalId = setInterval(()=>{
      const list = getArrSlider(min, max, sliderElements.length -1)
      for(let i=0; i<sliderElements.length; i++){

        //Delete className (css)
        sliderElements[i].classList.remove('animate-slide-right','order-last', 'z-20')
        sliderElements[i].classList.remove('animate-slide-left','order-first', 'z-10')
        sliderElements[i].classList.remove('animate-slide-left2','order-2', 'z-10')
        // Ẩn hiện Images
        if(list.some(item=>item ===i)){
          sliderElements[i].style.cssText = 'display:block'
        }else{
          sliderElements[i].style.cssText = 'display:none'
        }
      }

      //Add animation by className
      // sliderElements[max].classList.add('animate-slide-right')
      list.forEach(item=>{
        if(item === max) {
          sliderElements[item]?.classList?.add('animate-slide-right','order-last', 'z-20')
        }
        else if (item === min){
          sliderElements[item]?.classList?.add('animate-slide-left','order-last', 'z-10')
        }
        else {
          sliderElements[item]?.classList?.add('animate-slide-left1','order-last', 'z-10')
        }
      })

      min = (min === sliderElements.length - 1) ? 0 : min+1
      max = (max === sliderElements.length - 1) ? 0 : max+1
    },3000)
    return()=>{
      intervalId && clearInterval(intervalId)
    }
    // console.log(sliderElements)
  },[])
  const hanldeClickBanner = (item) => {
    // console.log(item)
    if(item?.type === 1 ){
      dispatch(actions.setCurSongId(item.encodeId))
      dispatch(actions.play(true))
    }
    else if(item?.type === 4 ){
      // console.log(item)
      const albumPath = item?.link?.split('.')[0]
      // console.log(albumPath)
      navigate(albumPath)
    }
    else {
      return null
    }
  }
  return (
    <div className='flex gap-8 w-full overflow-hidden px-[59px] pt-8'>
      {banner?.map((item, index) => (
        <img
          alt=''
          onClick={()=>hanldeClickBanner(item)}
          src={item.banner}
          key={item.encodeId}
          className={`slider-item flex-1 object-contain w-[30%] rounded-lg ${index <= 2 ? 'block' : 'hidden'}`}
        />
      ))}
    </div>
  )
}

export default Slider