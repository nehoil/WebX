import HttpService from './HttpService.js'
// import { utilService } from '@/services/util-service.js'


export const webService = {
    saveWeb,
    removeWeb,
    getById,
    getByUserId
}


function saveWeb(web) {
    if (web._id) {
        return HttpService.put(`web/${web._id}`, web)
    } else {
        return HttpService.post('web', web)
    }
}

function removeWeb(webId) {
    return HttpService.delete(`web/${webId}`)
}

function getById(webId) {
    return HttpService.get(`web/${webId}`)
}

function getByUserId(userId) {
    console.log('user Id', userId);
    return HttpService.get(`web/?q=&_id=${userId}`)
}