import { utilService } from '../services/util-service.js'

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

import { templateService } from '@/services/template.service.js'

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
            const cmpCopy = JSON.parse(JSON.stringify(cmp))
            cmpCopy.id = utilService.makeId(9)
            state.siteToEdit.cmps.push(cmpCopy)
            utilService.storeToStorage('draft_db', state.siteToEdit)
        },
        removeCmp(state, { id }) {
            const idx = state.siteToEdit.cmps.findIndex(cmp => cmp.id === id)
            if (idx < 0) return
            state.siteToEdit.cmps.splice(idx, 1)
            utilService.storeToStorage('draft_db', state.siteToEdit)
        },
        setCmpsToShow(state, { cmpType }) {
            const cmps = templateService.getCmpsByName(cmpType)
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