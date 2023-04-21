import actionTypes from "./actionTypes";
import * as apis from '../../apis';

export const setCurSongId = (songId) => ({
    type : actionTypes.SET_CUR_SONG_ID,
    songId : songId
})

export const play = (flag) => ({
    type : actionTypes.PLAY,
    flag
})

export const playAlbum = (flag) =>({
    type : actionTypes.SET_ALBUM,
    flag
})

export const setPlaylist = (songs) =>({
    type : actionTypes.PLAY_LIST,
    songs
})

//Xử lý khi load data
export const loadingData = (flag) =>({
    type : actionTypes.LOADING_DATA,
    flag
})
// export const fetchDetailPlayList = (playListId) =>async (dispatch) => {
//     try {
//         const response = await apis.apiGetDetailPlaylist(playListId)
//         if(response?.data?.error === 0){
//             dispatch({
//                 type: actionTypes.PLAY_LIST,
//                 songs : actionTypes?.data?.data?.songs?.items
//             })
//         }

//     } catch (error) {
//         dispatch({
//             type: actionTypes?.PLAY_LIST,
//             sóng : null
//         })
//     }
// }