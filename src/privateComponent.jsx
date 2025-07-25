const PrivateComponent=(WrappedComponent)=>{
    const isUserLogged=false
    return (props)=>{
        return <WrappedComponent {...props} isUserLogged={isUserLogged}/>
    }

}
export default PrivateComponent