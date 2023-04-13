import { ALL_TODOS, TOGGLE_TAB } from "../actions/constants";



export const tabsReducers = (state = ALL_TODOS, action) => {
    switch (action.type) {
        case TOGGLE_TAB:
            return action.selected
        default:
            return state
    }
}