// import { utilService } from '../services/util-service.js'

// if (utilService.loadFromStorage('draft_db')) localDraftSite = utilService.loadFromStorage('draft_db')

import { templateService } from '@/services/template.service.js'
import userService from '@/services/user.service.js'


export const userStore = {
    state: {
        loggedinUser: null,
        templates: templateService.getTemplates()
    },
    getters: {
        templatesOfUser(state) {
            return state.templates.filter(site => site.createdBy.username === this.loggedinUser)
        }
    },
    mutations: {
        setUser(state, { user }) {
            state.loggedinUser = user;
        },
    },
    actions: {
        async login(context, { userCred }) {
            const user = await userService.login(userCred);
            context.commit({ type: 'setUser', user })
            return user;
        },
        async signup(context, { userCred }) {
            const user = await userService.signup(userCred)
            context.commit({ type: 'setUser', user })
            return user;

        },
    }
};