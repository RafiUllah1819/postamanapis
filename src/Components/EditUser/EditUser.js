import React , {useState , useEffect} from 'react';
import styles from './EditUser.module.css';
import { useDispatch,useSelector } from 'react-redux';
import { getEditData } from '../../Redux/Action/data';
import {  useHistory } from 'react-router-dom';


const EditUser = () => {
    
    const dispatch = useDispatch()
    const history = useHistory()
    const token = useSelector((state)=>state.AuthReducer.token)
    const editData = useSelector((state)=>state.EditReducer.editData)
    const [id, setId] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
        useEffect(()=>{
        setId(editData?.id);
        setFirstName(editData?.firstName);
        setLastName(editData?.lastName);
        setEmail(editData?.email);
    },[editData])
    return (
      <div className="container">
      <div>
            <div className={styles.formWrap}>
                <h3 className="mb-5">CREATE REGLAR USER</h3>
            <div className="form-group mb-3">
                <input type="text"
                className={`form-control ${styles.inputField}`}
                placeholder="FirstName"
                value ={firstName}
                onChange = {(e)=>setFirstName(e.target.value)}
              />
               {/* {auth && state.firstName == '' ? <span>please enter firstName </span>: null} */}
              </div>
            <div className="form-group mb-3">
                <input type="text"
                className={`form-control ${styles.inputField}`}
                placeholder="LastName"
                value ={lastName}
                onChange = {(e)=>setLastName(e.target.value)}
              />
               {/* {auth && state.lastName == '' ? <span>please enter lastName </span>: null} */}
              </div>
            <div className="form-group mb-3">
                <input type="text"
                className={`form-control ${styles.inputField}`}
                placeholder="Email"
                value = {email}
                onChange = {(e)=>setEmail(e.target.value)}
              />
               {/* {auth && state.email == '' ? <span>please enter email </span>: null} */}
              </div>
      
                <div className="btns d-flex">
               
                <button className="btn btn-success mr-3"
                    onClick={()=>dispatch(getEditData(token,history.push,{id,firstName,lastName,email}))}
                    >Update</button>

                     {/* <button className="btn btn-primary">
                    <Link to="/users"
                    className={styles.allUser}
                    >All Users</Link>
                    </button> */}
                   
                </div>
            </div>
      </div>

    </div>
    )
}

export default EditUser
