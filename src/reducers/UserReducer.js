import { combineReducers } from 'redux';

const INITIAL_STATE = {
    isLoading: false,
    accessToken: null,
    refreshToken: null,
    isSignout: true,
    observations: []
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'RESTORE_TOKEN':
            return {
                ...state,
                accessToken: action.payload.access,
                refreshToken: action.payload.refresh,
                isLoading: false
            }
        case 'SIGN_IN':
            return {
                ...state,
                isSignout: false,
                accessToken: action.payload.access,
                refreshToken: action.payload.refresh,
            }
        case 'SIGN_OUT':
            return INITIAL_STATE;
        default:
            return state
    };
}

export default combineReducers({
    userState: userReducer,
});