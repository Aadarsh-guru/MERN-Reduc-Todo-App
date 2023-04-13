import axios from "axios";
import { ADD_NEW_TODO, DELETE_TODO, GET_ALL_TODOS, TOGGLE_TAB, TOGGLE_TODO, UPDATE_TODO } from "./constants";


export const addNewTodo = (data) => async (dispatch) => {
    try {
        const res = await axios.post(`/api/v1/todo/save-todo`, { todo: data })
        dispatch({ type: ADD_NEW_TODO, payload: res.data })
    } catch (error) {
        console.log('Error while calling addNewTodo Api', error.message);
    }
}

export const getAllTodos = () => async (dispatch) => {
    try {
        const res = await axios.get(`/api/v1/todo/get-todos`)
        dispatch({ type: GET_ALL_TODOS, payload: res.data })
    } catch (error) {
        console.log('Error while calling getAllTodos Api', error.message);
    }
}

export const toggleTodo = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`/api/v1/todo/todo/${id}`)
        dispatch({ type: TOGGLE_TODO, payload: res.data })
    } catch (error) {
        console.log('Error while calling toggle todo Api', error.message);
    }
}

export const updateTodo = (id, data) => async (dispatch) => {
    try {
        const res = await axios.put(`/api/v1/todo/update-todo/${id}`, { todo: data })
        dispatch({ type: UPDATE_TODO, payload: res.data })
    } catch (error) {
        console.log('Error while calling update todo Api', error.message);
    }
}

export const deleteTodo = (id) => async (dispatch) => {
    try {
        const res = await axios.delete(`/api/v1/todo/delete-todo/${id}`)
        dispatch({ type: DELETE_TODO, payload: res.data })
    } catch (error) {
        console.log('Error while calling delete todo Api', error.message);
    }
}

export const toggleTabs = (tab) => async (dispatch) => {
    try {
        dispatch({ type: TOGGLE_TAB, selected: tab })
    } catch (error) {
        console.log('Error while calling delete todo Api', error.message);
    }
}