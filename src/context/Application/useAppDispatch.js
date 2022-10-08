import {useContext} from 'react'
import {AppDispatchContext} from "./store";
export default function useAppDispatch(){
    const context=useContext(AppDispatchContext)
    return context
}
