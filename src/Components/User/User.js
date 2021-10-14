import React , {useState} from 'react';
import styles from './User.module.css';
import { useDispatch,useSelector } from 'react-redux';
import { createUser } from '../../Redux/Action/UserAction';
import { Link, useHistory } from 'react-router-dom';


const User = () => {
    
    const dispatch = useDispatch()
    const history = useHistory()
    const token = useSelector((state)=>state.AuthReducer.token)
    const role = useSelector((state)=>state.AuthReducer.role)
    const obj = {
    firstName : '',
    lastName : '',
    email : '',
    password : '',
    password_confirmation : '',
    userType : ''
 }

    const [state, setState] = useState(obj)
    const handleSubmit = () =>{
        dispatch(createUser(state,token))
        history.push('/users')
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
               {/* {auth && state.firstName == '' ? <span>please enter firstName </span>: null} */}
              </div>
            <div className="form-group mb-3">
                <input type="text"
                className={`form-control ${styles.inputField}`}
                placeholder="LastName"
                value ={state.lastName}
                onChange = {handleChangeLast}
              />
               {/* {auth && state.lastName == '' ? <span>please enter lastName </span>: null} */}
              </div>
            <div className="form-group mb-3">
                <input type="text"
                className={`form-control ${styles.inputField}`}
                placeholder="Email"
                value = {state.email}
                onChange = {handleChangeEmail}
              />
               {/* {auth && state.email == '' ? <span>please enter email </span>: null} */}
              </div>
            <div className="form-group mb-3">
                <input type="password"
                className={`form-control ${styles.inputField}`}
                placeholder="Password"
                value = {state.password}
                onChange = {handleChangePassword }
              />
              {/* {auth && state.password == '' ? <span>please enter password </span>: null} */}
              </div>
            <div className="form-group mb-3">
                <input type="password"
                className={`form-control ${styles.inputField}`}
                placeholder="confirm_Password"
                value = {state.password_confirmation}
                onChange = {handleChangeCpassword}
              />
              {/* {auth && state.password == '' ? <span>please enter password </span>: null} */}
              </div>
            <div className="form-group mb-3">
            <div className="form-group">
                <select 
                onClick = {handleChangeUserType}
                    className={`form-control ${styles.inputField}`} id="exampleFormControlSelect2">
                { role === "admin" &&
                 <option>manager</option>   
                }
                <option>user</option>
                </select>
            </div>
              
               {/* {auth && state.userType == '' ? <span>please enter UserType</span>: null} */}
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
