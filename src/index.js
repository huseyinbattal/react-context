import React from 'react';
import * as ReactDOM from 'react-dom/client'
import App from './App';
import './index.css'
import {AppProvider} from "./context/Application/store";

const root=document.getElementById('root')
const renderer=ReactDOM.createRoot(root)

renderer.render(<AppProvider><App/></AppProvider>)

