import {initialState} from "./initalState";
import {SET_DATA, SET_NAME} from "./actionTypes";

export default function Reducer(state = initialState, action) {
    switch (action.type) {
        case SET_NAME:
            return {...state, name: action.payload}
        case SET_DATA: {
            return {...state, data: action.payload}
        }
        default:
            return state
    }
}
