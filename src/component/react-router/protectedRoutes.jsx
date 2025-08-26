import { BrowserRouter, Routes, Route, Navigate, Link, useNavigate, Outlet, NavLink } from "react-router";
import { useEffect, useState } from "react";

function Home() {
  return <h1>Home Page</h1>;
}

function Dashboard() {
  return <h1>Dashboard (Protected)</h1>;
}

function Login({ onLogin }) {
  return (
    <div>
      <h1>Login Page</h1>
      <button 
        className="bg-blue-500 text-white px-4 py-2 rounded" 
        onClick={onLogin}
      >
        Log In
      </button>
    </div>
  );
}

function Profile() {
  return <h2>Profile Page</h2>;
}

function Settings() {
  return <h2>Settings Page</h2>;
}

function Analytics() {
  return <h2>Analytics Page</h2>;
}

// ProtectedRoute wrapper
function ProtectedRoute({ isLoggedIn, children }) {
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet/>;
}

export default function SecureRoutes() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate=useNavigate()
// useEffect(()=>{
//     isLoggedIn &&
// },[isLoggedIn])
  return (
    <BrowserRouter>
      <nav className="p-4 flex gap-4 bg-gray-200">
        <NavLink style={({ isActive }) => ({ color: isActive ? "red" : "black" })}  to="/">Home</NavLink>|{" "}
        <NavLink style={({ isActive }) => ({ color: isActive ? "red" : "black" })}  to="/dashboard">Dashboard</NavLink>|{" "}
        
        <NavLink  style={({ isActive }) => ({ color: isActive ? "red" : "black" })} to="profile">Profile</NavLink> |{" "}
        <NavLink  style={({ isActive }) => ({ color: isActive ? "red" : "black" })} to="settings">Settings</NavLink> |{" "}
        <NavLink  style={({ isActive }) => ({ color: isActive ? "red" : "black" })} to="analytics">Analytics</NavLink>|{" "}
        <NavLink to="/login">Login</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />

        {/* Protected Route */}
        {/* <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Dashboard />
            </ProtectedRoute>
          } 
        /> */}
        
        <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
          <Route path="analytics" element={<Analytics />} />
           {/* <Route element={<AdminRoute userRole={{isAdmin:true}} />}>
              <Route path="createUser" element={<Analytics />} />
           
           
           </Route> */}
        </Route>


        {/* Login Route */}
        <Route 
          path="/login" 
          element={<Login onLogin={() => {
            setIsLoggedIn(true)
          }} />} 
        />

        {/* 404 Fallback */}
        <Route path="/*" element={<h1> 404 - Page Not Found</h1>} />
        <Route path="root/*" element={<h1>ROOT: 404 - Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
