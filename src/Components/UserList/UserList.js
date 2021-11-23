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
        // eslint-disable-next-line
    },[token,page])
    return (
       
            <div className={styles.tableData}>
            <h3>Dashboard</h3>

                   <div className={styles.userList}>
                   {
             users?.map((list ,i)=>{
                return(
                  <div key={i} className={`card ${styles.Card}`} >
              <div className="card-body">
                  <ul className="d-flex" key={list.id}>
                    <li>Id:<span>{list.id}</span></li>
                    <li>FirstName: <span>{list.firstName}</span></li>
                    <li>LastName: <span>{list.lastName}</span></li>
                    <li>Email: <span>{list.email}</span></li>
                    <li>Role: <span>{role}</span></li>
    
                    <li>
                    <Link to='/edit' 
                    onClick={()=>dispatch(edit_User(list))}>
                    <i className="fa fa-edit" style={{color:"#000", marginRight:'30px'}}></i>
                    </Link>
                    <span  onClick={()=>{
                       if (window.confirm('Are you sure to delete this item?'))
                        dispatch(deleteUser(token,list.id))
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
           
                 <div className={styles.creatbtn}>
                 <Link to="/home">create new</Link>
                 </div>
           <div>
           <nav aria-label="...">
  <ul className={`pagination ${styles.Paginations}`}>
    <li className={`page-item ${styles.pageItem} ${page<=1?"disabled":''}`}>
      <span className={`page-link ${styles.pageLink}`} style={{cursor:'pointer'}} onClick={()=>dispatch(set_page(page-1))}>
      <i className="fa fa-long-arrow-left"></i> 
      </span>
    </li>
    {totalPages.map((p, i)=><li key={i} className={`page-item ${p===page?'active':''}`} aria-current="page">
      <span className="page-link" style={{cursor:'pointer'}} onClick={()=>dispatch(set_page(p))}>{p}</span>
    </li>
    )}
    <li className={`page-item ${styles.pageItem} ${page===totalPages.length?"disabled":''}`}>
      <span className={`page-link ${styles.pageLink}`} style={{cursor:'pointer'}} onClick={()=>dispatch(set_page(page+1))}>
      <i className="fa fa-long-arrow-right"></i> 
      </span>
    </li>
  </ul>
</nav>
           </div>
        </div>
    )
}

export default UserList
