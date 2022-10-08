import useAppDispatch from "./useAppDispatch";
import {SET_DATA, SET_NAME} from "./actionTypes";


const useAppActions = () => {
    const dispatch = useAppDispatch()
    const setUserName = (name) => {
        dispatch({type: SET_NAME, payload: name})
    }

    const setUserData = (data) => {
        dispatch({type: SET_DATA, payload: data})
    }
    const actions = {setUserName, setUserData}
    return actions
}
export default useAppActions
