import React, { Fragment, useState } from "react"
import List from "./list"
import './App.css'
import ProctedDashboard from "./Dashboard"
import ControlledForm from "./ControlledComponent"

function App() {
 const friuts=["pineapples","grapes","orange"]
 const [name,setName]=useState("")


const greetings=React.createElement("h1",{className:"greetings"},"Hello! Devlopers")
const multipleElement= React.createElement(
  'div',
  null,
  React.createElement('h1', null, 'Hello'),
  React.createElement('p', null, 'Welcome to React!')
);

  return (
   <Fragment>
    {/* {greetings}
    {multipleElement} */}
    <ControlledForm/>
    {/* <ProctedDashboard/> */}
  </Fragment>
    
   
  )
}

export default App
