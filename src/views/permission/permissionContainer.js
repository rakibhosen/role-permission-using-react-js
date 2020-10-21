import React from 'react';
import Sidebar from '../../component/partials/sidebar';
import PermissionList from '../../component/permission/permissionList';
export default function permission(){
    return(
        <>
    <div className="dashboard">
       <div className="container">
           <div className="row mt-3">
               <div className="col-md-3">
                  <Sidebar></Sidebar>
               </div>
               <div className="col-md-9">
                  <PermissionList></PermissionList>
               </div>
           </div>
       </div>
    </div>
        </>
    )
}