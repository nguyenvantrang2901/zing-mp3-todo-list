import axios from '../axios';
export const getSong = (songId)=> new Promise( async (resolve, reject) =>{
    try {
        const res = await axios({
            url:"song",
            method:"get",
            params: { id: songId}
        })
        resolve(res)
    } catch (error) {
        reject(error)
    }
})

export const getInfoSong = (songId)=> new Promise( async (resolve, reject) =>{
    try {
        const res = await axios({
            url:"infosong",
            method:"get",
            params: { id: songId}
        })
        resolve(res)
    } catch (error) {
        reject(error)
    }
})