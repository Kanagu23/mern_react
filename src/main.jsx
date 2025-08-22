
import React,{ createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'

createRoot(document.getElementById('root')).render(
    // <BrowserRouter>
    // <Routes>
    //     <Route  path={"/root"} element={ <App />}/>

    // </Routes>
   
    // </BrowserRouter>
    <App />
)
