import React, { useState,useEffect } from 'react';
import { Badge } from 'react-bootstrap';
import getPermissionMasterData from '../../services/permissions/permissionMasterData';

function PermissionList(){

    const [permissions,  setPermissions] = useState([]);

    useEffect(()=>{
        setPermissions(getPermissionMasterData);
    
    },[setPermissions]);
        return(
            <>
       
                          {permissions.length>0 &&(
                              permissions.map((permission, index)=>(
                                  <>
                  
                      
                              <Badge className="badge badge-info mr-1">{permission.name}</Badge>
                            
           
                          </>
                              ))
                          )
                
                          }

                {permissions.length===0 &&(
                // <p className="alert alert-danger text-center">No data found!!</p>
                <td colSpan={5} className="alert alert-danger text-center">
                    
                    <b>No data found!!</b>
                    </td>
                )
                }
    


  
        </>
    )
}
export default PermissionList;