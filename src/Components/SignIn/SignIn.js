import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import styles from './SignIn.module.css';
import { signInFetch } from '../../Redux/Action/auth';
import { useDispatch } from 'react-redux';
const SignIn = () => {
    const dispatch = useDispatch()

    const obj = { 
        email : '', 
        password : ''
    }
    const [state, setState] = useState(obj)
    const [auth, setAuth] = useState(false)
       
    const handleSubmit = () =>{
        if( state.email.length<1 || state.password.length<1)
        {setAuth(true)}
        else{
            dispatch(signInFetch(state))
            setState(obj);
        }
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

    return (
        <div className="container">
        <div>
              <div className={styles.formWrap}>
                  <h3 className="mb-5">SIGNIN</h3>
            
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
            
                  <div className={styles.btns}>
    
                      <button className="btn btn-success d-flex"
                      onClick={handleSubmit}>
                        SignIn
                        </button>
                       <p> If don't have account
                        <Link to="/signUp">SignUp?</Link>
                      </p>
            
                  </div>
              </div>
        </div>
  
      </div>
    )
}

export default SignIn