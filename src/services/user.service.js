import HttpService from './HttpService.js'

export default {
    login,
    signup,


}


async function login(userCred) {
    const user = await HttpService.post('auth/login', userCred)
    return _handleLogin(user)

}
async function signup(userCred) {
    console.log('end of the road before server');
    const user = await HttpService.post('auth/signup', userCred)
    return _handleLogin(user)
}

function _handleLogin(user) {
    sessionStorage.setItem('user', JSON.stringify(user))
    return user;
}