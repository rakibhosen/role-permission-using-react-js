import React, { useState,useEffect } from 'react';
import userData from '../../services/users/usersData';

function UserList(){

const [users,  setUsers] = useState([]);

useEffect(()=>{
    setUsers(userData())

},[setUsers]);
        return(
            <>
                  <table className="table table-bordered">
                      <thead>
                          <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Role</th>
                        <th>Action</th>
                          </tr>
                      </thead>
                      <tbody>
                          {users.length>0 &&(
                              users.map((user, index)=>(
                                  <>
                          <tr>
                              <td> {index+1}</td>
                              <td> {user.name}</td>
                              <td> {user.username}</td>
                             <td> {user.role!=null? user.role : "---" }</td>
                            
                              <td>
                              <button className="btn btn-info mr-1">Edit</button>
                                   <button className="btn btn-danger">x</button>
                                   </td>
                          </tr></>
                              ))
                          )
                
                          }

                {users.length===0 &&(
                // <p className="alert alert-danger text-center">No data found!!</p>
                <td colSpan={5} className="alert alert-danger text-center">
                    
                    <b>No data found!!</b>
                    </td>
                )
                }
    


                      </tbody>
                  </table>
        </>
    )
}
export default UserList;