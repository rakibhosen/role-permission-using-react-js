import React from 'react';
import UserList from '../../component/users/userList';
import Sidebar from '../../component/partials/sidebar';

const User=()=>{
    return(
    <div className="dashboard">
       <div className="container">
           <div className="row mt-3">
               <div className="col-md-3">
                  <Sidebar></Sidebar>
               </div>
               <div className="col-md-9">
                   <UserList></UserList>
               </div>
           </div>
       </div>
    </div>
    )
}

export default User;