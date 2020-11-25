import utilService from '@/services/util-service.js'

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

import templateService from '@/services/template.service.js'
import { util } from 'prettier';

export const webStore = {
    state: {
        siteToEdit: localDraftSite,
        cmpsToShow: null
    },
    getters: {
        cmps(state){
            return state.cmpsToShow
        },
        web(state){
            return state.siteToEdit
        }
    },
    mutations: {
        addCmp(state, { id }) {
            const cmp = templateService.getCmpById(id)
            state.siteToEdit.cmps.push(cmp)
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