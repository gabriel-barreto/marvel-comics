const defaultState = [];

export default (state = defaultState, action) => {
    switch (action.type) {
        case "add_comics":
            return state.concat(action.payload);
        case "clean_comics":
            return [];
        default:
            return state;
    }
};
