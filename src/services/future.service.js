import HttpService from './HttpService'

import axios from 'axios'

// const baseUrl = (process.env.NODE_ENV !== 'development')
//     ? '/api/toy'
//     : '//localhost:3030/api/toy';

// import axios from 'axios'


export const toyService = {
    query,
    getEmpty,
    getById,
    save,
    remove,
    uploadImg
}

function getEmpty() {
    return {
        _id: null,
        name: null,
        price: null,
        type: null,
        createdAt: null,
        inStock: null
    }
}


async function query(filter = { term: null, inStock: null, toyType: null }) {
    const { term, inStock, toyType } = filter
    var queryURL = '?q='
    term ? queryURL += `&term=${term}` : ''
    toyType ? queryURL += `&toyType=${toyType}` : ''
    if (inStock !== 'all') {
        queryURL += `&inStock=${inStock}`
    }
    console.log(filter);
    return HttpService.get(`toy${queryURL}`)
    // try {
    //     var res = await axios.get(queryURL)
    //     return res.data
    // } catch (err) {
    //     console.log(`Had issues getting from server`, err)
    //     throw err;
    // }
}

async function getById(toyId) {
    return HttpService.get(`toy/${toyId}`)
}

function remove(toyId) {
    return HttpService.delete(`toy/${toyId}`)
}

async function save(toy) {
    if (!toy._id) {
        toy.createdAt = Date.now();
        return HttpService.post('toy', toy)
    }
    return HttpService.put(`toy/${toy._id}`, toy)
}

async function uploadImg(ev) {
    const UPLOAD_PRESET = 'dbyshdqg' // Insert yours
    const CLOUD_NAME = 'neoil' // Insert yours
    const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`
    const FORM_DATA = new FormData();
    // Building the request body
    FORM_DATA.append('file', ev.target.files[0])
    FORM_DATA.append('upload_preset', UPLOAD_PRESET)
    // Sending a post method request to Cloudniarys' API
    try {
        const res = await axios.post(UPLOAD_URL, FORM_DATA)
        return res.data;
    } catch (err) {
        console.error('ERROR!', err)
    }
}