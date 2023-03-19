import icons from './icons';

const {
    MdOutlineLibraryMusic,
    TbChartDonut2,
    MdOutlineFeed,
    HiOutlineChartPie
} = icons;

export const menuSideBar = [
    {
        path:"mymusic",
        text : "Cá nhân",
        icons:<MdOutlineLibraryMusic size={24}/>
    },
    {
        path:"",
        text : "Khám phá",
        end : true,
        icons:<TbChartDonut2 size={24}/>
    },
    {
        path:"zing-chart",
        text : "#zingchat",
        icons:<HiOutlineChartPie size={24}/>
    },
    {
        path:"follow",
        text : "Theo dõi",
        icons:<MdOutlineFeed size={24}/>
    },
]