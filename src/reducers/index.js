import { combineReducers } from 'redux';

const todo = (state = false, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return action.todo;
        default:
            return state;
    }
};

const reducers = combineReducers({
    todo
});

export default reducers;