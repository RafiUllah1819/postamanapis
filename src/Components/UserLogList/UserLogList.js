import React , {useEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { fetch_workLog } from '../../Redux/Action/workLog';
import { edit_work } from '../../Redux/Action/EditworkAction';
import { Link ,useHistory } from 'react-router-dom';
import styles from './UserLogList.module.css'
import GetDate from '../GetDate/GetDate';
import {set_page } from '../../Redux/Action/data';
import { deleteUserLog } from '../../Redux/Action/workLog';

    const UserLogList = () => {
        const history = useHistory()
     const dispatch = useDispatch()
     const workData = useSelector((state)=>state.WorkLogReducer.workLog)
     const token = useSelector((state)=>state.AuthReducer.token)     
     const role = useSelector((state)=>state.AuthReducer.role)
     const page = useSelector((state)=>state.WorkLogReducer.page)
     const totalPages = useSelector((state)=>state.WorkLogReducer.totalPages)
     console.log("page", page)
     console.log("Totalpages", totalPages)
     console.log("workdata", workData.length)
    //  const [popup, setPopup] = useState(false)

    const editRecord = (work) =>{
      dispatch(edit_work(work))
    }
     useEffect(() => {
      dispatch(fetch_workLog)
     }, [token,page])

    return (
        <div className="workloglist">
            <GetDate />
           <div className={styles.workLog}>
           <table className="table table-striped  table-hover mb-0">
               <thead>
                   <tr>
                       <th>Id</th>
                       <th>Log_Date</th>
                       <th>Hours</th>
                       <th>UserType</th>
                       <th>Description</th>
                       <th>Edit</th>
                       <th>Delete</th>
                   </tr>
               </thead>
               <tbody>
                 {
                     workData?.map((work , i)=>{
                         return(
                            <tr key={i} style={{backgroundColor:work.hours>5?'#FFCCCB':'#aedb9f'}}>
                                <td>{work.id}</td>
                                <td>{work?.log_date}</td>
                                <td>{work.hours}</td>
                                <td>{role}</td>
                                <td>{work.description}</td>
          
                                   <td><Link to='/editLog' className="btn btn-primary"
                            onClick={()=> editRecord(work)}>
                            Edit 
                                </Link></td>
                            
                                <td>
                                <button className="btn btn-danger" onClick={()=>{
                                    dispatch(deleteUserLog(token,work.id))
                                }}>
                                    Delete
                                </button>
                            </td>

                            </tr>
                            
                         )
                        })
                    }
               </tbody>
                    
           </table>
        <button className={styles.userbtn}>
        <Link to='/user-log'>Add New </Link>
    </button>
    {workData.length > 0 ?
    <nav aria-label="...">
  <ul className="pagination mt-5">
    <li className={`page-item ${page<=1?"disabled":''}`}>
      <span className='page-link' style={{cursor:'pointer'}} onClick={()=>dispatch(set_page(page-1))}>Previous</span>
    </li>
    {totalPages.map((p)=><li className={`page-item ${p===page?'active':''}`} aria-current="page">
      <span className="page-link" style={{cursor:'pointer'}} onClick={()=>dispatch(set_page(p))}>{p}</span>
    </li>
    )}
    <li className={`page-item ${page===totalPages.length?"disabled":''}`}>
      <span className={`page-link`} style={{cursor:'pointer'}} onClick={()=>dispatch(set_page(page+1))}>Next</span>
    </li>
  </ul>
</nav> 
 : null }
           </div>
        </div>
    )
}

export default UserLogList
