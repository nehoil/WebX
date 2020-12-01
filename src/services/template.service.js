// import { utilService } from '@/services/util-service.js'


const gTemplates = [
]


const gCmps = [
]


// Templates

import { savedTemplates } from '../services/templates/saved.templates.js'
import { nehoTemplates } from '../services/templates/neho.templates.js'
import { roeeTemplates } from '../services/templates/roee.templates.js'
import { haleliTemplates } from '../services/templates/haleli.templates.js'



gTemplates.push(...nehoTemplates, ...savedTemplates, ...roeeTemplates, ...haleliTemplates)


// Cmps

import { savedCmps } from '../services/cmps/saved.cmps.js'
import { nehoCmps } from '../services/cmps/neho.cmps.js'
import { roeeCmps } from '../services/cmps/roee.cmps.js'
import { haleliCmps } from '../services/cmps/haleli.cmps.js'

gCmps.push(...nehoCmps, ...savedCmps, ...roeeCmps, ...haleliCmps)

import HttpService from './HttpService.js'


export const templateService = {
    getEmptyTemplate,
    getCmpsByType,
    getTemplateById,
    getCmpById,
    getTemplates,
    getTemplateByIdAsync,
    addTemplate
}

function getTemplates() {
    return gTemplates
}

function getEmptyTemplate() {
    return {
        _id: null,
        name: null,
        previewImg: null,
        createdBy: {
            _id: null,
            username: null,
            userPicture: null
        },
        cmps: []
    }
}


function getCmpsByType(name) {
    return gCmps.filter(cmps => cmps.name === name)
}

function getTemplateById(id) {
    console.log('gtempaltes', gTemplates, id);
    return gTemplates.find(template => template._id === id)
}
async function getTemplateByIdAsync(id) {
    return gTemplates.find(template => template._id === id)
}

function getCmpById(id) {
    return gCmps.find(cmp => cmp.id === id)
}

function addTemplate(template) {
    console.log(template);
    return HttpService.post(`template`, template)
}