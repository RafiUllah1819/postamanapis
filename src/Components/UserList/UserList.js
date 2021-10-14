import styles from './UserList.module.css'
import React , { useEffect } from 'react';
import { getAllData, set_page, edit_User,deleteUser } from '../../Redux/Action/data';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const UserList = () => {
    const dispatch = useDispatch()
    const token = useSelector((state)=>state.AuthReducer.token)
    const users = useSelector((state)=>state.UsersReducer.users)
    const page = useSelector((state)=>state.UsersReducer.page)
    const totalPages = useSelector((state)=>state.UsersReducer.totalPages)
    const role = useSelector((state)=>state.AuthReducer.role)
    useEffect(()=> {
        dispatch(getAllData(token,page));
    },[token,page])
    return (
       
            <div className={styles.tableData}>
            <h3>Dashboard</h3>
            <table className="table table-striped  table-hover">
               <thead>
                   <tr>
                       <th>Id</th>
                       <th>FirstName</th>
                       <th>LastName</th>
                       <th>Email</th>
                       <th>Role</th>
                       <th>Edit</th>
                       <th>Delete</th>
                   </tr>
               </thead>
               <tbody>
                   {
                       users?.map((list, i)=>{
                         return(
                            <tr key={i}>
                            <td>{list.id}</td>
                            <td>{list.firstName}</td>
                            <td>{list.lastName}</td>
                            <td>{list.email}</td>
                            <td>{role}</td>
                            <td><Link to='/edit' className="btn btn-primary"
                            onClick={()=>dispatch(edit_User(list))}>
                            Edit 
                                </Link></td>
                            <td>
                                <button className="btn btn-danger" onClick={()=>{
                                    dispatch(deleteUser(token,list.id))
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
                 <div className={styles.creatbtn}>
                 <Link to="/home">create new</Link>
                 </div>
           <div>
           <nav aria-label="...">
  <ul className="pagination">
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
           </div>
        </div>
    )
}

export default UserList
