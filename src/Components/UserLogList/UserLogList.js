import React , {useEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { fetch_workLog } from '../../Redux/Action/workLog';
import { edit_work } from '../../Redux/Action/EditworkAction';
import { Link} from 'react-router-dom';
import styles from './UserLogList.module.css'
import GetDate from '../GetDate/GetDate';
import {set_page } from '../../Redux/Action/data';
import { deleteUserLog } from '../../Redux/Action/workLog';

     const UserLogList = () => {

     const dispatch = useDispatch()
     const workData = useSelector((state)=>state.WorkLogReducer.workLog)
     const token = useSelector((state)=>state.AuthReducer.token)     
     const role = useSelector((state)=>state.AuthReducer.role)
     const page = useSelector((state)=>state.WorkLogReducer.page)
     const totalPages = useSelector((state)=>state.WorkLogReducer.totalPages)

    //  console.log("page", page)
    //  console.log("Totalpages", totalPages)
    //  console.log("workdata", workData.length)
  
    const editRecord = (work) =>{
      dispatch(edit_work(work))
    }
     useEffect(() => {
      dispatch(fetch_workLog)
      // eslint-disable-next-line
     }, [token,page])

    return (
        <div className="workloglist">
            <GetDate />
           <div className={styles.workLog}>
          
          <div className={styles.cardSection}>
          {
             workData?.map((work, i)=>{
                return(
                  <div key={i} className={`card ${styles.Card}`}  style={{backgroundColor:work.is_under_hours?'#FFCCCB':'#aedb9f'}}>
              <div className="card-body">
                  <ul className="d-flex">
                    <li>Id:<span>{work.id}</span></li>
                    <li>LogDate: <span>{work.log_date}</span></li>
                    <li>Hours: <span>{work.hours}</span></li>
                    <li>UserType: <span>{role}</span></li>
                    <li>Description: <span>{work.description}</span></li>
                    <li>
                    <Link to='/editLog' 
                      onClick={()=> editRecord(work)}>
                     <i className="fa fa-edit" style={{color:"#000", marginRight:'30px'}}></i>
                      </Link>

                      <span  onClick={()=>{
                              dispatch(deleteUserLog(token,work.id))
                          }}>
                             <i className="fa fa-trash" style={{color:"red", cursor:"pointer"}}></i>
                          </span>

                    </li>
                   
                  </ul>
              </div>
           </div>
                )
             })
           }
          </div>
        <button className={styles.userbtn}>
        <Link to='/user-log'>Add New </Link>
    </button>
    {workData.length > 0 ?
    <nav aria-label="...">
  <ul className={`pagination ${styles.Paginations} mt-5`}>
    <li className={`page-item ${styles.pageItem} ${page<=1?"disabled":''}`}>
      <span className={`page-link ${styles.pageLink}`} style={{cursor:'pointer'}} onClick={()=>dispatch(set_page(page-1))}>
      <i className="fa fa-long-arrow-left"></i> 
      </span>
    </li>
    {totalPages.map((p,i)=><li key={i} className={`page-item ${styles.pageItem} ${p===page?'active':''}`} aria-current="page">
      <span className={`page-link ${styles.pageLink}`} style={{cursor:'pointer'}} onClick={()=>dispatch(set_page(p))}>{p}</span>
    </li>
    )}
    <li className={`page-item ${styles.pageItem} ${page===totalPages.length?"disabled":''}`}>
      <span className={`page-link ${styles.pageLink}`} style={{cursor:'pointer'}} onClick={()=>dispatch(set_page(page+1))}>
      <i className="fa fa-long-arrow-right"></i> 
      </span>
    </li>
  </ul>
</nav> 
 : null }
           </div>
        </div>
    )
}

export default UserLogList
