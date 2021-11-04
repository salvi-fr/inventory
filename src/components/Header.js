
import React from 'react';
import {Link, NavLink} from 'react-router-dom';
export const AdminHeader=()=>{
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                  
        <Link to="/stock" className="navbar-brand" href="#"><h1>EStock Admin</h1></Link>

        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <NavLink to="/stock" className="nav-link" href="#">Stock </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/viewlist" className="nav-link" href="#">Report</NavLink>
                </li>
            </ul>
        </div>

    </nav>
    )
}
export const UserHeader=()=>{
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                  
        <Link to="/" className="navbar-brand" href="#"><h1>EStock User</h1></Link>

        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <NavLink to="/" className="nav-link" href="#">Stock </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/login" className="nav-link" href="#">Login</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/signup" className="nav-link" href="#">Signup</NavLink>
                </li>
            </ul>
        </div>

    </nav>
    )
}
export const StockerHeader=()=>{
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                  
             <Link to="/stock" className="navbar-brand" href="#"><h1>EStock Manager</h1></Link>

             <div className="collapse navbar-collapse" id="navbarNav">
                 <ul className="navbar-nav">
                     <li className="nav-item active">
                         <NavLink to="/stock" className="nav-link" href="#"> Stock </NavLink>
                     </li>
                     <li className="nav-item">
                    <NavLink to="/viewlist" className="nav-link" href="#">Stock In</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/viewlist" className="nav-link" href="#">Stock Out</NavLink>
                </li>
                 </ul>
             </div>

         </nav>
    )
}
const Header =(r)=> {
    console.log(r)
    let role=r
    if(!role){
        role="User";
    } 

       return(
           <>
         
                {role=="Stocker" &&
             <nav className="navbar navbar-expand-lg navbar-light bg-light">
                  
             <Link to="/" className="navbar-brand" href="#"><h1>E Stock Stocker</h1></Link>

             <div className="collapse navbar-collapse" id="navbarNav">
                 <ul className="navbar-nav">
                     <li className="nav-item active">
                         <NavLink to="/" className="nav-link" href="#">Add new </NavLink>
                     </li>
                     <li className="nav-item">
                         <NavLink to="/viewlist" className="nav-link" href="#">View list</NavLink>
                     </li>
                 </ul>
             </div>

         </nav>
           }
                {role=="User" &&
             <nav className="navbar navbar-expand-lg navbar-light bg-light">
                  
             <Link to="/" className="navbar-brand" href="#"><h1>E Stock </h1></Link>

             <div className="collapse navbar-collapse" id="navbarNav">
                 <ul className="navbar-nav">
                     <li className="nav-item active">
                         <NavLink to="/" className="nav-link" href="#">Add new </NavLink>
                     </li>
                     <li className="nav-item">
                         <NavLink to="/viewlist" className="nav-link" href="#">View list</NavLink>
                     </li>
                 </ul>
             </div>
         </nav>
           }
           </>
         
       );
   
}

export default Header;