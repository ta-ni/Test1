export const setVisibilityFilter = (filter) => (dispatch) => {
    dispatch({type: 'ADD_TODO', todo: filter});
};