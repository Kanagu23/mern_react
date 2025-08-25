import React, { Fragment, useContext, useState } from "react"
import List from "./list"
import './App.css'
import ProctedDashboard from "./Dashboard"
import { ThemeContext, ThemeProvider } from './contexts/ThemeContext';
import ThemedComponent from './component/ThemedComponent';
import ControlledForm from "./ControlledComponent"
import Hooks from "./hooks"
import Card from "./component/Card";
import ExpensiveComponent from "./component/UseMemo";
import { UseCallbackComponent } from "./component/UseCallback";
import CounterComponent from "./component/Counter";
import FormWithValidation from "./component/FormWithValidation";
import { ModuleCss } from "./component/cssModules/ModuleCss";
import StyledComponent, { StyledButton } from "./component/styledComponent";
import EventPropagation from "./component/events/EventPropagation";
import AllEvents from "./component/events/AllEvents";
import { DragNDrop } from "./component/events/DragNDrop";
import DragAndDropPreview from "./component/events/DragAndDropPreview";
import FetchComponent from "./component/DataFetch/fetch";
import AxiosComponent from "./component/DataFetch/axios";
import RouterExample from "./component/react-router/router";
import { BrowserRouter } from "react-router";
import Routings from "./component/react-router/routings";

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

    {/* <ThemeProvider>
      <ThemedComponent />
       <Card
        title="Inline CSS Card"
        description="This card is styled entirely using inline styles in React."
        image="https://picsum.photos/400/300"
      />
    </ThemeProvider> */}
    {/* <CounterComponent/> */}
    {/* <UseCallback/> */}
{/* <ExpensiveComponent/> */}

{/* 29-07-2025 */}
{/* <FormWithValidation/>
<ModuleCss/>
<StyledComponent/>
<StyledButton>Hi</StyledButton> */}

{/* 30-07-2025 */}

{/* <StyledComponent/> */}
{/* 31-07-2025 */}
{/* <EventPropagation/> */}
{/* <AllEvents/> */}
{/* <DragNDrop/> */}
{/* <DragAndDropPreview/> */}

{/* 21-08-2025 */}
{/* <FetchComponent/> */}
{/* <AxiosComponent/>
<h1 class="text-3xl font-bold underline">
    Hello world!
  </h1> */}

  {/* <RouterExample/> */}
  {/* 25-08-2025 */}
  <Routings/>
  </Fragment>
    
   
  )
}

export default App
