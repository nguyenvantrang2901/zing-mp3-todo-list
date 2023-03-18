import icons from './icons';

const {
    MdOutlineLibraryMusic,
    AiOutlineCreditCard
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
        icons:<AiOutlineCreditCard size={24}/>
    },
    {
        path:"zing-chart",
        text : "#zingchat",
        icons:<MdOutlineLibraryMusic size={24}/>
    },
    {
        path:"follow",
        text : "Theo dõi",
        icons:<AiOutlineCreditCard size={24}/>
    },
]