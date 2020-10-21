import React from 'react';
import Sidebar from '../../component/partials/sidebar';
import RoleList from '../../component/roles/roleList';
export default function Role(){
    return(
        <>
          <div className="dashboard">
       <div className="container">
           <div className="row mt-3">
               <div className="col-md-3">
                  <Sidebar></Sidebar>
               </div>
               <div className="col-md-9">
               <RoleList></RoleList>
               </div>
           </div>
       </div>
    </div>
        </>
    )
}