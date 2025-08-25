import { BrowserRouter as Router, Routes, Route, Link, Outlet, NavLink } from "react-router";

function DashboardLayout() {
  return (
    <div>
           <h1 className="bg-amber-950 text-amber-50">Dashboard</h1>
      <nav>
        <NavLink style={({ isActive }) => ({ color: isActive ? "red" : "black" })} to="/" end>Home</NavLink>
        <NavLink  style={({ isActive }) => ({ color: isActive ? "red" : "black" })} to="profile">Profile</NavLink> |{" "}
        <NavLink  style={({ isActive }) => ({ color: isActive ? "red" : "black" })} to="settings">Settings</NavLink> |{" "}
        <NavLink  style={({ isActive }) => ({ color: isActive ? "red" : "black" })} to="analytics">Analytics</NavLink>
      </nav>
      <hr />
      <Outlet /> {/* Children get rendered here */}
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

function Home() {
  return <h2>Welcome to Home</h2>;
}

export default function Routings() {
  return (
    <Router>
      <Routes>
   
        
    
       <Route path="meta">
         <Route  element={<DashboardLayout />}>
              <Route path="/" element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
          <Route path="analytics" element={<Analytics />} />
        </Route>
       </Route>

        {/* <Route path="dashboard" element={<DashboardLayout />}>
  <Route index element={<h2>Welcome to Dashboard Overview</h2>} />
  <Route path="profile" element={<Profile />} />
  <Route path="settings" element={<Settings />} />
</Route> */}

      </Routes>
    </Router>
  );
}
