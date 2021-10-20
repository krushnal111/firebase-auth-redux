import * as types from './actionType'
import {auth} from "../firebase"
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut } from 'firebase/auth'
const registerStart=()=>({
    type:types.REGISTER_START,
})
const registerSuccess=(user)=>({
    type:types.REGISTER_SUCCESS,
    payload:user,
})
const registerFail=(error)=>({
    type:types.REGISTER_FAIL,
    payload:error,
})
const loginStart=()=>({
    type:types.LOGIN_START,
})
const loginSuccess=(user)=>({
    type:types.LOGIN_SUCCESS,
    payload:user,
})
const loginFail=(error)=>({
    type:types.LOGIN_FAIL,
    payload:error,
})

const logoutStart=()=>({
    type:types.LOGOUT_START,
})
const logoutSuccess=(user)=>({
    type:types.LOGOUT_SUCCESS,
})
const logoutFail=(error)=>({
    type:types.LOGOUT_FAIL,
    payload:error,
})
export const setUser =(user)=>({
    type:types.SET_USERS,
    payload:user,  
})
export const registerInitiate=(email,password)=>{
    return (dispatch)=>{
        dispatch(registerStart())
       createUserWithEmailAndPassword(auth, email,password).then(({user})=>{
           dispatch(registerSuccess(user))
       })
       .catch((error)=>dispatch(registerFail(error.message)))
    }
}

export const loginInitiate=(email,password)=>{
    return (dispatch)=>{
        dispatch(loginStart())
        signInWithEmailAndPassword(auth, email,password).then(({user})=>{
           dispatch(loginSuccess(user))
       })
       .catch((error)=>dispatch(loginFail(error.message)))
    }
}
export const logoutInitiate=()=>{
    return (dispatch)=>{
        dispatch(logoutStart())
        signOut(auth).then((resp)=>{
           dispatch(logoutSuccess())
       })
       .catch((error)=>dispatch(logoutFail(error.message)))
    }
}