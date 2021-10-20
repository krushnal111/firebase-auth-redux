import React,{useEffect,useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {useHistory, Link } from 'react-router-dom'
import {registerInitiate} from '../redux/action'
import './Register.css'
const Register = () => {
    const [state,setState]=useState({
        displayName:'',
        email:'',
        password:'',
        passwordConfirm:'',
    })
    const {currentUser}=useSelector(state=>state.user)
    const dispatch=useDispatch()
    const history=useHistory()
    useEffect(()=>{
        if(currentUser){
            history.push('/')
        }
    },[currentUser,history])
    const {displayName,email,password,passwordConfirm}=state
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(password !== passwordConfirm){
            return;
        }
        dispatch(registerInitiate(email,password))
        setState({displayName:'',email:'',password:'',passwordConfirm:''})
    }
    const handleChange=(e)=>{
        let {name,value}=e.target;
        setState({...state,[name]:value})
    }
    return (
        <div>
            <div id="register-form">
            <form className="form-signup" onSubmit={handleSubmit}>
            <h1 className="h3 mb-3 font-weight-normal" style={{textAlign:"center"}}>
            Sign Up
            </h1>
            <input
             type="text"
             id="displayName"
             className="form-control"
             placeholder="Full-Name"
             name="displayName"
             value={displayName}
             onChange={handleChange}
              />
            <input
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={handleChange}
             />
             <input
             type="password"
             id="inputPassword"
             className="form-control"
             placeholder="Password"
             name="password"
             value={password}
             onChange={handleChange}
              />
              
              <input
             type="password"
             id="passwordConfirm"
             className="form-control"
             placeholder="Confirm Password"
             name="passwordConfirm"
             value={passwordConfirm}
             onChange={handleChange}
              />
              
              <button className="btn btn-primary btn-block" type="submit">
              <i className="fas fa-user-plus" ></i>Sign Up</button>
             
            
              <Link to="/">
              <i className="fas fa-angle-left"></i>Back
              </Link>
            </form>
            </div>
        </div>
    )
}

export default Register
