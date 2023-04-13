import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { todosReducers } from './reducers/todosReducer'
import { tabsReducers } from './reducers/tabsReducer'

const middlewere = [thunk]

const reducers = combineReducers({
    todos: todosReducers,
    currentTab: tabsReducers
})

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(...middlewere)))

