import React, { useState,useEffect } from 'react';
import { Badge } from 'react-bootstrap';
import getRoleMasterData from '../../services/roles/roleMasterData';

function RoleList(){

const [roles,  setRoles] = useState([]);

useEffect(()=>{
    setRoles(getRoleMasterData);

},[setRoles]);
        return(
            <>
       
                          {roles.length>0 &&(
                              roles.map((role, index)=>(
                                  <>
                  
                      
                              <Badge className="badge badge-info mr-1">{role.name}</Badge>
                            
           
                          </>
                              ))
                          )
                
                          }

                {roles.length===0 &&(
                // <p className="alert alert-danger text-center">No data found!!</p>
                <td colSpan={5} className="alert alert-danger text-center">
                    
                    <b>No data found!!</b>
                    </td>
                )
                }
    


  
        </>
    )
}
export default RoleList;