import * as CONSTANT from '../Constants/Constanst'
import { url } from './restapi';
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
export const createUser = (state, token) => (dispatch) =>{
     console.log("action state", state)
    fetch(`${url}/users`, {
        method: 'POST',
        body: JSON.stringify(state),
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${token}`
        // Authorization: `Bearer ${accessToken} || eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8zNC4yMTAuMTI5LjE2N1wvYXBpXC9sb2dpbiIsImlhdCI6MTYzMzU5NzgwNSwiZXhwIjoxNjMzNjAxNDA1LCJuYmYiOjE2MzM1OTc4MDUsImp0aSI6InhPWUQ2bFp1Ukcyd3dlOUYiLCJzdWIiOjEzLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.EZPfPy9mXePiQSA_Gn_ffcNhCaw1oeKso9Gu5EMxZaY`
    },
    })
    .then((json)=>{
        code= json.status
        console.log("code" , code)
        localStorage.setItem('code', code)
       return json.json()
    
    })
    
    // .then((response) => dispatch(setUser(response)))
    .then((response) =>{
        if(code!==422 || code===204){  
            success("new user added")
        }else if(code===422){
            error("Invalid Email")
        }
    })
    .catch((err)=> console.log(err))
}

const setUser = (user) => {
    return {
        type : CONSTANT.SET_USER,
        payload: user
    }
}
const setUserErr = () => {
    return {
        type : CONSTANT.SET_USERErr,
       
    }
}
 
const user = {
    createUser,
    setUser, 
    setUserErr
}
export default user