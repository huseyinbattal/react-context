import './App.css';
import {useAppState} from "./context/Application/store";
import MyButton from "./components/MyButton";
function App() {
    const {name,data}=useAppState()
    return (
        <div className="App">
            <header className="App-header">
                <p>{name}</p>
                <p>{JSON.stringify(data)}</p>


                <MyButton />
            </header>
        </div>
    );
}

export default App;
