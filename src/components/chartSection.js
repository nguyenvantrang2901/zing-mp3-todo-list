import React, {memo, useState, useEffect, useRef} from 'react'
import bgChart2 from "../assests/bg-chart2.jpeg"
import {Line} from "react-chartjs-2"
import {Chart} from "chart.js/auto"
import { useSelector } from 'react-redux'
import icon from "../ultis/icons"
import RateSongItem from "./rateSongItem"
import _ from "lodash"
import {Link} from 'react-router-dom'
import path from "../ultis/path"

const ChartSection = () => {
    const {BsPlayFill, BsFillPlayFill} = icon
    const [data, setData] = useState(null)
    const {chart, rank} = useSelector(state=>state.app)
    // console.log("rank" ,{ rank})
    const chartRef = useRef()
    const [selected, setSelected] = useState(null)
    const [tooltipState, setTooltipState] = useState({
        opacity:0,
        top:0,
        left:0
    })
    const options = {
        responsive : true,
        pointRadius : 5,
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
        plugins : {
            legend : false,
            tooltip: {
                enabled : false,
                external : ({tooltip})=>{
                    if(!chartRef || !chartRef.current) return
                    if(tooltip.opacity === 0) {
                        if(tooltipState.opacity !== 0)
                            setTooltipState(prev=>({...prev, opacity:0}))
                        return
                    }

                    const counter  =[]
                    for(let i=0; i<3; i++){
                        counter.push({
                            data: chart?.items[Object.keys(chart?.items)[i]]?.filter(item=> +item.hour % 2 ===0)?.map(item => item.counter),
                            encodeId : Object.keys(chart?.items)[i]
                        })
                    }
                    //tìm những gtri có hover là 1 trong 12 số ở trong mỗi bài hát để hiển thị đúng tên bài đó.
                    const rs = counter.find(item=>item.data.some(number=>number === +tooltip.body[0]?.lines[0]?.replace(',','')))
                    // console.log(rs)
                    setSelected(rs.encodeId)
                    const newTooltipData = {
                        opacity:1,
                        left: tooltip.caretX,
                        top: tooltip.caretY
                    }
                    if(!_.isEqual(tooltipState, newTooltipData)) setTooltipState(newTooltipData)
                }
            }
        },
        hover: {
            mode: "dataset",
            intersect: false
        }
    }
    // console.log(selected)
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
            // console.log({labels, datasets})
            setData({labels, datasets})
        }
    },[chart])
  return (
    <div className='mt-12 px-[59px] relative max-h-[400px] rounded-md'>
        <img src={bgChart2} alt="background Chart" className='w-full max-h-[400px]'/>
        <div className='absolute top-0 bottom-0 z-20 right-[59px] left-[59px] bg-[rgba(77,34,104,0.9)] '></div>
        <div className="absolute top-0 bottom-0 z-20 right-[59px] left-[59px] p-5 flex flex-col">
            <Link to={path.ZING_CHART} className='flex gap-2 item-center'>
                <h3 className='text-2xl text-white font-bold'>#zingchart</h3>
                <span className="text-green p-2 rounded-full bg-white"><BsFillPlayFill/></span>
            </Link>
            <div className='flex gap-4 h-full p-[10px]'> 
                <div className='flex-3 h-[400px] py-[10px]'>
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
                    <Link 
                        to={path.ZING_CHART} 
                        className='font-semibold rounded-l-full rounded-r-full text-white px-4 py-2 border border-white w-fit m-auto'
                    >
                        Xem thêm
                    </Link>
                </div>
                <div className='flex-7 h-full pb-[40px] relative'>
                    {data && <Line data={data} ref={chartRef} options = {options}/>}
                    <div className='tooltip' 
                        style={{ position:"absolute" ,top: tooltipState.top, left: tooltipState.left, opacity: tooltipState.opacity}}
                    >
                        <RateSongItem
                            thumbnail = {rank?.find(i=> i.encodeId === selected)?.thumbnail}
                            // {title?.length > 20 ? `${title.slice(0,20)}...` : title}
                            title = {rank?.find(i=> i.encodeId === selected)?.title}
                            artists = {rank?.find(i=> i.encodeId === selected)?.artists}
                            sid = {rank?.find(i=> i.encodeId === selected)?.encodeId}
                            percent = {rank?.find(i=> i.encodeId === selected)?.percent}
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default memo(ChartSection)