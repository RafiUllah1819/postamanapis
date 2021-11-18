import React , {useState,useEffect} from 'react'
import styles from './UserLog.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { fetch_workLog } from '../../Redux/Action/workLog';
import { createWorkLog } from '../../Redux/Action/workLog';
import { Link} from 'react-router-dom';
import { toast } from 'react-toastify';


const UserLog = () => {
    const dispatch = useDispatch();
    const token = useSelector((state)=>state.AuthReducer.token)

    const obj = {
        logDate : '',
        hours : '',
        description : ''
    }
    const [state, setState] = useState(obj)
    // eslint-disable-next-line
    const [auth, setAuth] = useState(false)


    useEffect(() => {
        dispatch(fetch_workLog(token))
        // eslint-disable-next-line
    }, [token]);


    // const handleData = () =>{
    //     if(state.logDate.length > 0 && state.hours.length > 0 && state.description.length>0){
          
    //     }else{

    //     }
    const handleSubmit = () =>{
    
        if(state.logDate.length < 1 || state.hours.length<1 || state.description.length<1)
        {setAuth(true)
         if(state.logDate.length===0)  error("LogDate is empty")
         if(state.hours.length===0)  error("Hours is empty")
         if(state.description.length===0)  error("Description is empty")
        }
        
        else{
            dispatch(createWorkLog(state,token))
            success("workLog added successfully")
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
               {/* {auth && state.logDate === '' ? <span style={{color:'red'}}>please enter lastName </span>: null} */}
              </div>
           <div className="form-group mb-3">
                <input type="number"
                className={`form-control ${styles.inputField}`} 
                placeholder="Enter hours"
                onChange={hangleChangehours}
                value={state.hours}
              />
               {/* {auth && state.hours === '' ? <span style={{color:'red'}}>please enter lastName </span>: null} */}
              </div>
              <div className="form-group">
                <textarea  className={`form-control ${styles.inputField}`} 
                placeholder="Description"
                 id="exampleFormControlTextarea1" rows="4" 
                 value={state.description}
                 onChange={hangleChangeDescription }
                 />
                  {/* {auth && state.description === '' ? <span style={{color:'red'}}>please enter lastName </span>: null} */}
            </div>
            <button className="btn btn-success d-flex align-items-center  mt-3"
             style={{width:'163px', height:'45px',}}
            onClick={ ()=> handleSubmit()
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
