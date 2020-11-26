import axios from 'axios';


export const mapService = {
    getAddress
}

async function getAddress(term){
    const apiKey = 'AIzaSyCkBmq94RUL-VNdku46pXE3nt-_Z01Damo'
    const locations = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${term}&key=${apiKey}`)
    console.log(locations.data.results);
    
}
