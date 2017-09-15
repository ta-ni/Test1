import { combineReducers } from 'redux';

const users = (state = false, action) => {
    switch (action.type) {
        case 'ADD_USERS':
            return action.users;
        default:
            return state;
    }
};

const isLoading = (state = false, action) => {
    switch (action.type) {
        case 'TURN_ON_LOADING':
            return true;
        case 'TURN_OFF_LOADING':
            return false;
        default:
            return state;
    }
};

const reducers = combineReducers({
    users,
    isLoading
});

export default reducers;