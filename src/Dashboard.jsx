import PrivateComponent from "./privateComponent"

const DashBoard=({isUserLogged})=>{
return isUserLogged?<h1>Hi! Welcome</h1>:<h1>Please Login</h1>
}
const ProctedDashboard=PrivateComponent(DashBoard)
export default ProctedDashboard