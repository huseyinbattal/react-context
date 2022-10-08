import {useAppActions} from "../context/Application/store";
import {useEffect} from "react";


const SecondButton=()=>{
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setUserData(json))
    },[])
    const {setUserData}=useAppActions()
    return(
        <button onClick={()=>{
            setUserData([1,2,3,3,213,123,12,312,3,21])
        }}>Veri Değiştir</button>
    )
}
export default  SecondButton
