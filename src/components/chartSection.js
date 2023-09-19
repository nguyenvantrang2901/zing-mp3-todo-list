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
        pointRadius : 2,
        maintainAspectRatio: false,
        scales:{
            y:{
                ticks : { display: false},
                grid : { color : "rgba(255,255, 255,0.5)", drawTicks: false}, //drawTicks:là bỏ đi phần viền ở đầu mỗi hàng
                min: chart?.minScore,
                max : chart?.maxScore,

                //viền nét đứt 3 là chiều dài của nét đứt. 4 là khoảng cách giữa 2 nét đứt
                border: {dash:[3,4]} 
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
        },
        hover: {
            mode: "dataset",
            intersect: false
        }
    }
    
    useEffect(()=>{
        const labels = chart?.times?.filter(item=> +item.hour %2 ===0)?.map(item => `${item.hour}:00`)
        const datasets = []
        if(chart?.items) {
            for (let i=0; i<3; i++){
                datasets.push({
                    data : chart?.items[Object.keys(chart?.items)[i]]?.filter(item=> +item.hour % 2 ===0)?.map(item => item.counter),
                    borderColor : i === 0 ? "#4A90E2" : i === 1 ? "#27BD9C" : "#E35050",
                    tension : 0.2,
                    borderWidth: 2,
                    pointBackgroundColor: "white",
                    pointHoverRadius: 4,
                    pointBorderColor: i === 0 ? "#4A90E2" : i === 1 ? "#27BD9C" : "#E35050",
                    pointHoverBorderWidth: 4
                })
            }
            console.log({labels, datasets})
            setData({labels, datasets})
        }
    },[chart])
  return (
    <div className='mt-12 px-[59px] relative max-h-[400px]'>
        <img src={bgChart2} alt="background Chart" className='w-full max-h-[400px]'/>
        <div className='absolute top-0 bottom-0 z-20 right-[59px] left-[59px] bg-[rgba(77,34,104,0.9)]'></div>
        <div className="absolute top-0 bottom-0 z-20 right-[59px] left-[59px] p-5 flex flex-col">
            <div className='flex'>
                <h3 className='text-2xl text-white font-bold'>#zingchart</h3>
                <h3><BsPlayFill/></h3>
            </div>
            <div className='flex gap-4 h-full p-[10px]'> 
                <div className='flex-4 h-[400px] py-[10px]'>
                    {rank?.filter((item, index)=>index<3)?.map((item, index)=>{
                        return (
                            <RateSongItem
                                key= {item?.encodeId}
                                title= {item?.title}
                                artists = {item?.artists}
                                thumbnail = {item?.thumbnail}
                                sid = {item?.encodeId}
                                order = {index+1}
                                percent = {Math.round(+item?.score*100 / +chart?.totalScore)}
                            />
                        )
                    })}
                </div>
                <div className='flex-6 h-full pb-[40px]'>
                    {data && <Line data={data} options = {options}/>}
                </div>
            </div>
        </div>
    </div>
  )
}

export default memo(ChartSection)