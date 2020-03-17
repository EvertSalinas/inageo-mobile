import { combineReducers } from 'redux';

const INITIAL_STATE = {
    isLoading: true,
    email: "",
    userToken: null
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'STORE_CREDENTIALS':
            return { ...state, email: action.payload }
        default:
            return state
    }
};

export default combineReducers({
    userState: userReducer,
});