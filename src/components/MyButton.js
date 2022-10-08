import {useAppActions} from "../context/Application/store";
import SecondButton from "./SecondButton";


const MyButton=()=>{
    const {setUserName}=useAppActions()
    return(
        <>
        <button onClick={()=>{
            setUserName('Yeni İsim')
        }}>İsim Değiştir</button>

            <SecondButton />

        </>
    )
}
export default  MyButton
