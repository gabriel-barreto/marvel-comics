export default (state = false, action) => {
    switch (action.type) {
        case "toggle":
            return !state;
        case "set_off":
            return false;
        case "set_on":
            return true;
        default:
            return state;
    }
};
