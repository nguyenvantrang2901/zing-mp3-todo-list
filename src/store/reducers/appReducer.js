import actionTypes from "../actions/actionTypes";

const initState = {
    banner:[],
    chill : {},
    artists: {},
    power: {}
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
                
            }

        default:
            return state
    }
}

export default appReducer;
