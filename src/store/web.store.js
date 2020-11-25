import templateService from '@/services/template.service.js'

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
        }
    },
    actions: {

    }
};