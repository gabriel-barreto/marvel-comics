const initialState = {
    active: 2018,
    available: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "set_active":
            return { ...state, active: action.year };
        case "set_avaible_years":
            return { ...state, available: action.availableYears };
        default:
            return state;
    }
};
