import axios from 'axios';


export const youtubeService = {
    getVids
}

async function getVids(searchTerm) {
    var res = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable=true&type=video&key=AIzaSyDUV8Bo2XWjps_p1U8b9lsVXK9wJ0MRlcg&q=${searchTerm}`)
    try {
        res = res.data.items.map(vid => {
            return {
                videoId: vid.id.videoId,
                thumbnail: vid.snippet.thumbnails.medium,
                title: vid.snippet.title,
                description: vid.snippet.description
            }
        })
        return res;
    } catch {
        console.log('error while getting from youtube videos');
    }
}


// async function getAddress(term){
//     const apiKey = 'AIzaSyCkBmq94RUL-VNdku46pXE3nt-_Z01Damo'
//     const res = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${term}&key=${apiKey}`)
//     try {
//         const { geometry, formatted_address } = res.data.results[0]
//         const location = {
//             lat: geometry.location.lat,
//             lng: geometry.location.lng,
//             address: formatted_address
//         }
//         return location
//     } catch {
//         console.log('error');
//     }

// }