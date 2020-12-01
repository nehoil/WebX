import HttpService from './HttpService.js'
import { utilService } from '@/services/util-service.js'


export const webService = {
    saveTemplate
}


function saveTemplate(template) {
    if (template._id) {
        return HttpService.put(`template/${template._id}`, template)
    } else {
        template._id = utilService.makeId(11)
        return HttpService.post(`template`, template)
    }
}