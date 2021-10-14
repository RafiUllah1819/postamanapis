import React ,{useState, useEffect} from 'react'
import styles from './SignUp.module.css';
import { signUpFetch } from '../../Redux/Action/auth';
import {  useDispatch } from 'react-redux';
import { Link,useHistory } from 'react-router-dom';


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
            if(state.firstName.length < 1 || state.lastName.length<1 || state.email.length<1 || state.password.length<1 || state.password_confirmation.length<1)
            {setAuth(true)}
            else{
                dispatch(signUpFetch(state,history))
                setState(obj);
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
     
                   {auth && state.firstName === '' ? <span style={{color:'red'}}>please enter firstName </span>: null}
                  </div>
                <div className="form-group mb-3">
                    <input type="text"
                    className={`form-control ${styles.inputField}`}
                    placeholder="LastName"
                    value ={state.lastName}
                    onChange = {handleChangeLast}
                  />
                   {auth && state.lastName === '' ? <span style={{color:'red'}}>please enter lastName </span>: null}
                  </div>
                <div className="form-group mb-3">
                    <input type="text"
                    className={`form-control ${styles.inputField}`}
                    placeholder="Email"
                    value = {state.email}
                    onChange = {handleChangeEmail}
                  />
                   {auth && state.email === '' ? <span style={{color:'red'}}>please enter email </span>: null}
                  </div>
                <div className="form-group mb-3">
                    <input type="password"
                    className={`form-control ${styles.inputField}`}
                    placeholder="Password"
                    value = {state.password}
                    onChange = {handleChangePassword }
                  />
                  {auth && state.password === '' ? <span style={{color:'red'}}>please enter password </span>: null}
                  </div>
                <div className="form-group mb-3">
                    <input type="password"
                    className={`form-control ${styles.inputField}`}
                    placeholder="confirm_Password"
                    value = {state.password_confirmation}
                    onChange = {handleChangeCpassword}
                  />
                   {auth && state.password_confirmation === '' ? <span style={{color:'red'}}>please enter password </span>: null}
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
