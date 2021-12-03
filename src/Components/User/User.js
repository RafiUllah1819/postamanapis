import React , {useState} from 'react';
import styles from './User.module.css';
import { useDispatch,useSelector } from 'react-redux';
import { createUser } from '../../Redux/Action/UserAction';
import { Link} from 'react-router-dom';
import { toast } from 'react-toastify';

const User = () => {
    
    const dispatch = useDispatch()
    const token = useSelector((state)=>state.AuthReducer.token)
    const role = useSelector((state)=>state.AuthReducer.role)
    // const code = localStorage.getItem('code')
    // console.log("user code", code)

    const obj = {
    firstName : '',
    lastName : '',
    email : '',
    password : '',
    password_confirmation : '',
    userType : ''
 }

    const [state, setState] = useState(obj)
    // eslint-disable-next-line
    const [auth, setAuth] = useState(false)

    const handleSubmit = () =>{
        const {password, password_confirmation} = state; 
        if(state.firstName.length===0) error("Firstname is empty")
        if(state.lastName.length===0) error("LastName is empty")
        if(state.email.length===0) error("Email is empty")
        if(state.password.length===0) error("Password is empty")
        if(state.password_confirmation.length===0) error("confirm password is empty")
        if(state.password.length<8) error("Password length must be 8 characters")
        if(state.password_confirmation.length<8) error("confirm password length must be 8 characters")
        if(password !== password_confirmation) error("Password don't match")
        else if(state.firstName.length<1 && state.lastName.length<1 && state.email.length<1 && state.password.length<1 && state.password_confirmation.length<1 && password !== password_confirmation)
       {setAuth(true)}
        else{
            dispatch(createUser(state,token))
            // success("Record added successfullysss")
            setState(obj)
        }
    }

    const  handleKeyUP = (event) => {
         if(event.key === 'Enter')
         { 
             handleSubmit()
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
    const handleChangeUserType = (e) =>{
        console.log("userType", e.target.value);
        setState({
            ...state,
            userType : e.target.value
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
   
    return (
      <div className="container">
      <div>
            <div className={styles.formWrap}>
                <h3 className="mb-5">CREATE NEW</h3>
            <div className="form-group mb-3">
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
                onKeyPress={ handleKeyUP}
              />
             
              </div>
            <div className="form-group mb-3">
            <div className="form-group">
                <select 
                onClick = {handleChangeUserType}
                onKeyPress={ handleKeyUP}
                    className={`form-control ${styles.inputField}`} id="exampleFormControlSelect2">
                { role === "admin" &&
                 <option>manager</option>   
                }
                <option>user</option>
                </select>
            </div>   
             
              </div>
                <div className="btns d-flex flex-wrap">
               
                <button className="btn btn-success mr-3 mb-3" style={{width:'400px',height:'40px'}}
                    onClick={handleSubmit}
                    >
                        Create New Record
                    </button>

                     <button className="btn btn-primary" style={{width:['400px']}}>
                    <Link to="/users"
                    className={styles.allUser} 
                    >All Records</Link>
                    </button>
                   
                </div>
            </div>
      </div>

    </div>
    )
}

export default User
