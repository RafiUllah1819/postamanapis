import React , {useState,useEffect} from 'react'
import styles from './UserLog.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { fetch_workLog } from '../../Redux/Action/workLog';
import { createWorkLog } from '../../Redux/Action/workLog';
import { Link , useHistory } from 'react-router-dom';


const UserLog = () => {
    const history = useHistory()
    const dispatch = useDispatch();
    const token = useSelector((state)=>state.AuthReducer.token)

    const obj = {
        logDate : '',
        hours : '',
        description : ''
    }
    const [state, setState] = useState(obj)

    const [auth, setAuth] = useState(false)

    // const handleSubmit = () =>{
    //     dispatch(createWorkLog(state,token))
    // }

    useEffect(() => {
        dispatch(fetch_workLog(token))
    }, [token]);


    const handleSubmit = () =>{
        if(state.logDate.length < 1 || state.hours.length<1 || state.description.length<1)
        {setAuth(true)}
        else{
            dispatch(createWorkLog(state,token))
            setState(obj);
        }
    }
    const hangleChangelogData = (e) =>{
        setState({
            ...state,
            logDate : e.target.value
        })
    }
    const hangleChangehours = (e) =>{
        setState({
            ...state,
            hours:parseInt(e.target.value)
        })
    }
    const hangleChangeDescription = (e) =>{
        setState({
            ...state,
            description : e.target.value
        })
    }
    const handleClick = () => {
        history.push("/UserLogList");
      }
   
    return (
        <div className="container">
            <h1> User Work Log</h1>
           <div className={styles.formWrap}>
           <div className="form-group mb-3">
                <input type="date"
                className={`form-control ${styles.inputField}`}
                onChange={ hangleChangelogData}
                value={state.logDate} 
                name="begin"
                placeholder="yyyy-mm-dd"
                min="1997-01-01" max="2030-12-31"
              />  
               {auth && state.logDate === '' ? <span style={{color:'red'}}>please enter lastName </span>: null}
              </div>
           <div className="form-group mb-3">
                <input type="number"
                className={`form-control ${styles.inputField}`} 
                placeholder="Enter hours"
                onChange={hangleChangehours}
                value={state.hours}
              />
               {auth && state.hours === '' ? <span style={{color:'red'}}>please enter lastName </span>: null}
              </div>
              <div class="form-group">
                <textarea  className={`form-control ${styles.inputField}`} 
                placeholder="Description"
                 id="exampleFormControlTextarea1" rows="4" 
                 value={state.description}
                 onChange={hangleChangeDescription }
                 />
                  {auth && state.description === '' ? <span style={{color:'red'}}>please enter lastName </span>: null}
            </div>
            <button className="btn btn-success d-flex align-items-center  mt-3"
             style={{width:'163px', height:'45px',}}
            onClick={ ()=> { handleSubmit() ; handleClick()}
            } > CreateWorkLog
           
            </button>
            <button className="btn btn-info d-flex mt-3" style={{width:'160px'}}>
                <Link to="/UserLogList">WorkLogList</Link>
            </button>
           </div>

        </div>
    )
}

export default UserLog
