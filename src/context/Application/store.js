import {createContext, useReducer} from 'react'
import appReducer from './reducer'
import {initialState} from "./initalState";
import useAppDispatch from "./useAppDispatch";
import useAppActions from "./useAppActions";
import useAppState from "./useAppState";
export const AppStateContext = createContext()
export const AppDispatchContext = createContext()


function AppProvider({children}) {
    const [state, dispatch] = useReducer(appReducer, initialState)
    return (
        <AppStateContext.Provider value={state}>
            <AppDispatchContext.Provider value={dispatch}>
                {children}
            </AppDispatchContext.Provider>
        </AppStateContext.Provider>
    )
}

export {AppProvider,useAppDispatch,useAppState,useAppActions}
