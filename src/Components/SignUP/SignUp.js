import React ,{useState, useEffect} from 'react'
import styles from './SignUp.module.css';
import { signUpFetch } from '../../Redux/Action/auth';
import {  useDispatch } from 'react-redux';
import { Link,useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

const SignUp = () => {
    const history = useHistory()
    const  dispatch = useDispatch()
        const obj = {
            firstName : '',
            lastName : '',
            email : '',
            password : '',
            password_confirmation : '',
          
         }

        const [state, setState] = useState(obj)
        const [auth, setAuth] = useState(false)

        const handleSubmit = () =>{
            const {password,password_confirmation} = state;
            if(state.firstName.length===0) error("FirstName is empty")
            if(state.lastName.length===0) error("LastName is empty")
            if(state.email.length===0) error("Email is empty")
            if(state.password.length===0) error("Password is empty")
            if(state.password_confirmation.length===0) error("confirm Password is empty")
            if(password !== password_confirmation) error("password don't match")

            else if(state.firstName.length < 1 && state.lastName.length<1 && state.email.length<1 && state.password.length<1 && state.password_confirmation.length<1)
            {setAuth(true)}
            else{
                dispatch(signUpFetch(state))
                setState(obj);
                success("User Sign Up successfully")
            }
        }

        const handleChangeFirst = (e) =>{
        setState({
            ...state,
            firstName: e.target.value
        })
        
        }
        const handleChangeLast = (e) =>{
            setState({
                ...state,
                lastName: e.target.value
            })
        }
        const handleChangeEmail = (e) =>{
            setState({
                ...state,
                email: e.target.value
            })
        }
        const handleChangePassword = (e) =>{
            setState({
                ...state,
                password: e.target.value
            })
        }
        const handleChangeCpassword = (e) =>{
            setState({
                ...state,
                password_confirmation : e.target.value
            })
        }

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
   

    return (
        <div className="container">
          <div>
                <div className={styles.formWrap}>
                    <h3 className="mb-5">SIGNUP</h3>
                <div className="form-group mb-3" style={{position:'relative'}}>
                    <input type="text"
                    className={`form-control ${styles.inputField}`}
                    placeholder="FirstName"
                    value ={state.firstName}
                    onChange = {handleChangeFirst}
                    
                  />
     
    
                  </div>
                <div className="form-group mb-3">
                    <input type="text"
                    className={`form-control ${styles.inputField}`}
                    placeholder="LastName"
                    value ={state.lastName}
                    onChange = {handleChangeLast}
                  />
               
                  </div>
                <div className="form-group mb-3">
                    <input type="text"
                    className={`form-control ${styles.inputField}`}
                    placeholder="Email"
                    value = {state.email}
                    onChange = {handleChangeEmail}
                  />
                  
                  </div>
                <div className="form-group mb-3">
                    <input type="password"
                    className={`form-control ${styles.inputField}`}
                    placeholder="Password"
                    value = {state.password}
                    onChange = {handleChangePassword }
                  />
                 
                  </div>
                <div className="form-group mb-3">
                    <input type="password"
                    className={`form-control ${styles.inputField}`}
                    placeholder="confirm_Password"
                    value = {state.password_confirmation}
                    onChange = {handleChangeCpassword}
                  />
                  
                  </div>
        
                    <div className="btns">
                    <button className="btn btn-success mr-3 d-flex"
                        onClick={handleSubmit}
                        >
                            SignUp
                        </button>
                       
                    <p> Already have account 
                        <Link to="/SignIn">SignIn</Link>
                    </p>
                      
                    </div>
                </div>
          </div>
    
        </div>
    )
}

export default SignUp
