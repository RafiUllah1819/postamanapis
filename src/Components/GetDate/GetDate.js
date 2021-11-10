import React,{useState ,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterWorkLog } from '../../Redux/Action/workLog';
import { getHours } from '../../Redux/Action/datefilterAction';
import { fetch_workLog } from '../../Redux/Action/workLog';
import styles from './GetDate.module.css'
import { useHistory } from 'react-router';


const GetDate = () => {
    // const id = useSelector((state)=>state.AuthReducer.id)
    const token = useSelector((state)=>state.AuthReducer.token)     
    const page = useSelector((state)=>state.WorkLogReducer.page)
    const history = useHistory()
   
    const dis = useDispatch();
    const [from , setFrom] = useState('')
     const [to , setTo] = useState('')
     const [prefHours , setPrefHours] = useState('')


     useEffect(() => {
        dis(fetch_workLog)
       }, [token,page])
       
    return (
        <div className={`searchSection d-flex justify-content-start ${styles.searchSections} ml-5`}>
            {/* prefferd hours */}
            <div className={`preHOurs ${styles.preHours}`}>
                <h5>Prefferd Hours</h5>
            <div className="form-group">
               <input type ="text" className="form-control" 
                placeholder="prefferd hour"
                value={prefHours}
                onChange={(e)=>setPrefHours(e.target.value)}
                />
            </div> 
            <button className="btn btn-info" 
            onClick={()=>
                dis(getHours({workingHours:prefHours}))
            }
            >Filter</button>
            </div>


            <div className={styles.Fields}>
        <h5>Filter by Date</h5>
        <div className={styles.formData}>
        <div className="form-group mt-4 d-flex">
        <label style={{color:"white", fontSize:"24px",paddingRight:'8px'}}>From:</label>
               <input type ="date" className="form-control" 
                name="begin"
                placeholder="yyyy-mm-dd"
                min="1997-01-01" max="2030-12-31"
                onChange={(e)=>setFrom(e.target.value)}
                />
            </div>
            <div className="form-group mt-3 d-flex">
            <label style={{color:"white", fontSize:"24px",padding:'0 20px'}}>To:</label>
                <input type ="date" className="form-control"
                 name="begin"
                 placeholder="yyyy-mm-dd"
                 min="1997-01-01" max="2030-12-31"
                 onChange={(e)=>setTo(e.target.value)}
                />
               
            </div>
        </div>
            <button className={styles.btn} onClick={()=>dis(filterWorkLog(from,to))}>Filter</button>
    </div> 
        </div>
    )
}

export default GetDate

