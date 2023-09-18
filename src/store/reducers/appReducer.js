import actionTypes from "../actions/actionTypes";

const initState = {
    banner:[],
    chill : {},
    artists: {},
    power: {},
    top100 : {},
    isLoadingData:false,
    newRelease:{},
    weekChart : [],
    favourite : {}

}
const appReducer = (state = initState, action) => { 
    switch (action.type) {
        case actionTypes.GET_HOME:
            // console.log(action)
            return {
                ...state,
                banner: action.homeData?.find(item=>item.sectionId === "hSlider")?.items || null,
                chill: action.homeData?.find(item=>item.sectionId === "hEditorTheme") || {},
                artists: action.homeData?.find(item=>item.sectionId === "hArtistTheme") || {},
                power: action.homeData?.find(item=>item.sectionId === "hEditorTheme2") || {},
                newRelease: action.homeData?.find(item=>item.sectionType === "new-release") || {},
                top100: action.homeData?.find(item=>item.sectionId === "h100") || {},
                weekChart: action.homeData?.find(item=>item.sectionType === "weekChart")?.items || [],
                favourite: action.homeData?.find(item=>item.sectionId === "hMix") || {},
                
            }
        case actionTypes.LOADING_DATA:
            return {
                ...state,
                isLoadingData: action.flag
            }
        default:
            return state
    }
}

export default appReducer;
