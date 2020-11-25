<<<<<<< HEAD
import { templateService } from '@/services/template.service.js'
import { utilService } from '@/services/util-service.js'
=======
import {utilService} from '../services/util-service.js'

var localDraftSite = {
    _id: null,
    name: null,
    previewImg: null,
    createdBy: {
        _id: null,
        username: null,
        userPicture: null
    },
    cmps: []
};
if (utilService.loadFromStorage('draft_db')) localDraftSite = utilService.loadFromStorage('draft_db')

import {templateService} from '@/services/template.service.js'
>>>>>>> 4a6423e8a618897d854e93021432f763c711ab9f

export const webStore = {
    state: {
        siteToEdit: localDraftSite,
        cmpsToShow: null
    },
    getters: {
        cmps(state) {
            return state.cmpsToShow
        },
        web(state) {
            return state.siteToEdit
        }
    },
    mutations: {
        addCmp(state, { id }) {
            const cmp = templateService.getCmpById(id)
<<<<<<< HEAD
            cmp.id = utilService.makeId()
            state.cmps.push(cmp)
        },
        removeCmp(state, { id }) {
            const idx = state.siteToEdit.cmps.findIndex(cmp => cmp.id === id)
            state.siteToEdit.cmps.splice(idx, 1)
=======
            console.log('store get cmp', cmp);
            state.siteToEdit.cmps.push(cmp)
            utilService.storeToStorage('draft_db', state.siteToEdit)
>>>>>>> 4a6423e8a618897d854e93021432f763c711ab9f
        },
        setCmpsToShow(state, { cmpType }) {
            const cmps = templateService.getCmpsByType(cmpType)
            state.cmpsToShow = cmps
        },
        updateSite(state, { site }) {
            state.siteToEdit = site
            utilService.storeToStorage('draft_db', site)
        }
    },
    actions: {

    }
};