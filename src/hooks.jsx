import React ,{useState,useEffect } from 'react';


function Hooks() {
    const [count,setCount]=useState(0)
    const [user,setUser]=useState({})
    useEffect(()=>{
       let data=setTimeout(()=>{
           setUser({name:"Kanagu"})
       },1000)
        return clearTimeout(data)
    },[])
    // let count=4
  return (
    <div>
       <p>{"name" in user?user.name:"unknown"} </p>
  <button onClick={()=>{
        setCount(count+1)
                       }}>FetchUser Data</button>
    </div>
  );
}

export default Hooks;