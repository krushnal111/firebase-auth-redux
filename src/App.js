import './App.css';
import React,{useEffect} from 'react';
import { Route,Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import UserRoute from './components/UserRoute';
import { useDispatch } from 'react-redux';
import { auth } from './firebase'; 
import { setUser } from './redux/action';
const App = () => {
 const dispatch=useDispatch()
  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
       dispatch(setUser(authUser)) 
      }
      else{
        dispatch(setUser(null))
      }
    })
  })
  return (
    <div>
      <Switch>
      <UserRoute exact path='/' component={Home}/>
      <Route path='/login' component={Login}/>
      <Route path='/register' component={Register}/>
      </Switch>
    </div>
  )
}

export default App



