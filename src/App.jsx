import React, { Fragment, useContext, useState } from "react"
import List from "./list"
// import './App.css'
import ProctedDashboard from "./Dashboard"
import { ThemeContext, ThemeProvider } from './contexts/ThemeContext';
import ThemedComponent from './component/ThemedComponent';
import ControlledForm from "./ControlledComponent"
import Hooks from "./hooks"
import Card from "./component/Card";
import ExpensiveComponent from "./component/UseMemo";
import { UseCallback } from "./component/UseCallback";
import CounterComponent from "./component/Counter";

function App() {
 const friuts=["pineapples","grapes","orange"]

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
    {/* <ControlledForm/> */}
    {/* <ProctedDashboard/> */}
    {/* <Hooks/> */}

    <ThemeProvider>
      <ThemedComponent />
       {/* <Card
        title="Inline CSS Card"
        description="This card is styled entirely using inline styles in React."
        image="https://picsum.photos/400/300"
      /> */}
    </ThemeProvider>
    <CounterComponent/>
    {/* <UseCallback/> */}
{/* <ExpensiveComponent/> */}
  </Fragment>
    
   
  )
}

export default App
