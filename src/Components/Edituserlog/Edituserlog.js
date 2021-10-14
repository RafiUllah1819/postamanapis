import React , {useState,useEffect} from 'react'
import styles from './Edituserlog.module.css'
import { useSelector, useDispatch } from 'react-redux';
import {  getEditLog } from '../../Redux/Action/EditworkAction';
import { useHistory } from 'react-router';

const EditUserLog = () => {
    const history = useHistory()
    const dispatch = useDispatch();
    const token = useSelector((state)=>state.AuthReducer.token)
    const editwork = useSelector((state)=>state.EditWorkReducer.editDataWork)

    const [id, setId] = useState('');
    const [logDate, setLogDate] = useState('');
    const [hours, setHours] = useState('');
    const [description, setDescription] = useState('')

    useEffect(() => {
       setId(editwork?.id);
       setLogDate(editwork?.logDate);
       setHours(editwork?.hours);
       setDescription(editwork?.description)
    }, [editwork]);
 

    return (
        <div className="container">
            <h1> User Work Log</h1>                                                                         
           <div className={styles.formWrap}>
           <div className="form-group mb-3">
                <input type="date"
                className={`form-control ${styles.inputField}`}
                onChange={(e) =>setLogDate(e.target.value) }
                value={logDate} 
                name="begin"
                placeholder="yyyy-mm-dd"
                min="1997-01-01" max="2030-12-31"
              />  
              </div>
           <div className="form-group mb-3">
                <input type="number"
                className={`form-control ${styles.inputField}`} 
                placeholder="Enter hours"
                onChange={(e)=>setHours(e.target.value)}
                value={hours}
              />
              </div>
              <div class="form-group">
                <textarea  className={`form-control ${styles.inputField}`} 
                placeholder="Description"
                 id="exampleFormControlTextarea1" rows="4" 
                 value={description}
                 onChange={(e)=>setDescription(e.target.value) }
                 />
            </div>
    
            <button className="btn btn-info d-flex mt-3"
            onClick={()=>dispatch(getEditLog(token,history.push,{id, logDate,hours, description})),
                history.push('/UserLogList')}
            >
                   Update
            </button>
           </div>

        </div>
    )
}

export default EditUserLog 

// import React from 'react'

// const Edituserlog = () => {
//     return (
//         <div>
//             <h3>edituser</h3>
//         </div>
//     )
// }

// export default Edituserlog

