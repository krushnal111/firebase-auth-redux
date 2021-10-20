import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { logoutInitiate } from '../redux/action'
const Home = () => {
    const dispatch=useDispatch()
    const {currentUser}=useSelector(state=>state.user)
    const handleAuth=()=>{
        if(currentUser){
            dispatch(logoutInitiate())
        }
    }
    return (
        <div>
            <h2>Welcome to Our Site</h2>
            <br/>
            <button className="btn btn-danger" onClick={handleAuth}>Logout</button>
        </div>
    )
}

export default Home
