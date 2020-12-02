// import { templateService } from '@/services/template.service.js'
import userService from '@/services/user.service.js'
import { webService } from '@/services/web.service.js'
var localLoggedinUser = null;
if (sessionStorage.user) localLoggedinUser = JSON.parse(sessionStorage.user)


export const userStore = {
    state: {
        loggedinUser: localLoggedinUser,
        userWebs: null
    },
    getters: {
        userWebs(state) {
            return state.userWebs
        },
        user(state) {
            return state.loggedinUser
        }
    },
    mutations: {
        setUser(state, { user }) {
            state.loggedinUser = user;
        },
        setUserWebs(state, { userWebs }) {
            state.userWebs = userWebs;
        },
    },
    actions: {
        async login(context, { userCred }) {
            const user = await userService.login(userCred);
            try {
                context.commit({ type: 'setUser', user })
                return user;
            } catch (err) {
                console.log('cannot login, err:', err);
            }
        },
        async loadUserWebs(context) {
            console.log('context', context);
            const userWebs = await webService.getByUserId(context.getters.user._id);
            try {
                context.commit({ type: 'setUserWebs', userWebs })
                return userWebs;
            } catch (err) {
                console.log('cannot login, err:', err);
            }
        },
        async signup(context, { userCred }) {
            const user = await userService.signup(userCred)
            try {
                context.commit({ type: 'setUser', user })
                return user;

            } catch (err) {
                console.log('cannot signup, err:', err);
            }

        },
        async logout(context) {
            await userService.logout()
            context.commit({ type: 'setUser', user: null })
        },
    }
};