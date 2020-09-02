import React from 'react'
import {  Link } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux'
import {logOut } from '../store/slices/authSlice'

export default function Header(){
  
  const dispatch=useDispatch()
  let isLoggedIn=useSelector(state=>state.auth.loggedIn)
  if(localStorage.getItem("user"))
  {
    isLoggedIn=true;
  }
  
    return (
      
                <div className="container" >
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                  
                      <Link to="/" className="navbar-brand">QBatch</Link>
                      <div className="collpase navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                          
                          <li className="navbar-item">
                            <Link to="/home" className="nav-link">Home </Link>
                          </li>
                          <li className="navbar-item">
                            {!isLoggedIn && <strong><Link to="/" className="nav-link" >Sign In</Link></strong>}
                          </li>
                        </ul>
                        {isLoggedIn && <strong><Link to="/" className="nav-link" onClick={()=>{dispatch(logOut());} }>Sign Out</Link></strong>}
                      </div>
                  </nav>
                <br/>
            </div>
        )
    
}






