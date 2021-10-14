import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { filterWorkLog } from '../../Redux/Action/workLog';
import styles from './GetDate.module.css'


const GetDate = () => {
    const dis = useDispatch();
    const [from , setFrom] = useState('')
     const [to , setTo] = useState('')
    //  console.log(from);
    //  console.log(to)
    return (
        <div>
            
            <div className={styles.Fields}>
        <h3>Filter by Date</h3>
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

