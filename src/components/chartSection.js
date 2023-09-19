import React, {memo, useState, useEffect} from 'react'
import bgChart2 from "../assests/bg-chart2.jpeg"
import {Line} from "react-chartjs-2"
import {Chart} from "chart.js/auto"
import { useSelector } from 'react-redux'
import icon from "../ultis/icons"
import RateSongItem from "./rateSongItem"

const ChartSection = () => {
    const {BsPlayFill} = icon
    const [data, setData] = useState(null)
    const {chart, rank} = useSelector(state=>state.app)
    console.log("rank" ,{ rank})
    const options = {
        responsive : true,
        pointRadius : 6,
        aspectRatio : 4, //độ dài x=4y
        scales:{
            y:{
                ticks : { display: false},
                grid : { borderDash: [4,4], color : "rgba(255,255, 255,0.5)"}
            },
            x : {
                ticks : { color : "white"},
                grid : { color : "transparent"}
            }
        },
        chart: {
            type: 'spline'
        },
        plugins : {
            legend : false
        }
    }
    
    useEffect(()=>{
        const labels = chart?.times?.filter(item=> +item.hour %2 ===0)?.map(item => item.hour)
        const datasets = []
        if(chart?.items) {
            for (let i=0; i<3; i++){
                datasets.push({
                    data : chart?.items[Object.keys(chart?.items)[i]]?.filter(item=> +item.hour % 2 ===0)?.map(item => item.counter),
                    borderColor : i === 0 ? "#4A90E2" : i === 1 ? "#27BD9C" : "#E35050",
                    tension : 0.2,
                    borderWidth: 2
                })
            }
            console.log({labels, datasets})
            setData({labels, datasets})
        }
    },[chart])
  return (
    <div className='mt-12 px-[59px] relative'>
        <img src={bgChart2} alt="background Chart" className='w-full max-h-[400px]'/>
        <div className='absolute top-0 bottom-0 z-20 right-[59px] left-[59px] bg-[rgba(77,34,104,0.9)]'></div>
        <div className="absolute top-0 bottom-0 z-20 right-[59px] left-[59px] p-5">
            <div className='flex'>
                <h3 className='text-2xl text-white font-bold'>#zingchart</h3>
                <h3><BsPlayFill/></h3>
            </div>
            <div className='flex gap-4 h-full p-[10px]'> 
                <div className='flex-4 h-[400px] py-[10px]'>
                    {rank?.filter((item, index)=>index<3)?.map(item=>{
                        return (
                            <RateSongItem
                                key= {item?.encodeId}
                                title= {item?.title}
                                artists = {item?.artists}
                                thumbnail = {item?.thumbnail}
                            />
                        )
                    })}
                </div>
                <div className='flex-6 max-h-[400px]'>
                    {data && <Line data={data} options = {options}/>}
                </div>
            </div>
        </div>
    </div>
  )
}

export default memo(ChartSection)