import React, { useEffect, } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router , Switch , Route, Redirect } from 'react-router-dom'
import SignUp from './Components/SignUP/SignUp'; 
import SignIn from './Components/SignIn/SignIn';
import Home from './Components/User/User';
import UserList from './Components/UserList/UserList';
import EditUser from './Components/EditUser/EditUser';
import Actions from './Redux/Action/auth';
import { useDispatch,useSelector } from 'react-redux';
import UserLog from './Components/UserLog/UserLog';
import UserLogList from './Components/UserLogList/UserLogList';
import EditUserLog from './Components/Edituserlog/Edituserlog';
import GetDate from './Components/GetDate/GetDate';
import 'font-awesome/css/font-awesome.min.css';
import Nav from './Components/Nav/Nav'


  function App() {
  const dispatch = useDispatch();
  const token = useSelector((state)=>state.AuthReducer.token?true:false)
  const role = useSelector((state)=>state.AuthReducer.role)
  const { initAuth } = Actions
  useEffect(()=>{
    dispatch(initAuth())
  },[]);
  
  let routes;
  if(token){
    console.log("role", role)
    if(role==='user') routes = (
    <>
    <Nav />
    <Route path="/editLog" component={EditUserLog}/>
    <Route path="/user-log" component={UserLog}/>
    <Route path="/UserLogList" component={ UserLogList}/>
    <Route path="getdate" component={GetDate}/>
    <Redirect from='/' to='/user-log'/>
    </>
    )
    else routes = (
    <>
    {/* <button className='btn btn-info' style={{display:"flex",width: '191px',height:'42px',justifyContent:'center',marginLeft:'auto',marginRight:'25px'}}
     onClick={()=>dispatch(logout())}>Logout</button> */}
     <Nav />
    <Route exact path="/users" component={UserList}/>
    <Route exact path="/home" component={Home}/>
    <Route exact path="/edit" component={EditUser}/>
    <Route exact path= "/UserLogList" component={ UserLogList}/>
    <Redirect from='/' to='/users'/>
    </>
    )
  }else{
    routes = (
    <>
    <Route exact path="/signUp" component={SignUp}/>
    <Route exact path="/SignIn" component={SignIn}/>
    <Redirect from='/' to='/SignIn'/>
    </>
    )
  }
  return (
    <div className="App">
        <Router>
          <Switch>
            {routes}
          </Switch>
        </Router>
    </div>
  );
}

export default App;
