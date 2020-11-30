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
    isEdit: true,
    cmps: []
};
if (utilService.loadFromStorage('draft_db')) localDraftSite = utilService.loadFromStorage('draft_db')

import { templateService } from '@/services/template.service.js'

export const webStore = {
    state: {
        siteToEdit: localDraftSite,
        cmpsToShow: null,
        isShowHeader: true,
        templates: templateService.getTemplates()
    },
    getters: {
        cmps(state) {
            return state.cmpsToShow
        },
        isShowHeader(state) {
            return state.isShowHeader
        },
        isEditOn(state) {
            return state.isEdit
        },
        webCmps(state) {
            return state.siteToEdit.cmps
        },
        web(state) {
            return state.siteToEdit
        },
        templates(state) {
            return state.templates
        },
    },
    mutations: {
        removeCmp(state, { id }) {
            var mainIdx = state.siteToEdit.cmps.findIndex(cmp => cmp.id === id)
            if (mainIdx < 0) {
                state.siteToEdit.cmps.forEach((cmp, idx) => {
                    var foundIdx = cmp.info.cmps.findIndex(cmp => {
                        return cmp.id === id
                    })
                    if (foundIdx > 0) {
                        console.log('found!');
                        state.siteToEdit.cmps[idx].info.cmps.splice(foundIdx, 1)
                        return
                    } else {
                        console.log('im here');
                    }
                })
            } else {
                state.siteToEdit.cmps.splice(mainIdx, 1)
                utilService.storeToStorage('draft_db', state.siteToEdit)
            }
        },
        // removeCmp(state, { idx, route }) {
        //     route.splice(idx, 1)
        //     utilService.storeToStorage('draft_db', state.siteToEdit)
        // },
        // removeCmp(state, { id }) {
        //     const idx = state.siteToEdit.cmps.findIndex(cmp => cmp.id === id)
        //     if (idx < 0) {
        //         return
        //     }
        //     state.siteToEdit.cmps.splice(idx, 1)
        //     utilService.storeToStorage('draft_db', state.siteToEdit)
        // },
        setCmpsToShow(state, { cmpType }) {
            const cmps = templateService.getCmpsByType(cmpType)
            state.cmpsToShow = cmps
        },
        updateSite(state, { site }) {
            state.siteToEdit = site
            utilService.storeToStorage('draft_db', site)
        },
        setSite(state, { site }) {
            state.siteToEdit = site
        },
        setEditMode(state, {isEditOn}){ 
            state.isEdit = isEditOn
            state.isShowMenu = isEditOn
        },
        setShowMenu(state, {isShowMenu}){ 
            state.isShowMenu = isShowMenu
        }
    },
    actions: {
        changeTempalte({ commit }, { template }) {
            const site = template
            commit({ type: 'updateSite', site })
        }
        //     removeDeepCmp(context, { id, route=context.getters.webCmps, numOfRuns=0 }) {
        //         console.log('numOfRuns', numOfRuns);
        //         var idx = route.findIndex(cmp => cmp.id === id)
        //         if (idx < 0){
        //             route.forEach(cmp => {
        //                 // route = route[0].info.cmps
        //                 idx = cmp.info.cmps.findIndex(cmp => cmp.id === id)
        //                 if (idx < 0 || cmp.info.cmps.info.cmp){

        //                 }
        //                 if (numOfRuns > 0)  route = route[numOfRuns*'.info.cmps']
        //                 console.log('route after change:', route);
        //                 context.dispatch('removeDeepCmp', {id, route, numOfRuns})
        //                 numOfRuns++
        //             })
        //         } else {
        //             console.log('found the cmp, in', route);
        //             context.commit({type: 'removeCmp', id})
        //         }
        //     },
    }
};