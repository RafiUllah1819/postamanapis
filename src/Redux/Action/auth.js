import { url } from "./restapi";
import { toast } from 'react-toastify';

let code;
const error = (msg) => {
    toast.error(msg,{
     position: "top-right",
     autoClose: 5000,
     hideProgressBar: false,
     closeOnClick: true,
     pauseOnHover: true,
     draggable: true,
     progress: undefined,
    })
  }
  const success = (msg) => {
    toast.success(msg,{
     position: "top-right",
     autoClose: 5000,
     hideProgressBar: false,
     closeOnClick: true,
     pauseOnHover: true,
     draggable: true,
     progress: undefined,
    })
  }

export const signInFetch = (state) => (dispatch) =>{
    
    fetch(`${url}/login`, {
        method: 'POST',
        body: JSON.stringify(state),
        headers: {
        'Content-type': 'application/json; charset=UTF-8'
     },
    })
    .then((json) => json.json())
    .then((response) => {
        dispatch(setAuth(response.token,response.user.roles[0].name,response.user.id));
        localStorage.setItem('token',response.token);
        localStorage.setItem('role',response.user.roles[0].name)
        localStorage.setItem('userId',response.user.id)
    })
    .catch((err)=> console.log(err))
}
    export const signUpFetch = (state,history) => (dispatch) =>{
      
       fetch(`${url}/register`, {
       method: 'POST',
       body: JSON.stringify(state),
       headers: {
       'Content-type': 'application/json; charset=UTF-8',
        },
   })
   .then((json) =>{ 
    code = json.status   
    json.json()
    }
    )
   .then((json) => {
       if(code!==422 && code!==400){
           success(" User created successfully")
       }else{
           error("Email is already taken")
       }
    //    history.push('/SignIn')
    })
   .catch((err)=> console.log(err))
}
const setAuth = (token,role,id) => {
    return {
        type : "SET_AUTH",
        token,
        role,
        id
    }
}
    const initAuth = () => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    const id = localStorage.getItem('userId');

    return {
        type : "INIT_AUTH",
        token:token==='undefined'?undefined:token,
        role:role==='undefined'?undefined:role,
        userId:id==='undefined'?undefined:id,
    }
}
export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('userId');
    return {
        type : "INIT_AUTH",
        token:undefined,
        role:undefined,
        userId:undefined

    }
}

const logger = {
    signInFetch,
    signUpFetch,
    initAuth,
    logout
}
export default logger
