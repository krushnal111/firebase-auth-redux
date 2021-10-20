import React,{useEffect,useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {useHistory, Link } from 'react-router-dom'
import { loginInitiate } from '../redux/action'
import './Login.css'
const Login = () => {
    const [state,setState]=useState({
        email:'',
        password:''
    })
    const {email,password}=state

    const history=useHistory()
    const {currentUser}=useSelector(state=>state.user)
    const dispatch=useDispatch()
    useEffect(()=>{
        if(currentUser){
            history.push('/')
        }

    },[currentUser,history])
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(!email && !password){
            return;
        }
        dispatch(loginInitiate(email,password))
        setState({email:"",password:""})
    }
    const handleChange=(e)=>{
        let {name,value}=e.target;
        setState({...state,[name]:value})
    }
    return (
        <div>
            <div id="logreg-forms">
            <form className="form-signin" onSubmit={handleSubmit}>
            <h1 className="h3 mb-3 font-weight-normal" style={{textAlign:"center"}}>
            Sign In
            </h1>
          
            
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
              <button className="btn btn-secondary btn-block" type="submit">
              <i className="fas fa-sign-in-alt" ></i>Sign In</button>
              <hr/>
              <p>Dont Have an account</p>
              <Link to="/register">
              <button className="btn btn-primary btn-block" type="button" id="btn-signup">
              <i className="fas fa-user-plus"></i>Sign Up
              </button>
              </Link>
            </form>
            </div>
        </div>
    )
}

export default Login
