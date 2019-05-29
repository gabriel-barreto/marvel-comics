import ActionTypes from "../Constants/ActionTypes";

export const loadingOn = () => ({ type: ActionTypes.loading.ON });
export const loadingOff = () => ({ type: ActionTypes.loading.OFF });
export const loadingToggle = () => ({ type: ActionTypes.loading.TOGGLE });

export const comicsAdd = payload => ({ type: ActionTypes.comics.ADD, payload });
export const comicsClean = () => ({ type: ActionTypes.comics.CLEAN });

export const resetPage = () => ({ type: ActionTypes.page.RESET });
export const setPage = page => ({ type: ActionTypes.page.SET_PAGE, page });
export const setTotal = total => ({ type: ActionTypes.page.SET_TOTAL, total });
export const setItemsPerPage = items => ({
    type: ActionTypes.page.SET_ITEMS_PER_PAGE,
    items,
});

export const yearsSet = year => ({ type: ActionTypes.years.SET_ACTIVE, year });
export const yearsSetAvaible = availableYears => ({
    type: ActionTypes.years.SET_AVAILABLE,
    availableYears,
});
