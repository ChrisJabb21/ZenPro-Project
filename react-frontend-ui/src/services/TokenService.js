const TokenService = {

    saveUserId(userId) {
        window.localStorage.setItem('userId',1)
    },
    getUserId(){
        return window.localStorage.getItem('userId')
    },
    clearUserId(){
        window.localStorage.removeItem('userId')
    }
}

export default TokenService;