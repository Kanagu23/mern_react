// import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useParams, Link } from "react-router";
// Home page
function Home() {
  return <h2>🏠 Welcome to the Home Page</h2>;
}

// About page
function About() {
  return <h2>ℹ️ About Us</h2>;
}

// Dynamic user page
function User() {
  const { userid } = useParams();
  const [user,setUser]=useState()
  useEffect(()=>{
    fetch(`https://dummyjson.com/users/${userid}`).then((res)=>res.json()).then((data)=>{
      setUser(data)
    })
  },[userid])
  return <>
  <h2>👤 User Profile:{userid}</h2>
  {user?<h5>{user.firstName} {user.lastName}</h5>:"loading..."}
  </>;
}

// App with routing
export default function RouterExample() {
  return (
    <BrowserRouter>
      <nav className="p-4 bg-gray-200 flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/user/123">User 123</Link>
        <Link to="/user/124">User 124</Link>
        <Link to="/user/125">User 125</Link>
        <Link to="/user/126">User 126</Link>
        <Link to="/user/127">User 127</Link>
      </nav>

      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
            {/* <Route path="/user" element={<User />} /> */}
          <Route path="/user/:userid" element={<User />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
