import { AUTH_ACTIONS_TYPE } from "@/domains/actions/auth.action";
import { AuthType } from "@/domains/types/auth.type";
import { AuthActionTypeable } from "@/domains/interfaces/auth.interface";

const authReducer = (state: AuthType, action: AuthActionTypeable) => {
    if(action.type === AUTH_ACTIONS_TYPE.LOGIN) {
        return {...state}
    }

    if(action.type === AUTH_ACTIONS_TYPE.LOGOUT) {
        return {...state}
    }

    if(action.type === AUTH_ACTIONS_TYPE.REGISTER) {
        return {...state}
    }

    if(action.type === AUTH_ACTIONS_TYPE.SET_USER) {
        return {...state}
    }

    if(action.type === AUTH_ACTIONS_TYPE.SET_LOADING) {
        return {...state}
    }

    if(action.type === AUTH_ACTIONS_TYPE.SET_IS_INITIALIZED) {
        return {...state}
    }

    return state
}

export { authReducer }