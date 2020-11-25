import { templateService } from '@/services/template.service.js'
import { utilService } from '@/services/util-service.js'

export const webStore = {
    state: {
        siteToEdit: {
            _id: null,
            name: null,
            previewImg: null,
            createdBy: {
                _id: null,
                username: null,
                userPicture: null
            },
            cmps: []
        },
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
            cmp.id = utilService.makeId()
            state.cmps.push(cmp)
        },
        removeCmp(state, { id }) {
            const idx = state.siteToEdit.cmps.findIndex(cmp => cmp.id === id)
            state.siteToEdit.cmps.splice(idx, 1)
        },
        setCmpsToShow(state, { cmpType }) {
            const cmps = templateService.getCmpsByType(cmpType)
            state.cmpsToShow = cmps
        }
    },
    actions: {

    }
};