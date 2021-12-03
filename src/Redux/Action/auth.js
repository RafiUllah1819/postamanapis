import { url } from "./restapi";
import { toast } from 'react-toastify';

let code;
let codes;
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
    .then((json) =>{
        // console.log("json" , json.status)
        codes = json.status
       return json.json()
        
    })
    
    .then((response) => {
        // console.log(response)
        if(codes===422 || codes===403){
            error("Invalid email or password")
            // console.log("invalid email status code" ,  codes)
        }else if (codes===200){
            success("login successfully")
            dispatch(setAuth(response.token,response.user.roles[0].name,response.user.id, ));
            localStorage.setItem('token',response.token);
            localStorage.setItem('role',response.user.roles[0].name)
            localStorage.setItem('userId',response.user.id)
        }
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
       console.log("json" , json.status)
       console.log("code ssssss" , code)
    return json.json()
    }
    )
   .then((json) => {
       if(code!==422 && code!==400){
           success(" User created successfully")
             history.push('/SignIn')
       }else if(code===422) 
       error("Invalid email")
        console.log(code)
    
    })
   .catch((err)=> console.log(err))
}
const setAuth = (token,role,id, code) => {
    return {
        type : "SET_AUTH",
        token,
        role,
        id,
        code
    }
}
    const initAuth = () => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    const id = localStorage.getItem('userId');
    // console.log("code aaaaa" , code)

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
