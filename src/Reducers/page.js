const defaultState = {
    total: 1,
    itemsPerPage: 50,
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case "set_itensperpage":
            return { ...defaultState, itemsPerPage: action.items };
        case "set_total":
            return { ...defaultState, total: action.total };
        case "reset":
            return defaultState;
        default:
            return state;
    }
};
