import React from 'react'
import { useDispatch } from 'react-redux';
import {logout} from '../../Redux/Action/auth';


const Nav = () => {
    const dispatch = useDispatch();
    const logOut = ()=>{
        dispatch(logout)
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light justify-content-end">
 
  <div className="d-flex justify-content-end" id="navbarSupportedContent ">
  
    <form className="form-inline my-2 my-lg-0">
     
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit"
      onClick={logOut}
      >Logout</button>
    </form>
  </div>
</nav>
    )
}

export default Nav
