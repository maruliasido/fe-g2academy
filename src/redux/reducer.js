const defaultState = {
    statusLogin: false,
    token: ""
}
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "LOGIN_OK":
            return {
                statusLogin: true,
                token: action.payload
            }
        default:
            return state

    }
}

export default reducer