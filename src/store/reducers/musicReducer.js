import actionTypes from "../actions/actionTypes";

const initState = {
    curSongId : null,
    isPlaying : false,
    
    // atAlbum dùng để xử lý khi type của bài hát để chuyển đổi bài hát qua lại
    atAlbum : false,
    songs: null,
}
const musicReducer = (state = initState, action) => { 
    switch (action.type) {
        case actionTypes.SET_CUR_SONG_ID:
            return {
                ...state,
                curSongId : action.songId || null
            }
        case actionTypes.PLAY:
            return {
                ...state,
                isPlaying : action.flag
            }
        case actionTypes.SET_ALBUM:
            return {
                ...state,
                atAlbum : action.flag
            }
        case actionTypes.PLAY_LIST:
            return {
                ...state,
                songs : action.songs || null
            }
        default:
            return state
    }
}

export default musicReducer;
